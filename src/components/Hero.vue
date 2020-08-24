<template>
  <section
    class="HeroComponent hero d-flex flex-column justify-content-center align-items-center"
  >
    <slot>
      <ScrollToContentWidget />
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
