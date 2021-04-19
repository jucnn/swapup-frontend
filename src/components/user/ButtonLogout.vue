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
        .get("http://localhost:8769/auth/logout", { withCredentials: true })
        .then(() => {
          Vue.prototype.$isUser = false;
          this.$router.push({ name: "index" });
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style lang="scss"></style>
