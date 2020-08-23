<template>
  <div class="selection-field">
    <div class="description text-capitalize" v-text="count_text"></div>
    <div class="actions">
      <button class="minus" @click="remove()">
        <svg
          focusable="false"
          data-id="SVG_MINUS__16"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path fill="none" stroke-linecap="round" stroke-linejoin="round" d="M12.5 8h-9" />
        </svg>
      </button>
      <button class="plus" @click="add()">
        <svg
          focusable="false"
          data-id="SVG_PLUS__16"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 12.5v-9M12.5 8h-9"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "BookingGuestsWidgetCounter",
  props: {
    data: {
      type: Object,
    },
  },
  data() {
    return {
      defaults: {
        count: 0,
        increment: 1,
        decrement: 1,
        empty: "no",
        single: "item",
        multiple: "items",
        negative: false,
        max: 1e3,
        min: 0,
      },
    };
  },
  computed: {
    count_text() {
      let { count, empty, single, multiple, negative } = this.defaults;
      if (count == 0) return `${empty} ${single}`;
      else if (negative && count < 0) return `${count} ${multiple}`;
      else if (count == 1) return `${count} ${single}`;
      else if (count >= 2) return `${count} ${multiple}`;
    },
  },
  mounted() {
    this.merge_defaults();
  },
  methods: {
    add() {
      let { count, max } = this.defaults;
      if (count >= max) this.defaults.count = max;
      else this.defaults.count++;
      this.notify_parent();
    },
    remove() {
      let { count, min, negative } = this.defaults;
      if (!negative && count <= 0) this.defaults.count = 0;
      else if (count <= min) this.defaults.count = min;
      else this.defaults.count--;
      this.notify_parent();
    },
    notify_parent() {
      this.$emit("updated", this.defaults.count);
    },
    merge_defaults() {
      let defaults = this.defaults,
        data = this.data;
      if (typeof this.data == "object") {
        Object.keys(defaults).forEach(function(key) {
          if (typeof data[key] == typeof defaults[key])
            defaults[key] = data[key];
        });
      }
    },
  },
};
</script>

<style
  scoped
  lang="scss"
  src="@/assets/scss/components/bookingGuestsWidgetField.scss"
></style>