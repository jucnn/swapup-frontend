<template>
  <div class="tabsh">
    <div class="tabsh-header">
      <div
        v-for="(tab, index) in tabs"
        @click="selectTab(index)"
        :class="['tabsh-header_item', { 'is-active': index == selectedIndex }]"
        :key="tab.title"
      >
        <span>
          {{ tab.title }}
        </span>
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
    openedTabSlug: {
      type: String,
      default: "objects",
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
      this.$emit("changeTab", this.tabs[i].slug);
      this.tabs.forEach((tab, index) => {
        tab.isActive = index === i;
      });
    },
  },
  created() {
    this.$route.query.tab = this.openedTabSlug;
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
      cursor: pointer;

      span {
        margin: 0 10px 7px 10px;
        display: inline-block;
      }

      @media screen and (max-width: $sm) {
        font-size: 14px;
      }

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
