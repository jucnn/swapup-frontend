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
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      },
      {
        ...data,
      }
    );
  },
  async createObject({ commit }, data) {
    await axios.post(
      `${apiUrl}object`,
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      },
      {
        ...data,
      }
    );
  },
  async updateObject({ commit }, data) {
    await axios.patch(
      `${apiUrl}object/${data.id}`,
      {
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
      },
      {
        ...data.payload,
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
