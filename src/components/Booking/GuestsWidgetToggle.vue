<template>
  <div class="BookingGuestsWidgetToggleComponent selection-field">
    <div class="description" v-text="heading"></div>
    <div class="actions">
      <button
        class="text"
        :class="{ active: defaults.toggled }"
        @click="toggle()"
        v-text="defaults.on"
      ></button>
      <button
        class="text"
        :class="{ active: !defaults.toggled }"
        @click="untoggle()"
        v-text="defaults.off"
      ></button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BookingGuestsWidgetToggle",
    props: {
      title: String,
      data: Object,
    },
    data() {
      return {
        heading: "Choose one",
        defaults: {
          toggled: false,
          on: "Yes",
          off: "No",
        },
      };
    },
    mounted() {
      this.merge_defaults();
      if (typeof this.title == "string" && this.title.slice().length > 0)
        this.heading = this.title;
    },
    methods: {
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
      toggle() {
        this.defaults.toggled = true;
        this.notify_parent();
      },
      untoggle() {
        this.defaults.toggled = false;
        this.notify_parent();
      },
      notify_parent() {
        this.$emit("updated", this.defaults.toggled);
      },
    },
  };
</script>

<style
  scoped
  lang="scss"
  src="@/assets/scss/components/bookingGuestsWidgetField.scss"
></style>
