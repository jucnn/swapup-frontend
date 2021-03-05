<template>
  <div>
    <h1>Ajouter un objet</h1>
    <form @submit.prevent="create">
      <div>
        <label for="title">Titre</label> <br />
        <input type="text" name="title" v-model="title" />
      </div>
      <div>
        <label for="description">Description</label> <br />
        <input type="text" name="description" v-model="description" />
      </div>
      <div>
        <label for="state">Etat</label> <br />
        <input type="text" name="state" v-model="state" />
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
        <input type="text" name="association" v-model="association" />
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
import { mapActions } from "vuex";

export default {
  data() {
    return {
      title: "Sac à dos",
      description: "Description d'un sac à dos",
      state: "Bon état",
      brand: "Nike",
      price: 20,
      association: "Puzzle",
      donationPercentage: 100,
    };
  },
  methods: {
    ...mapActions({
      createObject: "objects/createObject",
    }),
    create() {
      const payload = {
        title: this.title,
        description: this.description,
        state: this.state,
        brand: this.brand,
        price: this.price,
        association: this.association,
        donationPercentage: this.donationPercentage,
      };
      this.createObject(payload);
    },
  },
};
</script>

<style lang="scss">
</style>