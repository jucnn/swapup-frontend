import axios from "axios";
import Vue from "vue";
import VueCookies from "vue-cookies";

const apiUrl = `${process.env.VUE_APP_API_URL}api/`;

Vue.use(VueCookies);

const userToken = Vue.$cookies.get(process.env.VUE_APP_COOKIE_NAME);

const state = () => ({
  allObjects: [],
  object: null,
});

const getters = {
  allObjects: (state) => state.objects,
};

const mutations = {
  setAllObjects(state, val) {
    state.allObjects = val;
  },
  setObject(state, val) {
    state.object = val;
  },
};

const actions = {
  async fetchAllObjects({ commit }, query) {
    const data = await axios.get(`${apiUrl}object`, {
      params: query,
    });
    commit("setAllObjects", data.data.data);
  },
  async fetchObject({ commit }, id) {
    const data = await axios.get(`${apiUrl}object/${id}`);
    commit("setObject", data.data.data);
  },
  async fetchObjectBySearching({ commit }, data) {
    await axios.post(
      `${apiUrl}object/search`,
      {
        ...data,
      },
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    );
  },
  async createObject({ commit }, data) {
    await axios.post(
      `${apiUrl}object`,
      {
        ...data,
      },
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    );
  },
  async updateObject({ commit }, data) {
    await axios.patch(
      `${apiUrl}object/${data.id}`,
      {
        ...data.payload,
      },
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      }
    );
  },
  async deleteObject({ commit }, id) {
    await axios.delete(`${apiUrl}object/${id}`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
