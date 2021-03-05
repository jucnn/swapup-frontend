<template>
  <div>
    <h1>Register</h1>
    <form @submit.prevent="register">
      <input type="text" name="username" v-model="username" />
      <input type="text" name="description" v-model="description" />
      <input type="text" name="telephone" v-model="telephone" />
      <input type="text" name="address" v-model="address" />
      <input type="text" name="email" v-model="email" /><br />
      <input type="password" name="password" v-model="password" /><br />
      <input type="submit" value="Register" />
    </form>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Register",
  data() {
    return {
      username: "",
      description: "",
      telephone: "",
      address: "",
      email: "marine@gmail.com",
      password: "azerty",
    };
  },
  methods: {
    login() {
      axios
        .post(
          "http://localhost:8769/auth/register",
          {
            username: this.username,
            description: this.description,
            telephone: this.telephone,
            address: this.address,
            email: this.email,
            password: this.password,
          },
          { withCredentials: true }
        )
        .then(() => {
          this.$router.push({ name: "profile" });
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
