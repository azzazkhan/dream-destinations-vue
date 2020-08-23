<template>
  <div class="pt-lg-4 px-lg-2">
    <BookingGuestsWidgetCounter
      :data="{
      count: adults,
      single: 'adult',
      multiple: 'adults',
      max: 20,
    }"
      @updated="update_adults($event)"
    />
    <BookingGuestsWidgetCounter
      :data="{
      count: children,
      single: 'child',
      multiple: 'children',
      max: 20,
    }"
      @updated="update_children($event)"
    />
    <BookingGuestsWidgetToggle title="Pets" :data="{toggled: pets}" @updated="update_pets($event)" />
    <p
      class="my-3 mx-0 text-center"
      :class="{invisible: !pets}"
      style="font-size: 14px;"
    >Only hotels that allow Shaheer will be shown</p>
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
      adults: 0,
      children: 0,
      pets: false,
    };
  },
  computed: {
    guests() {
      // Nothing goes on whithout adults.
      if (this.adults <= 0) return;

      return (
        `${this.adults + this.children} Guests` + (this.pets ? ", Shaheer" : "")
      );
    },
  },
  methods: {
    update_adults(count) {
      this.adults = count;
      this.notify_guests();
    },
    update_children(count) {
      this.children = count;
      this.notify_guests();
    },
    update_pets(is_allowed) {
      this.pets = is_allowed;
      this.notify_guests();
    },
    notify_guests() {
      this.$emit("updated", this.guests);
    },
  },
};
</script>