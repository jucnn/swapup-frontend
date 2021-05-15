<template>
  <div class="container">
    <div :class="['swapcard row ', 'swapcard--' + swap.swap_state.slug]">
      <div class="swapcard-imgs col-4 d-none d-sm-block">
        <img :src="swap.objectToExchange.image" alt="" />
        <img :src="swap.objectWanted.image" alt="" />
      </div>
      <div class="col-12 col-sm-6">
        <div v-if="sentSwap">
          <p>
            Tu as envoyé un swap à <b>{{ swap.swap_receiver.username }}</b
            >. Attends sa réponse !
          </p>
        </div>
        <div v-if="receivedSwap">
          <p v-if="swap.swap_state.slug == 'accepted'">
            Tu as accepté le swap de <b>{{ swap.swap_sender.username }}</b>
          </p>
          <p v-else-if="swap.swap_state.slug == 'refused'">
            Tu as refusé le swap de <b>{{ swap.swap_sender.username }}</b>
          </p>
          <p v-else>
            <b>{{ swap.swap_sender.username }}</b> te propose un swap !
          </p>
        </div>
        <button
          v-if="swap.swap_state.slug == 'pending'"
          class="button button--blue"
          @click="$emit('handleClick', swap, sentSwap, receivedSwap)"
        >
          Voir les détails
        </button>
        <button
          v-if="swap.swap_state.slug == 'accepted'"
          class="button button--green"
        >
          Envoyer un message
        </button>
        <button
          v-if="swap.swap_state.slug == 'refused'"
          class="button button--red"
        >
          Supprimer le swap
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    swap: Object,
    sentSwap: { type: Boolean, default: false },
    receivedSwap: { type: Boolean, default: false },
  },
  components: {},
};
</script>

<style lang="scss">
.swapcard {
  padding: 20px;
  border-radius: $mainborderradius;
  margin-bottom: 20px;

  @media screen and (max-width:$sm) {
    padding:15px 0px;
  }

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

  &--pending {
    background-color: rgba(255, 226, 102, 0.3);
  }

  &--accepted {
    background-color: $lightgreen;
    color: $white;
  }
  &--refused {
    background-color: $lightred;
    color: $white;
  }
}
</style>
