import axios from "axios";

const apiUrl = `${process.env.VUE_APP_API_URL}api/`;

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
        withCredentials: true,
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
        withCredentials: true,
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
        withCredentials: true,
      }
    );
  },
  async deleteObject({ commit }, id) {
    await axios.delete(
      `${apiUrl}object/${id}`,
      {
        withCredentials: true,
      }
    );
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};