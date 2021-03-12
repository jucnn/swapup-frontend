<template>
  <div>
    <TheHeader>I'm a header</TheHeader>
    <router-view></router-view>
    <TheFooter>I'm a footer</TheFooter>
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader"
import TheFooter from "@/components/TheFooter"


export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style lang="scss">
body #app {
  font-family: $fontfamily;
  color: $black;
}
</style>
