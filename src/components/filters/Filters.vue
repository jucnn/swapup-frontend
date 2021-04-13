<template>
  <div class="filters-container">
    <h2>Filtres</h2>
    <div>
      <h3>Catégories</h3>
      <Select v-if="categoriesWithAll" :options="categoriesWithAll" :defaultValue="categoriesWithAll[0].label" @select="categoryChecked" />
    </div>
    <hr />
    <div>
      <h3>Localisation</h3>
      <SearchBar />
    </div>
    <hr />
    <div>
      <h3>Etat</h3>
      <div>
        <Checkbox
          v-model="checkedStates"
          v-for="(state, index) in states"
          :key="index"
          :label="state.label"
          :slug="state.slug"
          :id="state._id"
          type="checkedStates"
        ></Checkbox>
      </div>
    </div>
    <hr />
    <div>
      <h3>Prix</h3>
      <Range />
    </div>
  </div>
</template>

<script>
import SearchBar from "@/components/ui/SearchBar";
import Select from "@/components/ui/Select";
import Range from "@/components/ui/Range";
import Checkbox from "@/components/ui/Checkbox";

import { mapState, mapActions } from "vuex";

export default {
  components: {
    SearchBar,
    Select,
    Range,
    Checkbox,
  },
  data() {
    return {
      checkedStates: [],
      categoriesWithAll: null,
      /*    checkCategory: null, */
    };
  },
  watch: {
    checkedStates() {
      this.$emit("statesChecked", this.checkedStates);
    },
    /*   checkedCategory() {
      this.$emit("categoryChecked", this.checkCategory);
    }, */
  },
  computed: {
    ...mapState({
      associations: (state) => state.filters.associations,
      categories: (state) => state.filters.categories,
      states: (state) => state.filters.states,
    }),
  },
  methods: {
    ...mapActions({
      fetchAllAssociations: "filters/fetchAllAssociations",
      fetchAllCategories: "filters/fetchAllCategories",
      fetchAllStates: "filters/fetchAllStates",
    }),
    categoryChecked(value) {
      this.$emit("checkCategory", value);
    },
  },
  async mounted() {
    this.fetchAllAssociations();
    await this.fetchAllCategories();
    this.fetchAllStates();
    this.categoriesWithAll = [
      { label: "Toutes les catégories", slug: "All" },
      ...this.categories,
    ];
  },
};
</script>

<style lang="scss">
.filters-container {
  position: sticky;
  padding: 10px;
  background-color: $white;
}
</style>
