<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState({
      profile: (state) => state.profile.profile.data,
      userSwapSent: (state) => state.profile.userSwapSent,
      userSwapRecieved: (state) => state.profile.userSwapReceived,
      accessToken: (state) => state.profile.accessToken,
    }),
  },
  mounted() {
    if (this.accessToken && !this.profile) {
      this.fetchProfile();
      this.fetchUserSwapSent();
      this.fetchUserSwapReceived();
    }
  },
  methods: {
    ...mapActions({
      fetchProfile: "profile/fetchProfile",
      fetchUserSwapSent: "profile/fetchUserSwapSent",
      fetchUserSwapReceived: "profile/fetchUserSwapReceived",
    }),
  },
};
</script>