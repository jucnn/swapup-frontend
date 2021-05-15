<template>
  <div v-show="isActive">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "Tab",
    },
    slug: {
      type: String,
      default: "objects"
    },
    type: {
      type: String,
      default: "pending"
    }
  },
  data() {
    return {
      isActive: true,
    };
  },
};
</script>

<style lang="scss"></style>
