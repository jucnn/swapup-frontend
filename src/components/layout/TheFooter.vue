<template>
  <footer>
    <p>
      Copyright © 2021. Created by
      <a href="https://github.com/jucnn" target="_blank">jucnn</a>. All Rights
      Reserved.
    </p>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>

<style lang="scss">
footer {
  padding: 20px 0;
  margin-top: 40px;
  background-color: $lightyellow;
  color:$black;

  p {
    font-size: 12px;
    text-align: center;
    margin-bottom: 0;
  }

  a {
    color:$darkyellow;
  }
}
</style>