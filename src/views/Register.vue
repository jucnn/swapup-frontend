<template>
  <div>
    <h1>Register</h1>
    <form @submit.prevent="register">
      <div>
        <label for="username">Nom d'utilisateur</label> <br />
        <input type="text" name="username" v-model="username" />
      </div>
      <div>
        <label for="description">Description</label> <br />
        <input type="text" name="description" v-model="description" />
      </div>
      <div>
        <label for="telephone">Téléphone</label> <br />
        <input type="text" name="telephone" v-model="telephone" />
      </div>
      <div>
        <label for="address">Adresse</label> <br />
        <input type="text" name="address" v-model="address" />
      </div>
      <div>
        <label for="email">Email</label> <br />
        <input type="text" name="email" v-model="email" /><br />
      </div>
      <div>
        <label for="password">Mot de passe</label> <br />
        <input type="password" name="password" v-model="password" /><br />
      </div>
      <input type="submit" value="Register" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";

export default {
  name: "Register",
  data() {
    return {
      username: "jucnn",
      description: "my description",
      telephone: "0634763289",
      address: "Paris",
      email: "juliette@gmail.com",
      password: "azerty",
    };
  },
  methods: {
    ...mapActions({
      createAccount: "profile/register",
    }),
    // TODO: error 500 on register 
    register() {
      axios
        .post(
          "http://localhost:8769/auth/register",
          {
            username: this.username,
            description: this.description,
            password: this.password,
            telephone: this.telephone,
            address: this.address,
            email: this.email,
          },
          { withCredentials: true }
        )
        .then(() => {
          this.$router.push({ name: "profile" });
        })
        .catch((err) => console.log(err));
    },
    /*  register() {
      const payload = {
        username: this.username,
        description: this.description,
        password: this.password,
        telephone: this.telephone,
        address: this.address,
        email: this.email,
      };
      console.log(payload);
      this.createAccount(payload);
       this.$router.push({ name: "profile" });
    }, */
  },
};
</script>

<style lang="scss">
body #app {
  font-family: $fontfamily;
  color: $black;
}
</style>
