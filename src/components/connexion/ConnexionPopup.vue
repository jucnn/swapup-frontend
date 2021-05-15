<template>
  <div class="connexion-popup">
    <h3>Tu ne sembles pas connecté !</h3>
    <router-link class="button button--lightred" :to="{ name: 'login' }"
      >Se connecter</router-link
    >
    <router-link class="button button--lightblue" :to="{ name: 'register' }"
      >S'inscrire</router-link
    >
  </div>
</template>

<script>
import ObjectCard from "@/components/object/ObjectCard";

export default {
  components: {
    ObjectCard,
  },
};
</script>

<style lang="scss">
.connexion-popup {
  a {
    margin-top: 20px;
  }
}
</style>