<template>
  <div v-show="isActive">
    <slot @click="$emit('tabClick')"></slot>
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
