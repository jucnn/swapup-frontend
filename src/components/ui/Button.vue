<template>
  <button class=".button">
      <slot></slot>
  </button>
</template>

<script>
export default {
    props: {
        type: {
            type:String,
            default: ''
        }
    }
};
</script>

<style lang="scss">

</style>