import Vuex from "vuex";
import Vue from 'vue'

import users from "./users";
import profile from "./profile";
import objects from "./objects";
import swap from "./swap";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    users,
    profile,
    objects,
    swap
  },
});

export default store;
