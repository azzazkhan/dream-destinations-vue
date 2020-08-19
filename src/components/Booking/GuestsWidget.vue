<template>
  <div class="pt-lg-4 px-lg-2">
    <BookingGuestsWidgetCounter
      :data="{
      single: 'adult',
      multiple: 'adults',
      max: 20,
    }"
    />
    <BookingGuestsWidgetCounter
      :data="{
      single: 'child',
      multiple: 'children',
      max: 20,
    }"
    />
    <BookingGuestsWidgetToggle title="Pets" />
    <p
      class="my-3 mx-0 text-center"
      :class="{invisible: !pets}"
      style="font-size: 14px;"
    >Only hotels that allow pets will be shown</p>
  </div>
</template>

<script>
import BookingGuestsWidgetCounter from "./GuestsWidgetCounter.vue";
import BookingGuestsWidgetToggle from "./GuestsWidgetToggle.vue";

export default {
  name: "BookingGuestsWidget",
  components: {
    BookingGuestsWidgetCounter,
    BookingGuestsWidgetToggle,
  },
  data() {
    return {
      pets: false,
    };
  },
  methods: {
    add_adult() {
      if (this.adults >= 20) return;
      this.adults++;
    },
    remove_adult() {
      if (this.adults < 1) this.adults = 1;
      this.adults--;
    },
    add_child() {
      if (this.children >= 20) return;
      this.children++;
    },
    remove_child() {
      if (this.children < 1) this.children = 1;
      this.children--;
    },
  },
};
</script>