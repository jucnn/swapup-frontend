import Vue from "vue";
import VueCookies from "vue-cookies";

Vue.use(VueCookies);


export default function auth(to, from, next) {
  if (Vue.$cookies.get("3El6HEDeBFX8m")) {
    next();
    return;
  }
  next("/login");
}