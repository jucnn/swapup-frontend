<template>
  <div class="tabsh">
    <div class="tabsh-header">
      <div
        v-for="(tab, index) in tabs"
        @click="selectTab(index)"
        :class="['tabsh-header_item', { 'is-active': index == selectedIndex }]"
        :key="tab.title"
      >
        {{ tab.title }}
      </div>
    </div>

    <div class="tabsh-details">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    openedTab: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      selectedIndex: 0,
      tabs: [],
    };
  },
  methods: {
    selectTab(i) {
      this.selectedIndex = i;
      this.tabs.forEach((tab, index) => {
        tab.isActive = index === i;
      });
    },
  },
  created() {
    this.tabs = this.$children;
  },
  mounted() {
    this.selectTab(this.openedTab);
  },
  updated() {},
};
</script>

<style lang="scss">
.tabsh {
  &-header {
    display: flex;
    border-bottom: 1px solid $grey;

    &_item {
      color: $grey;
      padding-bottom: 10px;
      margin-right: 20px;
      cursor: pointer;

      &.is-active {
        color: $black;
        border-bottom: 3px solid $yellow;
      }
    }
  }

  &-details {
    margin-top: 40px;
  }
}
</style>
