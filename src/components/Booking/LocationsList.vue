<template>
  <div class="BookingLocationsListComponent places-wrapper">
    <!-- <div
        v-if="entry.slice().length == 0 || search.matched.length == 0"
        style="padding-top: 20px; text-align: center;"
    >{{ entry.slice().length == 0 ? 'Please enter a location name' : 'No locations found' }}</div>-->
    <BookingLocationItem v-for="(place, index) in places" :key="index" :place="place" />
  </div>
</template>

<script>
import BookingLocationItem from "./LocationItem.vue";

export default {
  name: "BookingLocationsList",
  components: {
    BookingLocationItem,
  },
  props: {
    places: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style
  scoped
  lang="scss"
  src="@/assets/scss/components/bookingLocationsList.scss"
></style>