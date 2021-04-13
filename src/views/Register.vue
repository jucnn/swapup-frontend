<template>
  <div>
  <FormConnexion :loginPage="false"/>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";
import FormConnexion from "@/components/user/FormConnexion"


export default {
  name: "Register",
  components: {
    FormConnexion
  },
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

</style>
