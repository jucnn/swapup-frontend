<template>
  <div class="form">
    <input
      :type="type"
      :placeholder="placeholder"
      :value="value"
      :name="name"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    placeholder: String,
    value: [String, Number],
    type: String,
    name: String,
  },
};
</script>

<style lang="scss">

</style>