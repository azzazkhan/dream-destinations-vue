<template>
  <section
    class="HeroComponent hero d-flex flex-column justify-content-center align-items-center"
  >
    <slot>
      <h1 class="featured-title text-white text-center text-capitalize">
        Dream Destinations
      </h1>
      <ScrollToContentWidget :invert="true" />
    </slot>
  </section>
</template>

<script>
  import ScrollToContentWidget from "./ScrollToConentWidget.vue";

  export default {
    name: "Hero",
    components: {
      ScrollToContentWidget,
    },
  };
</script>

<style scoped lang="scss" src="@/assets/scss/components/hero.scss"></style>
