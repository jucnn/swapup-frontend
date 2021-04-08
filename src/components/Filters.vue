<template>
  <div class="filters-container">
    <h2>Filtres</h2>
    <div>
      <h3>Catégories</h3>
      <Select :options="filters.categories"/>
    </div>
    <hr>
    <div>
      <h3>Localisation</h3>
      <SearchBar />
    </div>
    <hr>
    <div>
      <h3>Etat</h3>
      <div>
        <Checkbox v-model="checkedStates" v-for="(state, index) in filters.states" :key="index" :label="state.label" :val="state.value" type="checkedStates"></Checkbox>
      </div>
    </div>
    <hr>
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

import { mapState } from "vuex";

export default {
  components: {
    SearchBar,
    Select,
    Range,
    Checkbox,
  },
  data() {
    return {
      checkedStates: []
    }
  },
  computed: {
    ...mapState({
      filters: (state) => state.objects.filters,
    }),
  }
};
</script>

<style lang="scss">
.filters-container {
    position: sticky;
    padding: 10px;
}
</style>
