<template>
  <div class="input">
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
.input {
  input {
    width: 100%;
    background-color: transparent;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid $black;
    padding: 5px;
    font-size: 16px;
  }
}
</style>