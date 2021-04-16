<template>
  <div class="menu-responsive_btn" @click="handleClick()">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    handleClick() {
      this.isOpen = true;
      this.$emit('clicked', this.isOpen)
    },
  },
};
</script>

<style lang="scss">
.menu-responsive_btn {
  span {
    background-color: $white;
    display: block;
    height: 2px;
    width: 25px;
    border-radius:5px ;

    &:not(:last-child) {
      margin-bottom: 7px;
    }
  }
}
</style>
