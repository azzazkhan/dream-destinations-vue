<template>
  <section class="hero d-flex flex-column justify-content-center align-items-center">
    <h1 class="featured-text text-white text-center">Find dream vacation</h1>
    <BookingForm />
  </section>
</template>

<script>
import BookingForm from "./BookingForm.vue";

export default {
  name: "Hero",
  components: {
    BookingForm,
  },
};
</script>

<style scoped lang="scss" src="@/assets/scss/components/hero.scss"></style>