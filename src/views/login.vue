<template>
<div>
  <FormConnexion/>
</div>
  <!-- <div id="login">
    <h1>Login</h1>
    <div>
      <form @submit.prevent="login">
        <input type="text" name="email" v-model="email" /><br />
        <input type="password" name="password" v-model="password" /><br />
        <input type="submit" value="Login" />
      </form>
    </div>
  </div> -->
</template>

<script>
import axios from "axios";
import FormConnexion from "@/components/FormConnexion"

export default {
  name: "Login",
  components: {
    FormConnexion
  },
  data() {
    return {
      email: "marine@gmail.com",
      password: "azerty",
      username: "marinou"
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
          this.$router.push({ name: "profile" });
        })
        .catch((err) => console.log(err));
    },
  },
};
</script>

<style lang="scss">

</style>
