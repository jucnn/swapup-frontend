<template>
  <div id="connexion">
    <router-link class="connexion-logo" :to="{ name: 'index' }">
      <svg
        id="Logo_-_Desktop"
        data-name="Logo - Desktop"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 179.601 49.864"
      >
        <g
          id="Groupe_53"
          data-name="Groupe 53"
          transform="translate(125.151 44.932)"
        >
          <path
            id="Tracé_65"
            data-name="Tracé 65"
            d="M7.2.39c3.81,0,6.33-2.04,6.33-5.1,0-3.51-3.27-4.08-5.4-4.38-1.38-.21-2.46-.33-2.46-1.23,0-.6.45-1.17,1.56-1.17.9,0,1.5.39,1.62,1.08h4.38c-.09-2.67-2.37-4.8-6.06-4.8s-6.06,2.1-6.06,5.1c0,3.57,3.36,4.08,5.4,4.38,1.38.21,2.46.3,2.46,1.29,0,.63-.45,1.11-1.83,1.11-1.23,0-1.8-.39-1.83-1.17H.87C.93-1.65,3.39.39,7.2.39Zm15.03,0a5.868,5.868,0,0,0,4.98-2.37A5.83,5.83,0,0,0,32.19.39c3.6,0,6.36-2.1,6.36-6.87v-8.34h-4.5v8.34c0,1.98-.96,2.67-2.31,2.67-1.32,0-2.28-.69-2.28-2.67v-8.34h-4.5v8.34c0,1.98-.96,2.67-2.28,2.67-1.35,0-2.31-.69-2.31-2.67v-8.34h-4.5v8.34C15.87-1.71,18.63.39,22.23.39Zm25.83,0a4.715,4.715,0,0,0,4.59-2.85V0h4.14V-7.26c0-4.86-3.24-7.95-7.89-7.95a7.614,7.614,0,0,0-8.01,7.98A7.209,7.209,0,0,0,48.06.39Zm.81-4.2a3.341,3.341,0,0,1-3.42-3.6,3.341,3.341,0,0,1,3.42-3.6,3.341,3.341,0,0,1,3.42,3.6A3.341,3.341,0,0,1,48.87-3.81ZM59.73,6.33h4.5V-1.62A4.94,4.94,0,0,0,68.43.39a7.2,7.2,0,0,0,7.2-7.62,7.614,7.614,0,0,0-8.01-7.98c-4.53,0-7.89,2.97-7.89,7.95ZM67.65-3.81a3.341,3.341,0,0,1-3.42-3.6,3.341,3.341,0,0,1,3.42-3.6,3.341,3.341,0,0,1,3.42,3.6A3.341,3.341,0,0,1,67.65-3.81ZM85.29.39c4.38,0,7.32-2.55,7.32-7.53v-7.68h-4.5v7.68c0,2.34-1.14,3.33-2.82,3.33s-2.82-.99-2.82-3.33v-7.68h-4.5v7.68C77.97-2.13,80.91.39,85.29.39ZM95.55,6.33h4.5V-1.62a4.94,4.94,0,0,0,4.2,2.01,7.2,7.2,0,0,0,7.2-7.62,7.614,7.614,0,0,0-8.01-7.98c-4.53,0-7.89,2.97-7.89,7.95Zm7.92-10.14a3.341,3.341,0,0,1-3.42-3.6,3.341,3.341,0,0,1,3.42-3.6,3.341,3.341,0,0,1,3.42,3.6A3.341,3.341,0,0,1,103.47-3.81Z"
            transform="translate(-57 -10)"
            fill="#faf9f9"
          />
        </g>
        <g id="Groupe_54" data-name="Groupe 54" transform="translate(0 0)">
          <path
            id="Tracé_36"
            data-name="Tracé 36"
            d="M71.506,85.522h-17.6a7.9,7.9,0,0,1-7.873-7.873v-17.6a7.9,7.9,0,0,1,7.873-7.873h17.6a7.9,7.9,0,0,1,7.873,7.873v17.6a7.9,7.9,0,0,1-7.873,7.873"
            transform="translate(-46.033 -35.657)"
            fill="#ffa8ae"
          />
          <path
            id="Tracé_35"
            data-name="Tracé 35"
            d="M103.328,44.844A17.844,17.844,0,1,1,85.484,27a17.844,17.844,0,0,1,17.844,17.844"
            transform="translate(-53.463 -27)"
            fill="#b3d7f9"
          />
          <path
            id="Tracé_37"
            data-name="Tracé 37"
            d="M80.786,52.333H67.537c-.032.438-.054.88-.054,1.326A17.844,17.844,0,0,0,85.327,71.5c.447,0,.888-.022,1.326-.054V58.2a5.883,5.883,0,0,0-5.866-5.866"
            transform="translate(-53.409 -35.712)"
            fill="#a189db"
          />
        </g>
      </svg>
    </router-link>
    <svg
      :class="['bcg', loginPage ? '' : 'bcg-register']"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1398 804"
    >
      <defs>
        <clipPath id="clip-path">
          <rect
            id="Rectangle_91"
            data-name="Rectangle 91"
            width="1398"
            height="804"
            fill="#fff"
          />
        </clipPath>
        <clipPath id="clip-path-2">
          <rect
            id="Rectangle_90"
            data-name="Rectangle 90"
            width="1408"
            height="812"
            fill="#fff"
          />
        </clipPath>
      </defs>
      <g
        id="Groupe_de_masques_7"
        data-name="Groupe de masques 7"
        clip-path="url(#clip-path)"
      >
        <g
          id="Groupe_de_masques_6"
          data-name="Groupe de masques 6"
          transform="translate(0 -8)"
          clip-path="url(#clip-path-2)"
        >
          <g id="Groupe_55" data-name="Groupe 55">
            <path
              id="Tracé_66"
              data-name="Tracé 66"
              d="M-1458.158,3037.245s276.306,81.24,419.474-28.135,103.222-208.483,212.008-378.478,234.646-150.549,240-206.521-437.379,31.309-437.379,31.309l-434.105,315.171Z"
              transform="translate(2008.402 -2449)"
              fill="#b3d7f9"
            />
            <path
              id="Tracé_58"
              data-name="Tracé 58"
              d="M-554.308,2405.628c-64.579,147.82-256.1,200.758-348.3,324.048s3.763,367.482-208.87,459.806-498.034-123.594-498.034-123.594V2406.661l1005.031-1.033Z"
              transform="translate(1609.957 -2400.692)"
              fill="#494949"
            />
            <path
              id="Tracé_57"
              data-name="Tracé 57"
              d="M-901.707,2409c-37.634,37.634-236.162,38.587-347.183,78.1s-148.967,87.293-203.681,196.878S-1610,2822.35-1610,2822.35V2405.3Z"
              transform="translate(1610 -2401.236)"
              fill="#a491d3"
            />
          </g>
        </g>
      </g>
    </svg>

    <!--  <img
      :src="
        login
          ? '@/assets/img/register-bcg.svg'
          : '@/assets/img/register-bcg.svg'
      "
      alt=""
    /> -->
    <h1 v-if="loginPage">Connecte<br />toi</h1>
    <h1 v-else>Crée ton<br />compte</h1>
    <div class="connexion-container">
      <form @submit.prevent="loginPage ? login() : register()">
        <div class="connexion-container_item" v-if="!loginPage">
          <label for="username">Nom d'utilisateur</label> <br />
          <input type="text" name="username" v-model="username" />
        </div>
        <div class="connexion-container_item">
          <label for="email">Email</label> <br />
          <input type="text" name="email" v-model="email" /><br />
        </div>
        <div class="connexion-container_item">
          <label for="password">Mot de passe</label> <br />
          <input type="password" name="password" v-model="password" /><br />
        </div>
        <input
          type="submit"
          :value="loginPage ? 'Se connecter' : 'Créer mon compte'"
        />
      </form>
      <router-link :to="{ name: loginPage ? 'register' : 'login' }">{{
        loginPage ? "S'inscrire" : "Se connecter"
      }}</router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { mapActions } from "vuex";

export default {
  name: "FormConnexion",
  props: {
    loginPage: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      email: "marine@gmail.com",
      password: "azerty",
      username: "marinou",
    };
  },
  methods: {
    ...mapActions({
      createAccount: "profile/register",
    }),
    login() {
      console.log("fzf");
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
    register() {
      console.log("fzffds");

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
  },
};
</script>

<style lang="scss">
#connexion {
  display: flex;
  justify-content: space-around;
  position: relative;
  padding-top: 30vh;

  .bcg {
    position: absolute;
    max-width: 80%;
    z-index: -1;
    top: 0;
    left: 0;

    &-register {
      #Tracé_66 {
        fill: $lightred;
      }
    }
  }

  h1 {
    color: $white;
    font-size: 60px;
    font-weight: $semibold;
    line-height: 60px;
    margin: 0;
  }

  .connexion {
    &-logo {
      position: absolute;
      top: 30px;
      left: 60px;
      svg {
        max-width: 150px;
      }
    }
    &-container {
      width: 380px;
      border-radius: 10px;

      &_item {
        margin-bottom: 30px;
      }
    }
  }

  form input[type="text"],
  form input[type="password"] {
    background-color: transparent;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid $black;
    padding: 5px;
    width: 100%;
    margin-top: 5px;
  }

  form input[type="submit"] {
    background-color: $purple;
    border: none;
    border-radius: 10px;
    width: 70%;
    padding: 10px 0;
    color: $white;
    font-weight: $semibold;
    margin: 20px 0;
    cursor: pointer;
  }

  form label {
    font-weight: $semibold;
  }
}
</style>