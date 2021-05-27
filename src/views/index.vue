<template>
  <div class="objects-feed">
    <div class="objects-container container header-space">
      <div class="row">
        <div class="d-md-block d-none col-3">
          <Filters
            @statesChecked="statesChecked"
            @checkCategory="categoryChecked"
            @priceChanged="priceChecked"
            @searchChanged="searchChanged"
          />
        </div>
        <div class="col container col-md-9 col-xs-12" v-if="filteredObject">
          <div class="row" v-if="filteredObject.length > 0">
            <ObjectCard
              class="objects-item col-12 col-sm-6 col-lg-4"
              v-for="object in getItemsPerPageAndSearch(
                filteredObject,
                currentPage,
                numberPerPage
              )"
              :key="object.id"
              :object="object"
            />
          </div>
          
          <p v-else>Pas d'objets correspondant à la demande</p>
          <!--  <paginate
            :page-count="filteredObject.length / numberPerPage"
            :click-handler="changePage"
            :prev-text="'<'"
            :next-text="'>'"
            :container-class="'pagination-container'"
          >
          </paginate> -->
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
import Paginate from "vuejs-paginate";
import Select from "@/components/ui/Select";

export default {
  name: "Index",
  data() {
    return {
      filteredObject: [],
      filteredObjectPerPage: [],
      numberPerPage: 10,
      currentPage: 1,
      query: {
        title: null,
        description: null,
        category: null,
        state: null,
        brand: null,
        priceMin: null,
        priceMax: null,
        association: null,
        seller: null,
      },
      searchObjectValue: "",
    };
  },
  components: {
    ObjectCard,
    Filters,
    Paginate,
    Select,
  },
  computed: {
    ...mapState({
      allObjects: (state) => state.objects.allObjects,
    }),
    /*  filteredObject() {
      return this.allObjects
    } */
  },
  watch: {
    query: {
      deep: true,
      handler() {
        this.currentPage = 1;
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
      console.log(states);
      if (states.length != 0) {
        this.query.state = states;
      } else {
        this.query.state = null;
      }
    },
    searchChanged(search) {
      this.searchObjectValue = search;
    },
    categoryChecked(category) {
      if (category != "Toutes les catégories") {
        this.query.category = category;
      } else {
        this.query.category = null;
      }
    },
    priceChecked(price) {
      this.query.price = price;
    },
    removeAccentAndMaj(string) {
      return string
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
    },
    changePage(pageNum) {
      window.scrollTo(0, 0);
      this.currentPage = pageNum;
      /*  this.filteredObjectPerPage = this.filteredObject.slice(pageNum * this.numberPerPage - this.numberPerPage, pageNum * this.numberPerPage)
      console.log(pageNum); */
    },
    getItemsPerPageAndSearch(array, actualPage, numbersPerPage) {
      const arrayPage = array.slice(
        actualPage * numbersPerPage - numbersPerPage,
        actualPage * numbersPerPage
      );
      if (this.searchObjectValue.length > 0) {
        console.log(this.searchObjectValue);
        //Remove accent
        return arrayPage.filter((object) =>
          this.removeAccentAndMaj(object.title && object.description).includes(
            this.removeAccentAndMaj(this.searchObjectValue)
          )
        );
      } else {
        return arrayPage;
      }
    },
  },
  async mounted() {
    await this.fetchAllObjects();
    console.log(this.allObjects);
    this.filteredObject = this.allObjects;
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
.pagination-container {
  display: flex;
  justify-content: center;
  li {
    list-style: none;

    a {
      padding: 10px 15px;
      margin: 0 3px;
      background-color: $lightblue;
      border-radius: $mainborderradius;
      color: $white;
      transition: 200ms;

      &:hover {
        background-color: $blue;
      }
    }

    &.active {
      a {
        background-color: $blue;
      }
    }
    &.disabled {
      a {
        background-color: $grey;
        cursor: default;
      }
    }
  }
}
</style>
