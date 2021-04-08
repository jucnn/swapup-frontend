import axios from "axios";

const apiUrl = "http://localhost:8769/api/";

const state = () => ({
  allObjects: [],
  object: null,
  filters: {
    categories: [
      { label: "Vêtements", value: "vetements" },
      { label: "Accessoires de mode", value: "accessoires-de-mode" },
      { label: "Chaussures", value: "chaussures" },
      { label: "Livres, films & musique", value: "livres-films-musique" },
      { label: "Hygiène & Beauté", value: "hygiene-et-beaute" },
      { label: "Cuisine & Maison", value: "cuisine-et-maison" },
      { label: "Ameublement", value: "ameublement" },
      { label: "Décoration & Art", value: "décoration-art" },
      { label: "Bébé", value: "bebe" },
      { label: "Electroménager", value: "electromenager" },
      { label: "Multimédia", value: "multimedia" },
      { label: "Jeux et Jouets", value: "jeux-jouets" },
      { label: "Sport & Loisirs", value: "sport-loisirs" },
      { label: "Bricolage & Jardin", value: "bricolage-jardin" },
      { label: "Automobile", value: "automobile" },
      { label: "Fournitures de bureaux", value: "fournitures-bureau" },
      { label: "Animaux", value: "animaux" },
      { label: "Divers", value: "divers" },
    ],
    states: [
      { label: "Neuf", value: "neuf" },
      { label: "Très bon état", value: "tres-bon-etat" },
      { label: "Bon état", value: "bon-etat" },
      { label: "Etat satisfaisant", value: "etat-satisfaisant" },
      { label: "A réparer", value: "a-reparer" },
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
