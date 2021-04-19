<template>
  <div>
    <h1>Modifier l'object</h1>
    <form @submit.prevent="edit" v-if="object">
      <div>
        <label for="title">Titre</label> <br />
        <input type="text" name="title" v-model="object.title" />
      </div>
      <div>
        <label for="description">Description</label> <br />
        <input type="text" name="description" v-model="object.description" />
      </div>
      <div>
        <label for="state">Etat</label> <br />
        <input type="text" name="state" v-model="object.state" />
      </div>
      <div>
        <label for="brand">Marque</label> <br />
        <input type="text" name="brand" v-model="object.brand" />
      </div>
      <div>
        <label for="price">Prix</label> <br />
        <input type="number" name="price" v-model="object.price" />
      </div>
      <div>
        <label for="association">Association</label> <br />
        <input type="text" name="association" v-model="object.association" />
      </div>
      <div>
        <label for="donationPercentage">Pourcentage pour l'association</label>
        <br />
        <input
          type="text"
          name="donationPercentage"
          v-model="object.donationPercentage"
        />
      </div>
      <button type="submit" value="save">Sauvegarder</button>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Edit",
  computed: {
    ...mapState({
      object: (state) => state.objects.object,
    }),
  },
  methods: {
    ...mapActions({
      fetchObject: "objects/fetchObject",
      updateObject: "objects/updateObject",
    }),
    edit() {
      const datas = {
        id: this.$route.params.id,
        payload: {
          title: this.object.title,
          description: this.object.description,
          state: this.object.state,
          brand: this.object.brand,
          price: this.object.price,
          association: this.object.association,
          donationPercentage: this.object.donationPercentage,
        },
      };
      this.updateObject(datas);
      this.$router.go(-1)
    },
  },
  mounted() {
    this.fetchObject(this.$route.params.id);
  },
};
</script>