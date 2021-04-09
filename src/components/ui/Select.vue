<template>
  <div class="select">
    <select v-model="optionChecked" @change="$emit('select', $event.target.value)">
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option.label"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  props: {
    options: Array,
  },
  data() {
    return {
      optionChecked: null,
    };
  }
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
