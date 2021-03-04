import Vuex from "vuex";
import Vue from 'vue'

import users from "./users";
import profile from "./profile";
import objects from "./objects";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    users,
    profile,
    objects,
  },
});

export default store;
