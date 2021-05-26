<template>
  <div class="search-bar">
    <input v-model="searchValue" type="text" placeholder="Recherche" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchValue: "",
    };
  },
   watch: {
    searchValue() {
      this.$emit("search", this.searchValue);
    },
  },
};
</script>

<style lang="scss">
.search-bar {
  input {
    width: 100%;
    border:none;
    border-bottom: 1px solid $grey;
    padding: 10px;
    color: $black;
    background-color: $white;
  }
}
</style>
