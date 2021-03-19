<template>
  <div class="tag">
    {{ category }}
  </div>
</template>

<script>
export default {
  props: {
    category: String,
  },
};
</script>

<style lang="scss">
.tag {
    padding:5px 10px;
    text-transform: uppercase;
}
</style>