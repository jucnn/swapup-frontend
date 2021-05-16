import axios from "axios";

const apiUrl = `${process.env.VUE_APP_API_URL}api/`;

const state = () => ({
  associations: [],
  categories: [],
  states: []
});

const getters = {
  allAssociations: (state) => state.associations,
  allCategories: (state) => state.categories,
  allStates: (state) => state.states,

};

const mutations = {
  setAllAssociations(state, val) {
    state.associations = val;
  },
  setAllCategories(state, val) {
    state.categories = val;
  },
  setAllStates(state, val) {
    state.states = val;
  },
};

const actions = {
  async fetchAllAssociations({ commit }) {
    const data = await axios.get(`${apiUrl}association`);
    commit("setAllAssociations", data.data.data);
  },
  async fetchAllCategories({ commit }) {
    const data = await axios.get(`${apiUrl}category`);
    commit("setAllCategories", data.data.data);
  },
  async fetchAllStates({ commit }) {
    const data = await axios.get(`${apiUrl}state`);
    commit("setAllStates", data.data.data);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
