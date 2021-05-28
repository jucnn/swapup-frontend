import axios from "axios";

const apiUrl = `${process.env.VUE_APP_API_URL}api/`;
const authUrl = `${process.env.VUE_APP_API_URL}auth/`;

const state = () => ({
  allSwap: [],
  swap: null,
  sentSwapByUser: [],
  receivedSwapByUser: [],
  allSwapstate: [],
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
  setSentSwapByUser(state, val) {
    state.sentSwapByUser = val;
  },
  setReceivedSwapByUser(state, val) {
    state.receivedSwapByUser = val;
  },
  setAllSwapstate(state, val) {
    state.allSwapstate = val;
  },
};

const actions = {
  async fetchAllSwap({ commit }, query) {
    const data = await axios.get(`${apiUrl}swap`, {
      params: query,
    });
    commit("setAllSwap", data.data.data);
  },
  async fetchSentSwapByUser({ commit }) {
    const data = await axios.get(`${authUrl}swapsent`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    commit("setSentSwapByUser", data.data);
  },
  async fetchReceivedSwapByUser({ commit }) {
    const data = await axios.get(`${authUrl}swapreceived`, {
      headers: {
        Authorization: `Bearer ${userToken}`,
      },
    });
    commit("setReceivedSwapByUser", data.data);
  },
  async fetchSwap({ commit }, id) {
    const data = await axios.get(`${apiUrl}swap/${id}`);
    commit("setSwap", data.data.data);
  },
  async createSwap({ commit }, data) {
    await axios.post(
      `${apiUrl}swap`,
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
  async updateSwap({ commit }, data) {
    await axios.patch(
      `${apiUrl}swap/${data.id}`,
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
  async fetchAllSwapstate({ commit }, query) {
    const data = await axios.get(`${apiUrl}swapstate`, {
      params: query,
    });
    commit("setAllSwapstate", data.data.data);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
