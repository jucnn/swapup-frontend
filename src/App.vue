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
      accessToken: (state) => state.profile.accessToken,
    }),
  },
  mounted() {
    if (this.accessToken && !this.profile) {
      this.fetchProfile();
    }
  },
  methods: {
    ...mapActions({
      fetchProfile: "profile/fetchProfile",
    }),
  },
};
</script>