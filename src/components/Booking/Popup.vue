<template>
  <div class="BookingPopupComponent selection-box">
    <div class="header">
      <h3 v-if="title && !input" class="title" v-text="title"></h3>
      <input
        v-if="has_input_box"
        type="text"
        class="input-capture"
        v-model="entry"
        :placeholder="(typeof input.placeholder).toLowerCase() == 'string' ? input.placeholder : 'Please enter your data here.'"
        autocomplete="off"
      />
      <span class="close-icon dismiss-selection">
        <svg
          focusable="false"
          data-id="SVG_CLOSE__16"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5 12.5l-9-9m9 0l-9 9"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
    </div>
    <CubesLoader :class="{'d-none': !loading}" />
    <div class="selection-content px-0">
      <!-- <div
        v-if="entry.slice().length == 0 || search.matched.length == 0"
        style="padding-top: 20px; text-align: center;"
      >{{ entry.slice().length == 0 ? 'Please enter a location name' : 'No locations found' }}</div>-->
      <button
        v-if="dismissButton"
        class="custom-btn blue continue dismiss-selection w-75 mx-auto mt-4"
      >Continue</button>
    </div>
  </div>
</template>

<script>
import "@/assets/js/bookingPopup.js";

import CubesLoader from "@/components/Loaders/Cubes.vue";
// import BookingLocationList from "./BookingLocationsList.vue";

export default {
  name: "BookingPopup",
  props: {
    title: {
      type: String,
    },
    input: {
      type: Object,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    dismissButton: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    CubesLoader,
    // BookingLocationList,
  },
  data() {
    return {
      entry: "",
      search: {
        input_holder: "",
        loading: false,
        arrival: "",
        departure: "",
        guests: {
          adults: 0,
          children: 0,
          pets: false,
        },
        matched: [],
        records: [],
      },
    };
  },
  computed: {
    total_guests() {
      // Nothing goes on whithout adults.
      if (this.search.guests.adults <= 0) return;

      let _total_guests =
        this.search.guests.adults + this.search.guests.children;
      let _pets = this.search.guests.pets ? ", Pets" : "";

      return `${_total_guests} Guests` + _pets;
    },
    has_input_box() {
      return this.input && (typeof this.input).toLowerCase() == "object";
    },
  },
  methods: {
    filter_location() {
      this.search.loading = true;
      let typed_location = this.search.input_holder;
      let filtered_places = this.search.records.filter(place => {
        return (
          place.name.toLowerCase().search(typed_location.toLowerCase()) != -1
        );
      });
      this.search.matched = filtered_places.splice(4, filtered_places.length);
      setTimeout(() => {
        this.search.loading = false;
      }, 500);
    },
    add_adult() {
      if (this.search.guests.adults >= 20) return;
      this.search.guests.adults++;
    },
    remove_adult() {
      if (this.search.guests.adults < 1) this.search.guests.adults = 1;
      this.search.guests.adults--;
    },
    add_child() {
      if (this.search.guests.children >= 20) return;
      this.search.guests.children++;
    },
    remove_child() {
      if (this.search.guests.children < 1) this.search.guests.children = 1;
      this.search.guests.children--;
    },
    select_place(place) {
      this.search.input_holder = place;
    },
  },
};
</script>
<style scoped lang="scss" src="@/assets/scss/components/bookingPopup.scss"></style>