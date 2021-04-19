<template>
  <div>
    <span>close</span>
    <p>Tu ne sembles pas connecté !</p>
    <router-link :to="{ name: 'login' }">Se connecter</router-link>
    <router-link :to="{ name: 'register' }">S'inscrire</router-link>
  </div>
</template>

<script>
import ObjectCard from "@/components/object/ObjectCard";

export default {
  components: {
    ObjectCard
  },
};
</script>

<style lang="scss">
</style>