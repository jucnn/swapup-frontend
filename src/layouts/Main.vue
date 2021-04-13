<template>
  <div>
    <TheHeader>I'm a header</TheHeader>
    <main>
      <router-view />
    </main>
    <TheFooter>I'm a footer</TheFooter>
  </div>
</template>

<script>
import TheHeader from "@/components/layout/TheHeader";
import TheFooter from "@/components/layout/TheFooter";

export default {
  name: "Main",
  components: {
    TheHeader,
    TheFooter,
  },
  data() {
    return {
      isMenuOpened: false,
    }
  },
};
</script>

<style lang="scss"></style>
