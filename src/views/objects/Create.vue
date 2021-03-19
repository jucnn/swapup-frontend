<template>
  <div>
    <h1>Ajouter un objet</h1>
    <form v-if="filters" @submit.prevent="create">
      <div>
        <label for="title">Titre</label> <br />
        <input type="text" name="title" v-model="title" />
      </div>
      <div>
        <label for="description">Description</label> <br />
        <textarea name="description" v-model="description"></textarea>
      </div>
      <div>
        <label for="image">Sélectionne une image : (200px x 200px) *</label>
        <input type="file" name="image" id="image" />
      </div>
      <div>
        <label for="category">Catégorie</label> <br />
        <select name="category" id="category" v-model="category">
          <option
            v-for="category in filters.category"
            :key="category"
            :value="category"
          >
            {{ category }}
          </option>
        </select>
      </div>
      <div>
        <label for="state">Etat</label> <br />
        <select name="state" id="state" v-model="state">
          <option v-for="state in filters.state" :key="state" :value="state">
            {{ state }}
          </option>
        </select>
      </div>
      <div>
        <label for="brand">Marque</label> <br />
        <input type="text" name="brand" v-model="brand" />
      </div>
      <div>
        <label for="price">Prix</label> <br />
        <input type="number" name="price" v-model="price" />
      </div>
      <div>
        <label for="association">Association</label> <br />
        <select name="association" id="association" v-model="association">
          <option
            v-for="association in filters.associations"
            :key="association.name"
            :value="association"
          >
            {{ association.name }} ({{ association.type }})
          </option>
        </select>
      </div>
      <div>
        <label for="donationPercentage">Pourcentage pour l'association</label>
        <br />
        <input
          type="text"
          name="donationPercentage"
          v-model="donationPercentage"
        />
      </div>
      <button type="submit" value="create">Créer</button>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      title: "Sac à dos",
      description: "Description d'un sac à dos",
      state: "Bon état",
      brand: "Nike",
      category: "Mode",
      price: 20,
      association: "Puzzle",
      donationPercentage: 100,
    };
  },
  computed: {
    ...mapState({
      filters: (state) => state.objects.filters,
    }),
  },
  methods: {
    ...mapActions({
      createObject: "objects/createObject",
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
  },
};
</script>

<style lang="scss">
</style>