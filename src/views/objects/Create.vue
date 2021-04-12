<template>
  <div class="container object-create header-space">
    <h1>Ajouter un objet</h1>
    <form @submit.prevent="create">
      <div class="box-white">
        <div class="container">
          <div class="row object-create_input">
            <label class="col-12 col-md-6" for="image"
              >Sélectionne une image : (200px x 200px) *</label
            >
            <input
              class="col-12 col-md-6"
              type="file"
              name="image"
              id="image"
            />
          </div>
        </div>
        <div class="container">
          <div class="row object-create_input">
            <label class="col-12 col-md-6" for="title">Titre</label> <br />
            <Input
              name="title"
              class="col-12 col-md-6"
              type="text"
              placeholder="Ex : Sac de randonnée"
              v-model="query.title"
            />
          </div>
        </div>
        <div class="container">
          <div class="row object-create_input">
            <label class="col-12 col-md-6" for="description">Description</label>
            <br />
            <Textarea
              class="col-12 col-md-6"
              :value="query.description"
              :maxlength="300"
              placeholder="Sac à dos renforcé dans le dos de couleur noir avec des bandes réfléchissantes. Encore avec étiquette

"
            />
            <!--  <textarea
              class="col-12 col-md-6"
              name="description"
              v-model="query.description"
            ></textarea> -->
          </div>
        </div>
      </div>

      <div class="box-white">
        <div class="container">
          <div class="row object-create_input">
            <label class="col-12 col-md-6" for="categories">Catégorie</label>
            <br />
            <Select
              class="col-12 col-md-6"
              v-if="categoriesWithAll"
              :options="categoriesWithAll"
              name="categories"
              :defaultValue="categoriesWithAll[0].label"
            />
          </div>
        </div>
        <div class="container">
          <div class="row object-create_input">
            <label class="col-12 col-md-6" for="states">Etat</label>
            <Select
              class="col-12 col-md-6"
              v-if="states[0]"
              :options="states"
              name="states"
              :defaultValue="states[0].label"
            />
          </div>
        </div>
        <div class="container">
          <div class="row object-create_input">
            <label class="col-12 col-md-6" for="brand">Marque</label> <br />
            <Input
              name="brand"
              class="col-12 col-md-6"
              type="text"
              placeholder="Ex : Nike"
              v-model="query.brand"
            />
          </div>
        </div>
      </div>

      <div class="box-white">
        <div class="container">
          <div class="row object-create_input">
            <label class="col-12 col-md-6" for="price">Prix</label> <br />
            <Input
              name="price"
              class="col-12 col-md-6"
              type="number"
              placeholder="0.00€"
              v-model="query.price"
            />
          </div>
        </div>
        <div class="container">
          <div class="row object-create_input">
            <label class="col-12 col-md-6" for="associations"
              >Association</label
            >
            <br />
            <Select
              class="col-12 col-md-6"
              v-if="associations[0]"
              :options="associations"
              name="associations"
              :defaultValue="associations[0].label"
            />
          </div>
        </div>
      </div>
      <div class="container">
        <div class="row justify-content-center">
          <button
            class="button button--purple col col-12 col-sm-6 col-md-4"
            type="submit"
            value="create"
          >
            Créer
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Select from "@/components/ui/Select";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";

export default {
  components: {
    Select,
    Input,
    Textarea,
  },
  data() {
    return {
      query: {
        title: "Sac à dos",
        description: "Description d'un sac à dos",
        state: "Bon état",
        brand: "Nike",
        category: "Mode",
        price: 20,
        association: "Puzzle",
        donationPercentage: 100,
      },
      categoriesWithAll: null,
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
    async create() {
      const objectImage = await this.extractImage(
        document.querySelector('[name="image"]')
      );
      const objectImageResized = await this.resizeImage(objectImage.value);

      const payload = {
        title: this.title,
        description: this.description,
        image: objectImageResized,
        category: this.category,
        state: this.state,
        brand: this.brand,
        price: this.price,
        association: this.association,
        donationPercentage: this.donationPercentage,
      };
      this.createObject(payload);
      this.$router.push({ name: "profile" });
    },
    extractImage(input) {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          return resolve({
            value: reader.result,
            filename: input.files[0].name,
            filetype: input.files[0].type,
          });
        };
        reader.readAsDataURL(input.files[0]);
      });
    },
    resizeImage(base64Str, maxWidth = 300, maxHeight = 300) {
      return new Promise((resolve) => {
        let img = new Image();
        img.src = base64Str;
        img.onload = () => {
          let canvas = document.createElement("canvas");
          const MAX_WIDTH = maxWidth;
          const MAX_HEIGHT = maxHeight;
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > MAX_WIDTH) {
              height *= MAX_WIDTH / width;
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width *= MAX_HEIGHT / height;
              height = MAX_HEIGHT;
            }
          }
          canvas.width = width;
          canvas.height = height;
          let ctx = canvas.getContext("2d");
          ctx.drawImage(img, 0, 0, width, height);
          return resolve(canvas.toDataURL());
        };
      });
    },
    statesChecked(value) {
      console.log(value);
    },
    categoryChecked(value) {
      console.log(value);
    },
    associationChecked(value) {
      console.log(value);
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
.object {
  &-create {
    .box-white {
      margin-bottom: 30px;
    }

    &_input {
      margin-bottom: 30px;
    }

    button {
      margin-top: 30px;
    }
  }
}
</style>