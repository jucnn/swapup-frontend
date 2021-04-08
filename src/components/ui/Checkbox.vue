<template>
  <div>
    <input
      type="checkbox"
      :id="val"
      :value="val"
      v-model="checked"
      @change="onChange"
    />
    <label :for="val">{{label}}</label>
  </div>
</template>

<script>
export default {
  props: ['value', 'val', 'label'],
  data() {
    return {
      checkedItem: false,
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
    onChange: function(e) {
      console.log(this.checkedItem);
      this.$emit("input", this.checkedItem);
    },
  },
};
</script>
