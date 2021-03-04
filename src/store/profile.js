import axios from "axios";

const apiUrl = 'http://localhost:8769/'
const state = () => ({
  profile: {}
});

const mutations = {
  SET_PROFILE(state, val) {
    state.profile = val;
  }
};

const actions = {
  async fetchProfile({ commit }) {
    const data = await axios.get(`${apiUrl}auth/me`, {
        withCredentials: true
    }
    );
    commit("SET_PROFILE", data);
  },

};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
