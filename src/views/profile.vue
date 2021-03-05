<template>
  <div>
    <h1>Profile</h1>
    <div v-if="profile">
      <p>{{ profile.username }}</p>
      <p>{{ profile.email }}</p>
      <p>{{ profile.telephone }}</p>
      <p>{{ profile.description }}</p>
      <p>{{ profile.address }}</p>
      <div>
        <h2>Mes objets :</h2>
        <ul v-for="object in userObjects" :key="object._id">
          <li>{{object.title}}</li>
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
    }),
  },
  methods: {
    ...mapActions({
      fetchProfile: "profile/fetchProfile",
      fetchAllObjects: "objects/fetchAllObjects",
    }),
  },
  async mounted() {
    await this.fetchProfile();
    await this.fetchAllObjects();
    this.userObjects = this.allObjects.filter(
      (object) => object.seller_id == this.profile._id
    );
  },
};
</script>

<style lang="scss">
body #app {
  font-family: $fontfamily;
  color: $black;
}
</style>
