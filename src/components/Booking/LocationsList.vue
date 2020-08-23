<template>
  <div>
    <div
      class="BookingLocationsListComponent places-wrapper"
      :class="{'full-view': fullView}"
      v-if="places.length > 0"
    >
      <BookingLocationItem v-for="(place, index) in places" :key="index" :place="place" />
    </div>
    <p v-else class="text-center lead my-5">No locations found</p>
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
    fullView: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style
  scoped
  lang="scss"
  src="@/assets/scss/components/bookingLocationsList.scss"
></style>