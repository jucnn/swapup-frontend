import axios from "axios";

const apiUrl = "http://localhost:8769/api/";

const state = () => ({
  allObjects: [],
  object: null,
  filters: {
    category: [
      "Automobile",
      "Loisirs",
      "Mode",
      "Multimédia",
      "Animaux",
      "Maison",
      "Divers",
    ],
    state: [
      "Neuf",
      "Très bon état",
      "Bon état",
      "Etat satisfaisant",
      "A réparer",
    ],
    associations: [
      {
        name: "Alternatiba",
        type: "Environnemental",
      },
      {
        name: "Handicap internationale",
        type: "Santé",
      },
      {
        name: "Le Refuge",
        type: "Social",
      },
    ],
  },
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
    console.log(query);
    const data = await axios.get(`${apiUrl}object`, {
      params: query,
    });
    console.log(data);
    commit("setAllObjects", data.data.data);
  },
  async fetchObject({ commit }, id) {
    const data = await axios.get(`${apiUrl}object/${id}`);
    commit("setObject", data.data.data);
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
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
