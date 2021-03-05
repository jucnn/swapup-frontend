import Router from "vue-router";
import Vue from "vue";
import VueCookies from "vue-cookies";

import Index from "@/views/Index";
import Login from "@/views/Login";
import Register from "@/views/Register";
import Profile from "@/views/Profile";

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
      ],
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
      path: "/register",
      name: "register",
      component: Register,
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
      beforeEnter: auth,
    },
    {
      path: "/user/:id",
      name: "user.index",
      component: UserIndex,
    },
  ],
});

/* const router = new Router({
  mode: "history",
  base: "/",
  routes: [
    {
      path: "/",
      name: "index",
      component: Index,
    },
    ,
    {
      path: "/objects",
      name: "objects.index",
      component: ObjectsIndex,
    },
    {
      path: "/objects/:id",
      name: "objects.show",
      component: ObjectsShow,
    },
    {
      path: "/user/:id",
      name: "user.index",
      component: UserIndex,
    },
  ],
}); */

export default router;
