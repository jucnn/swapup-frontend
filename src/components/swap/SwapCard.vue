<template>
  <div class="container">
    <div class="swapcard row">
      <div class="swapcard-imgs col-4">
        <img :src="swap.objectToExchange.image" alt="" />
        <img :src="swap.objectWanted.image" alt="" />
      </div>
      <div class="col-6">
        <div v-if="sendSwap">
          <p>
            Tu as envoyé un swap à <b>{{ swap.swap_receiver.username }}</b
            >. Attends sa réponse !
          </p>

          <button class="button button--blue">Voir les détails</button>
        </div>
        <div v-if="receivedSwap">
          <p>
            <b>{{ swap.swap_sender.username }}</b> te propose un swap !
          </p>
          <button class="button button--blue">Voir les détails</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    swap: Object,
    sendSwap: { type: Boolean, default: false },
    receivedSwap: { type: Boolean, default: false },
  },
  components: {},
};
</script>

<style lang="scss">
.swapcard {
  background-color: rgba(255, 226, 102, 0.3);
  padding: 20px;
  border-radius: $mainborderradius;
  margin-bottom: 20px;

  &-imgs {
    position: relative;

    img {
      position: absolute;
      max-width: 60%;
      border-radius: $mainborderradius;

      &:nth-child(1) {
        top: 0;
        left: 0;
      }

      &:nth-child(2) {
        bottom: 0;
        right: 0;
      }
    }
  }
}
</style>
