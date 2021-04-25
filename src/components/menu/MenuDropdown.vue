<template>
  <div class="dropdown">
    <div
      v-for="item in items"
      :key="item.label"
      class="dropdown-item"
      @click="$emit('handleClick')"
    >
      <router-link :to="{ name: item.url }">{{ item.label }}</router-link>
    </div>
    <ButtonLogout />
  </div>
</template>

<script>
import ButtonLogout from "@/components/connexion/ButtonLogout";

export default {
  components: {
    ButtonLogout,
  },
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss">
.dropdown {
  background-color: $white;
  position: absolute;
  top: 100%;
  right: 0;
  padding: 20px;
  border-radius: $mainborderradius;
  box-shadow: $boxshadow;

  button,
  a {
    font-size: 16px;
  }

  button {
    margin-top: 10px;
    padding: 8px 30px;
  }

  a {
    display: block;
    border-radius: $mainborderradius;
    padding: 5px;
    text-align: left;
    position: relative;
    margin-bottom: 5px;
    font-weight: $semibold;

    &:before {
      content: "";
      height: 4px;
      width: 0px;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      background-color: $yellow;
    }

    &:hover {
      padding-left: 20px;
      transition: 250ms;
      &:before {
        width: 15px;
        transition: 250ms;
      }
    }
  }
}
</style>
