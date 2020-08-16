<template>
  <div class="RootComponent">
    <Header />
    <!-- <router-link to="/about">About</router-link> -->
    <router-view />
  </div>
</template>

<script>
import "./assets/js/animatedIcon.js";
import Header from "./components/Header.vue";

export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style lang="scss" src="@/assets/scss/components/animatedMenuIcon.scss"></style>
<style lang="scss" src="@/assets/scss/components/animatedAnchor.scss"></style>