<template>
  <div>
    <h1>Profile</h1>
    <div v-if="profile">
      <p>{{ profile.username }}</p>
      <p>{{ profile.email }}</p>
      <p>{{ profile.telephone }}</p>
      <p>{{ profile.description }}</p>
      <p>{{ profile.address }}</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Login",

  computed: {
    ...mapState({
      profile: (state) => state.profile.profile.data,
    }),
  },
  methods: {
    ...mapActions({
      fetchProfile: "profile/fetchProfile",
    }),
  },
  mounted() {
    this.fetchProfile();
  },
};
</script>

<style lang="scss">
body #app {
  font-family: $fontfamily;
  color: $black;
}
</style>
