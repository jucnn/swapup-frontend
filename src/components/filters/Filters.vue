<template>
  <div class="filters-container">
    <h2>Filtres</h2>
    <div class="filters-item">
      <h3>Catégories</h3>
      <Select
        v-if="categoriesWithAll"
        :options="categoriesWithAll"
        :defaultValue="categoriesWithAll[0].label"
        @select="categoryChecked"
      />
    </div>
    <!--  <div class="filters-item">
      <h3>Localisation</h3>
      <SearchBar />
    </div> -->
    <div class="filters-item">
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
    <div class="filters-item filters-price">
      <h3>Prix</h3>
      <div class="filters-price_container container-fluid">
        <div class="row">
          <div class="col-12 col-md-4 filters-price_min">
            <input type="number" v-model="price.min" />
            <p>Min</p>
          </div>
          <div class="col-12 col-md-4 filters-price_max">
            <input type="number" v-model="price.max" />
            <p>Max</p>
          </div>
          <div class="col-12 col-md-3">
            <button class="filters-price_btn" @click="handlePrice()" >Ok</button>
          </div>
        </div>
      </div>
      <!-- <vue-range-slider
        :bg-style="bgStyle"
        v-model="price"
        :process-style="processStyle"
        :tooltip-style="tooltipStyle"
        @slide-end="$emit('priceChanged', price)"
      ></vue-range-slider> -->
    </div>
  </div>
</template>

<script>
import "vue-range-component/dist/vue-range-slider.css";

import SearchBar from "@/components/ui/SearchBar";
import Select from "@/components/ui/Select";
import Range from "@/components/ui/Range";
import Checkbox from "@/components/ui/Checkbox";
import VueRangeSlider from "vue-range-component";

import { mapState, mapActions } from "vuex";

export default {
  components: {
    SearchBar,
    Select,
    Range,
    Checkbox,
    VueRangeSlider,
  },
  data() {
    return {
      checkedStates: [],
      categoriesWithAll: null,
      price: {
        min: null,
        max: null,
      },
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
    handlePrice() {
      this.$emit("priceChanged", this.price)
    }
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
  created() {
    this.bgStyle = {
      backgroundColor: "#a491d3",
    };
    this.tooltipStyle = {
      backgroundColor: "#7a5ebf",
      borderColor: "#7a5ebf",
    };
    this.processStyle = {
      backgroundColor: "#7a5ebf",
    };
  },
};
</script>

<style lang="scss">
.filters {
  &-container {
    position: sticky;
    padding: 10px;
    background-color: $white;
  }

  &-item {
    margin-top: 30px;
  }

  &-price {
    &_container {
      padding: 0 !important;

      .row {
        & > div {
          padding: 0 5px;
        }
      }
    }

    &_min,
    &_max {
      input {
        text-align: right;
      }
      p {
        font-size: 12px;
        margin-top: 5px;
      }
    }
    &_btn {
      background-color: $purple;
      width: 100%;
      border-radius: 5px;
      padding: 10px 5px;
      border: none;
      color: $white;
      text-transform: uppercase;
      font-weight: $semibold;
      cursor: pointer;
    }
  }
}
</style>
