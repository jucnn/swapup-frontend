<template>
  <div v-if="object">
    <h1>One object</h1>
    <img :src="object.image" alt="">
    <h2>{{ object.title }}</h2>
    <p>{{ object.description }}</p>
    <p>Etat : {{ object.state }}</p>
    <p>Marque : {{ object.brand }}</p>
    <p>Prix : {{ object.price }}€</p>
    <p>Association : {{ object.association }}</p>
    <p>Pourcentage du don : {{ object.donationPercentage }}%</p>
    <p v-if="seller">
      Vendeur :
      <router-link :to="{ name: 'user.index', params: { id: seller._id } }">{{
        seller.username
      }}</router-link>
    </p>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Index",

  computed: {
    ...mapState({
      object: (state) => state.objects.object,
      seller: (state) => state.users.user,
    }),
  },
  methods: {
    ...mapActions({
      fetchObject: "objects/fetchObject",
      fetchSeller: "users/fetchUser",
    }),
  },
  async mounted() {
    await this.fetchObject(this.$route.params.id);
    this.fetchSeller(this.object.seller_id);
  },
};
</script>