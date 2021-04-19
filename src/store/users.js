import axios from "axios";

const apiUrl = "http://localhost:8769/auth/";

const state = () => ({
  allUsers: [],
  user: null,
});

const getters = {
  allUsers: (state) => state.users,
};

const mutations = {
  setAllUsers(state, val) {
    state.allUsers = val;
  },
  setUser(state, val) {
    state.user = val;
  },
};

const actions = {
  async fetchAllUsers({ commit }) {
    const data = await axios.get(`${apiUrl}`);
    commit("setAllUsers", data.data.data);
  },
  async fetchUser({ commit }, id) {
    const data = await axios.get(`${apiUrl}${id}`);
    commit("setUser", data.data);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
