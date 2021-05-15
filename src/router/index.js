import Router from "vue-router";
import Vue from "vue";
import VueCookies from "vue-cookies";

import Index from "@/views/Index";
import Login from "@/views/Login";
import Register from "@/views/Register";
import Profile from "@/views/Profile/Index";
import ProfileEdit from "@/views/Profile/Edit";
import Feed from "@/views/Feed";
import User from "@/views/User";

import Main from "@/layouts/Main";

import UserIndex from "@/views/user/Index.vue";

import objectsRoutes from "@/router/objects";

/* import ObjectsIndex from "@/views/objects/Index.vue";
import ObjectsShow from "@/views/objects/Show.vue"; */

import auth from "@/middleware/auth";

Vue.use(Router);
Vue.use(VueCookies);
const router = new Router({
  mode: "history",
  base: "/",
  routes: [
    {
      component: Main,
      path: "",
      children: [
        {
          path: "/",
          name: "index",
          component: Index,
        },
        ...objectsRoutes,
        {
          path: "/profile",
          name: "profile",
          component: Profile,
          beforeEnter: auth,
        },
        {
          path: "/profile/edit",
          name: "profile.edit",
          component: ProfileEdit,
          beforeEnter: auth,
        },
        {
          path: "/user/:id",
          name: "user",
          component: User,
        },
        {
          path: "/feed",
          name: "feed",
          component: Feed,
        },
      ],
    },
    {
      path: "/login",
      name: "login",
      component: Login,
      beforeEnter: (to, from, next) => {
        if (Vue.$cookies.get(process.env.VUE_APP_COOKIE_NAME)) {
          next("/");
          return;
        }
        next();
      },
    },
    {
      path: "/register",
      name: "register",
      component: Register,
      beforeEnter: (to, from, next) => {
        if (Vue.$cookies.get(process.env.VUE_APP_COOKIE_NAME)) {
          next("/");
          return;
        }
        next();
      },
    },

    {
      path: "/user/:id",
      name: "user.index",
      component: UserIndex,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  },
});

export default router;
