<template>
  <div>
    <TheHeader @submitFilters="getFilters" @searchValue="getSearch"
      >I'm a header</TheHeader
    >
    <main>
      <router-view :filtersChecked="filters" :searchValue="search" />
    </main>
    <TheFooter>I'm a footer</TheFooter>
  </div>
</template>

<script>
import TheHeader from "@/components/layout/TheHeader";
import TheFooter from "@/components/layout/TheFooter";

export default {
  name: "Main",
  components: {
    TheHeader,
    TheFooter,
  },
  data() {
    return {
      filters: null,
      search: null,
    };
  },
  methods: {
    getFilters(value) {
      this.filters = value;
      console.log(value);
    },
    getSearch(value) {
      console.log(value);
      this.search = value;
    },
  },
};
</script>

<style lang="scss"></style>
