import Router from "vue-router";
import Vue from "vue";
import VueCookies from "vue-cookies";

import Index from "@/views/Index";
import Login from "@/views/Login";
import Profile from "@/views/Profile";

import UserIndex from "@/views/user/Index.vue";

import ObjectsIndex from "@/views/objects/Index.vue";
import ObjectsShow from "@/views/objects/Show.vue";

import auth from "@/middleware/auth";

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
      beforeEnter: auth,
    },
    {
      path: "/objects",
      name: "objects.index",
      component: ObjectsIndex,
    },
    {
      path: '/objects/:id',
      name: "objects.show",
      component: ObjectsShow,
    },
    {
      path: "/user/:id",
      name:"user.index",
      component: UserIndex
    }
  ],
});

export default router;
