<template>
  <div class="AppComponent">
    <AuthModel id="AuthModel_01" />
    <Header />
    <router-view />
    <Footer></Footer>
  </div>
</template>

<script>
import "@/assets/js/animatedIcon.js";
import "@/assets/js/toggleModal.js";
import "@/assets/js/smoothScroll.js";

import AuthModel from "@/components/AuthModel/Auth.vue";
import Header from "@/components/Header/Index.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "App",
  components: {
    AuthModel,
    Header,
    Footer,
  },
};
</script>

<style lang="scss" src="@/assets/scss/components/animatedMenuIcon.scss"></style>
<style lang="scss" src="@/assets/scss/components/customButton.scss"></style>
