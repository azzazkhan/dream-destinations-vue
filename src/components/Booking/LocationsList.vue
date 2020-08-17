<template>
  <div class="BookingLocationsListComponent places-wrapper">
    <BookingLocationItem />
  </div>
</template>

<script>
import BookingLocationItem from "./BookingLocationItem.vue";

export default {
  name: "BookingLocationsList",
  components: {
    BookingLocationItem,
  },
};
</script>

<style>
</style>