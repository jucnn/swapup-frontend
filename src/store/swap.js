import axios from "axios";

const apiUrl = "http://localhost:8769/api/";

const state = () => ({
  allSwap: [],
  swap: null,
});

const getters = {
  allSwap: (state) => state.swap,
};

const mutations = {
  setAllSwap(state, val) {
    state.allSwap = val;
  },
  setSwap(state, val) {
    state.swap = val;
  },
};

const actions = {
  async fetchAllSwap({ commit }, query) {
    console.log(query);
    const data = await axios.get(`${apiUrl}swap`, {
      params: query,
    });
    console.log(data);
    commit("setAllSwap", data.data.data);
  },
  async fetchSwap({ commit }, id) {
    const data = await axios.get(`${apiUrl}swap/${id}`);
    commit("setSwap", data.data.data);
  },
  async createSwap({ commit }, data) {
    await axios.post(
      `${apiUrl}swap`,
      {
        ...data,
      },
      {
        withCredentials: true,
      }
    );
  },
  async updateSwap({ commit }, data) {
    await axios.patch(
      `${apiUrl}swap/${data.id}`,
      {
        ...data.payload,
      },
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
