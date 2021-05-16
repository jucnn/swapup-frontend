<template>
  <div>
    <button class="button button--red" @click="logout()">Se déconnecter</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  methods: {
    logout() {
      axios
        .get(`${process.env.VUE_APP_API_URL}auth/logout`, {
          withCredentials: true,
        })
        .then(() => {
          this.$store.commit("profile/setProfile", {});
          this.$router.push({ name: "index" });
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style lang="scss"></style>
