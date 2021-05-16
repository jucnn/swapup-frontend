<template>
  <div class="container">
    <div class="tabsv row">
      <div class="tabsv-header col-3">
        <div
          v-for="(tab, index) in tabs"
          @click="selectTab(index)"
          :class="[
            'tabsv-header_item',
            { 'is-active': index == selectedIndex },
            'tabsv-header_' + tab.type,
          ]"
          :key="tab.title"
        >
          <p>
            {{ tab.title }}
          </p>
        </div>
      </div>

      <div class="tabsv-details col-9">
        <slot></slot>
      </div>
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
    type: String,
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
.tabsv {
  &-header {
    background-color: $lightgrey;
    padding: 0!important;

    &_item {
      cursor: pointer;
      padding: 15px;

      @media screen and (max-width:$md) {
        padding: 10px;
      }

      &.is-active {
        transition: 200ms;
        p {
          color: $white;
        }
      }

      p {
        margin-bottom: 0;
        font-weight: $semibold;
      }
    }

    &_pending {

      &.is-active {
        background-color: $yellow;
      }
    }

    &_accepted {

      &.is-active {
        background-color: $green;
      }
    }

    &_refused {

      &.is-active {
        background-color: $red;
      }
    }
  }
}
</style>
