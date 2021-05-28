<template>
  <button class="filters_btn button button--purple" @click="handleClick()">
   Ajouter des filtres
  </button>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    handleClick() {
      this.$emit("clicked");
    },
  },
};
</script>

<style lang="scss">

</style>
