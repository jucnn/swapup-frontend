import Vue from "vue";
import VueCookies from "vue-cookies";

Vue.use(VueCookies);


export default function auth(to, from, next) {
  if (Vue.$cookies.get(process.env.VUE_APP_COOKIE_NAME)) {
    next();
    return;
  }
  next("/login");
}