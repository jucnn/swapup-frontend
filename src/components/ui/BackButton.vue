<template>
  <div class="back-btn">
    <a @click="$router.go(-1)"><img src="@/assets/img/arrow.svg" /> </a>
  </div>
</template>

<script>
export default {
  name: "BackButton",
};
</script>

<style lang="scss">
.back-btn {
  background-color: white;
  border-radius: 4px;
  box-shadow: $boxshadow;
  display: inline-block;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  cursor: pointer;

  a {
    display: inherit;
  }
}
</style>