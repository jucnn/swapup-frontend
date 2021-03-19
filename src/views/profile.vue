<template>
  <div>
    <h1>Profile</h1>
    <div v-if="profile">
      <p>{{ profile.username }}</p>
      <p>{{ profile.email }}</p>
      <p>{{ profile.telephone }}</p>
      <p>{{ profile.description }}</p>
      <p>{{ profile.address }}</p>
      <p>{{profile._id}}</p>
      <div>
        <h2>Mes objets :</h2>
        <ul v-for="object in userObjects" :key="object._id">
          <li>{{ object.title }}</li>
          <router-link
            :to="{ name: 'objects.edit', params: { id: object._id } }"
            >Modifier</router-link
          >
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Profile",
  data() {
    return {
      userObjects: [],
    };
  },

  computed: {
    ...mapState({
      profile: (state) => state.profile.profile.data,
      allObjects: (state) => state.objects.allObjects,
      allSwap: (state) => state.swap.allSwap
    }),
  },
  methods: {
    ...mapActions({
      fetchProfile: "profile/fetchProfile",
      fetchAllObjects: "objects/fetchAllObjects",
      fetchAllSwap: "swap/fetchAllSwap",
    }),
  },
  async mounted() {
    await this.fetchProfile();
    await this.fetchAllObjects();
    await this.fetchAllSwap(this.$route.query);
    this.userObjects = this.allObjects.filter(
      (object) => object.seller_id == this.profile._id
    );
  },
};
</script>

<style lang="scss">

</style>
