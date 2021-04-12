<template>
  <div class="textarea">
    <textarea
      :maxlength="maxlength"
      :placeholder="placeholder"
      :value="value"
      @input="$emit('input', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    placeholder: String,
    value: [String, Number],
    maxlength: Number,
  },
};
</script>

<style lang="scss">
.textarea {
  textarea {
    width: 100%;
  }
}
</style>