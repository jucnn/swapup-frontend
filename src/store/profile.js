import axios from "axios";
import Vue from "vue";
import VueCookies from "vue-cookies";

Vue.use(VueCookies);

const userToken = Vue.$cookies.get(process.env.VUE_APP_COOKIE_NAME);

const apiUrl = `${process.env.VUE_APP_API_URL}`;
const state = () => ({
  profile: {},
  userObjects: [],
  userSwapSent: [],
  userSwapReceived: [],
  accessToken: userToken ? true : false,
});

const mutations = {
  setProfile(state, val) {
    state.profile = val;
  },
  setUserObjects(state, val) {
    state.userObjects = val;
  },
  setUserSwapSent(state, val) {
    state.userSwapSent = val;
  },
  setUserSwapReceived(state, val) {
    state.userSwapReceived = val;
  },
};

const actions = {
  async fetchProfile({ commit }) {
    const data = await axios.get(`${apiUrl}auth/me`, {
      headers: {
        'Authorization': `Bearer ${userToken}`,
      },
    });
    commit("setProfile", data);
  },
  async updateProfile({ commit }, data) {
    await axios.patch(
      `${apiUrl}auth/${data.id}`,
      {
        ...data.payload,
      },
      {
        headers: {
          'Authorization': `Bearer ${userToken}`,
        },
      }
    );
  },
  async fetchUserObjects({ commit }) {
    const data = await axios.get(`${apiUrl}auth/objects`,  {
      headers: {
        'Authorization': `Bearer ${userToken}`,
      },
    });
    commit("setUserObjects", data.data);
  },
  async fetchUserSwapSent({ commit }) {
    const data = await axios.get(`${apiUrl}auth/swapsent`,  {
      headers: {
        'Authorization': `Bearer ${userToken}`,
      },
    });
    commit("setUserSwapSent", data.data);
  },
  async fetchUserSwapReceived({ commit }) {
    const data = await axios.get(`${apiUrl}auth/swapReceived`,  {
      headers: {
        'Authorization': `Bearer ${userToken}`,
      },
    });
    commit("setUserSwapReceived", data.data);
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
