<template>
  <div>
    <h1>All Objects</h1>
    <div v-for="(object, index) in allObjects" :key="object.id">
      <h2>Object #{{ index + 1 }}</h2>
      <h3>{{ object.title }}</h3>
      <p>{{ object.description }}</p>
      <p>Etat: {{ object.state }}</p>
      <p>Marque: {{ object.brand }}</p>
      <p>Prix: {{ object.price }}</p>
      <p>Association: {{ object.association }}</p>
      <p>Pourcentage du don: {{ object.donationPercentage }}%</p>
      <router-link :to="{ name: 'objects.show', params: { id: object._id } }"
        >See more</router-link
      >
      <hr />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Index",

  computed: {
    ...mapState({
      allObjects: (state) => state.objects.allObjects,
    }),
  },
  methods: {
    ...mapActions({
      fetchAllObjects: "objects/fetchAllObjects",
    }),
  },
  mounted() {
    this.fetchAllObjects();
  },
};
</script>