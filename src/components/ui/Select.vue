<template>
  <div class="select">
    <select
      :name="name"
      :id="name"
      v-model="optionChecked"
      @change="$emit('select', $event.target.value)"
    >
      <option
        v-for="(option, index) in options"
        :key="index"
        :value="option._id"
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
    defaultValue: String,
    name: String,
  },
  data() {
    return {
      optionChecked: null,
    };
  },
  mounted() {
    /* this.optionChecked = this.defaultValue; */
  },
};
</script>

<style lang="scss">
.select {
  select {
    width: 100%;
    border-radius: 5px;
    border: 1px solid $grey;
    padding: 10px 20px;
    color: $black;
    background-color:$white;
  }
}
</style>
