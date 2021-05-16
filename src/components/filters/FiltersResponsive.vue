<template>
  <div class="filters-responsive">
    <span class="menu-responsive_close" @click="$emit('clicked')">fermer</span>
    <div class="filters-responsive_content">
      <h2>Filtres</h2>
      <div>
        <h3>Catégories</h3>
        <Select
          v-if="categoriesWithAll"
          :options="categoriesWithAll"
          :defaultValue="categoriesWithAll[0].label"
          @select="categoryChecked"
        />
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
            v-model="filters.checkedStates"
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
      <button class="button button--green" @click.prevent="search()">
        Rechercher
      </button>
    </div>
  </div>
</template>

<script>
import Select from "@/components/ui/Select";
import Range from "@/components/ui/Range";
import Checkbox from "@/components/ui/Checkbox";
import SearchBar from "@/components/ui/SearchBar";

import { mapState, mapActions } from "vuex";

export default {
  components: {
    Select,
    Range,
    Checkbox,
    SearchBar,
  },
  data() {
    return {
      filters: {
        checkedStates: [],
        checkedCategory: null,
      },
      categoriesWithAll: null,
      /*    checkCategory: null, */
    };
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
      this.filters.checkedCategory = value;
    },
    search() {
      this.$emit("submitFilters", this.filters);
      this.$emit("clicked");
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
.filters-responsive {
  text-align: left;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 200;
  background-color: $white;
  padding: 20px;
}
</style>