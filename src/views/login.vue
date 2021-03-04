<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="login">
      <input type="text" name="email" v-model="email" /><br />
      <input type="password" name="password" v-model="password" /><br />
      <input type="submit" value="Login" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      email: "marine@gmail.com",
      password: "azerty",
    };
  },
  methods: {
    login() {
      axios
        .post(
          "http://localhost:8769/auth/login",
          {
            email: this.email,
            password: this.password,
          },
          { withCredentials: true }
        )
        .then(() => {
          this.$router.push({name: 'profile'})
        })
        .catch((err) => console.log(err));

    },
  },
};
</script>

<style lang="scss">
body #app {
  font-family: $fontfamily;
  color: $black;
}
</style>
