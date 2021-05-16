import Vuex from "vuex";
import Vue from "vue";
import createPersistedState from "vuex-persistedstate";

import users from "./users";
import profile from "./profile";
import objects from "./objects";
import swap from "./swap";
import filters from "./filters";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    users,
    profile,
    objects,
    swap,
    filters,
  },
});

export default store;
