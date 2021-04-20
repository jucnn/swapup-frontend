import axios from "axios";
import Vue from "vue";
import VueCookies from "vue-cookies";

Vue.use(VueCookies);

const userToken = Vue.$cookies.get(process.env.VUE_APP_COOKIE_NAME);

const apiUrl = `${process.env.VUE_APP_API_URL}`;
const state = () => ({
  profile: {},
  accessToken: userToken ? true : false,
});

const mutations = {
  SET_PROFILE(state, val) {
    state.profile = val;
  },
};

const actions = {
  async fetchProfile({ commit }) {
    const data = await axios.get(`${apiUrl}auth/me`, {
      withCredentials: true,
    });
    commit("SET_PROFILE", data);
  },
  /* 
  async register({ commit }, data) {
    await axios.post(`${apiUrl}auth/register`, {
      ...data,
    });
  }, */
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
