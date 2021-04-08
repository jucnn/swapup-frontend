<template>
  <div class="select">
    <select name="" id="">
      <option v-for="(option, index) in options" :key="index" :value="option.value">{{
        option.label
      }}</option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    options: Array,
  },
};
</script>

<style lang="scss">
.select {
  select {
    width: 100%;
    border-radius: 10px;
    border: none;
    padding: 10px 20px;
    color: $black;
    box-shadow: $boxshadow;
  }
}
</style>
