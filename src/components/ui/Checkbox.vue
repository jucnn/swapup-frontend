<template>
  <div class="checkbox">
    <input
      type="checkbox"
      :id="slug"
      :value="label"
      v-model="checked"
      @change="onChange"
    />
    <label :for="slug">{{ label }}</label>
  </div>
</template>

<script>
//TODO : change label for id (Update objects with ObjectId)

export default {
  props: ["value", "slug", "label", "id"],
  data() {
    return {
      checkedItem: [],
    };
  },
  computed: {
    checked: {
      get() {
        return this.value;
      },
      set(val) {
        this.checkedItem = val;
      },
    },
  },
  methods: {
    onChange(e) {
      this.$emit("input", this.checkedItem);
    },
  },
};
</script>

<style lang="scss">
.checkbox {
  label {
    margin-left: 5px;
  }
}
</style>