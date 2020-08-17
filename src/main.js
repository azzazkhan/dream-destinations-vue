import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import "normalize.css/normalize.css";

// Importing font awesome
import "./assets/css/font-awesome.css";
import "./assets/fonts/fontawesome-webfont.eot";
import "./assets/fonts/fontawesome-webfont.svg";
import "./assets/fonts/fontawesome-webfont.ttf";
import "./assets/fonts/fontawesome-webfont.woff";
import "./assets/fonts/fontawesome-webfont.woff2";
import "./assets/fonts/FontAwesome.otf";

// Importing CSS
import "./assets/scss/style.scss";

// Importing JavaScript
import "bootstrap";
import "owl.carousel/src/js/owl.carousel";

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount("#app");
