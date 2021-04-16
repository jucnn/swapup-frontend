<template>
  <div class="dropdown" v-if="isOpen">
    <ul>
      <li v-for="item in items" :key="item.label">
        <router-link :to="{ name: item.link }">{{ item.label }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss"></style>
