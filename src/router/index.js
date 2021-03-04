import Router from "vue-router";
import Vue from "vue";
import VueCookies from "vue-cookies";

import Index from "@/views/index";
import Login from "@/views/login";
import Profile from "@/views/profile";

import auth from "@/middleware/auth"

Vue.use(Router);
Vue.use(VueCookies);

const router = new Router({
  mode: "history",
  base: "/",
  routes: [
    {
      path: "/",
      name: "index",
      component: Index,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      beforeEnter: (to, from, next) => {
        if (Vue.$cookies.get("3El6HEDeBFX8m")) {
          next("/");
          return;
        }
        next();
      },
    },
    {
      path: "/profile",
      name: "profile",
      component: Profile,
      beforeEnter: auth
    },
  ],
});

export default router;
