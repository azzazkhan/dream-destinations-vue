import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "About" */ "../views/About.vue"),
  },
  {
    path: "/:category/all",
    name: "Category",
    component: () =>
      import(/* webpackChunkName: "Category" */ "../views/Category.vue"),
  },
  {
    path: "/help",
    name: "Help",
    component: () => import(/* webpackChunkName: "Help" */ "../views/Help.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
