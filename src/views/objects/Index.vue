<template>
  <div>
    <h1>Tous les objets</h1>
    <div v-for="object in othersObjects" :key="object.id">
      <img :src="object.image" alt="" />
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
  data() {
    return {
      othersObjects: [],
    };
  },
  computed: {
    ...mapState({
      allObjects: (state) => state.objects.allObjects,
      profile: (state) => state.profile.profile.data,
    }),
  },
  methods: {
    ...mapActions({
      fetchAllObjects: "objects/fetchAllObjects",
      fetchProfile: "profile/fetchProfile",
    }),
  },
  async mounted() {
    await this.fetchProfile();
    await this.fetchAllObjects();
    this.othersObjects = this.allObjects.filter(
      (object) => object.seller_id !== this.profile._id
    );
  },
};
</script>