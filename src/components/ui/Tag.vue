<template>
  <div class="tag" :style="{ backgroundColor : this.colors[Math.floor(Math.random() * this.colors.length)]}">
    {{ category }}
  </div>
</template>

<script>
export default {
  props: {
    category: String,
  },
  data() {
    return {
      colors: [
        '#7A5EBF',
        '#FFD41F',
        '#62C489',
        '#FF4F5B',
        '#64ADF3'
      ]
    }
  }
};
</script>

<style lang="scss">
.tag {
    padding:3px 15px;
    text-transform: uppercase;
    display: inline-block;
    border-radius: 20px;
    color:$white;
    font-weight: $bold;
    font-size: 14px;
}
</style>