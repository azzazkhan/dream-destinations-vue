<template>
  <div class="RootComponent">
    <Header />
    <router-view />
  </div>
</template>

<script>
  import "@/assets/js/animatedIcon.js";
  import Header from "@/components/Header/Index.vue";

  export default {
    name: "App",
    components: {
      Header,
    },
  };
</script>

<style lang="scss" src="@/assets/scss/components/animatedMenuIcon.scss"></style>
<style lang="scss" src="@/assets/scss/components/animatedAnchor.scss"></style>
<style lang="scss" src="@/assets/scss/components/customButton.scss"></style>
