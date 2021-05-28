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
      this.$cookies.remove(process.env.VUE_APP_COOKIE_NAME);

      axios
        .get(`${process.env.VUE_APP_API_URL}auth/logout`, {
          withCredentials: true,
        })
        .then(() => {
          this.$store.commit("profile/setProfile", {});
          this.$router.push({ name: "index" });
        })
        .catch((err) => console.log(err));
      this.$router.push({ name: "index" });
    },
  },
};
</script>

<style lang="scss"></style>
