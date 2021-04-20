<template>
  <div class="objects-feed">
    <div class="objects-container container header-space">
      <h1>Tous les objets </h1>
      <div class="row">
        <div class="d-md-block d-none col-3">
          <Filters
            @statesChecked="statesChecked"
            @checkCategory="categoryChecked"
          />
        </div>
        <div class="col container col-md-9 col-xs-12">
          <div class="row">
            <ObjectCard
              class="objects-item"
              v-for="object in filteredObject"
              :key="object.id"
              :object="object"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapState, mapActions } from "vuex";
import ObjectCard from "@/components/object/ObjectCard";
import Filters from "@/components/filters/Filters";

export default {
  name: "Index",
  data() {
    return {
      filteredObject: [],
      query: {
        title: null,
        description: null,
        category: null,
        state: null,
        brand: null,
        price: null,
        association: null,
        seller: null,
      },
    };
  },
  components: {
    ObjectCard,
    Filters,
  },
  computed: {
    ...mapState({
      allObjects: (state) => state.objects.allObjects,
    }),
  },
  watch: {
    query: {
      // This will let Vue know to look inside the array
      deep: true,

      // We have to move our method to a handler field
      handler() {
        axios
          .post(`${process.env.VUE_APP_API_URL}api/object/search`, this.query, {
            withCredentials: true,
          })
          .then((data) => {
            this.filteredObject = data.data.data;
          })
          .catch((err) => console.log(err));
      },
    },
  },
  methods: {
    ...mapActions({
      fetchAllObjects: "objects/fetchAllObjects",
      /*  fetchObjectBySearching: "objects/fetchObjectBySearching" */
    }),
    statesChecked(states) {
      if (states.length != 0) {
        this.query.state = states;
      } else {
        this.query.state = null;
      }
    },
    categoryChecked(category) {
      if (category != "Toutes les catégories") {
        this.query.category = category;
      } else {
        this.query.category = null;
      }
    },
  },
  async mounted() {
    await this.fetchAllObjects(this.$route.query);
    this.filteredObject = this.allObjects
  },
};
</script>

<style lang="scss">
.objects-feed {
  position: relative;
}
.objects-container {
  margin-top: 80px;
}
</style>
