import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// Importing font awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Importing CSS
import "normalize.css/normalize.css";
import "./assets/scss/style.scss";

// Importing JavaScript
import "bootstrap";
import "owl.carousel/src/js/owl.carousel";
// import "./assets/js/script.js";

// Registering `FontAwesome` component.
library.add(fas, fab, far);
Vue.component("FontAwesome", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount("#app");
