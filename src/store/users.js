import axios from "axios";

const apiUrl = `${process.env.VUE_APP_API_URL}auth/`;

const state = () => ({
  allUsers: [],
  user: null,
  objectsByUser: []
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
  setObjectsByUser(state, val) {
    state.objectsByUser = val
  }
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
  async fetchObjectsByUser({ commit }, id) {
    const data = await axios.get(`${apiUrl}${id}/objects`);
    commit("setObjectsByUser", data.data);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
