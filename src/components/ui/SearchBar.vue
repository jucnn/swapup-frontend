<template>
  <div class="search-bar">
    <input v-model="searchValue" type="text" placeholder="Recherche" @keyup.enter="sendSearchValue()" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchValue: "",
    };
  },
  methods: {
    sendSearchValue() {
      this.$emit('search', this.searchValue)
    }
  }
};
</script>

<style lang="scss">
.search-bar {
  input {
    width: 100%;
    border-radius: $mainborderradius;
    border: none;
    padding: 10px 20px;
    color: $grey;
    box-shadow: $boxshadow;
  }
}
</style>
