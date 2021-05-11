<template>
  <div class="popupdetails-container">
    <div class="popupdetails-content">
      <p v-if="sentSwap">
        Tu a proposé à
        <span class="popupdetails-strong">{{
          swap.swap_receiver.username
        }}</span>
        d'échanger ton objet "<span class="popupdetails-strong">{{
          swap.objectToExchange.title
        }}</span
        >" contre :
      </p>
      <p v-if="receivedSwap">
        Pour ton objet "<span class="popupdetails-strong">{{
          swap.objectWanted.title
        }}</span
        >",
        <span class="popupdetails-strong">{{ swap.swap_sender.username }}</span>
        te propose :
      </p>
      <div v-if="sentSwap" class="popupdetails-infos">
        <img :src="swap.objectWanted.image" alt="" />
        <div class="popupdetails-description">
          <h3>{{ swap.objectWanted.title }}</h3>
          <p><span>Etat</span> : {{ swap.objectWanted.state.label }}</p>
          <p><span>Marque</span> : {{ swap.objectWanted.brand }}</p>
          <p>{{ swap.objectWanted.description }}</p>
        </div>
      </div>
      <div v-if="receivedSwap" class="popupdetails-infos">
        <img :src="swap.objectToExchange.image" alt="" />
        <div class="popupdetails-description">
          <h3>{{ swap.objectToExchange.title }}</h3>
          <p>Etat : {{ swap.objectToExchange.state.label }}</p>
          <p>Marque : {{ swap.objectToExchange.brand }}</p>
          <p>{{ swap.objectToExchange.description }}</p>
        </div>
      </div>
      <div class="container">
        <div
          class="popupdetails-btns row justify-content-around"
          v-if="receivedSwap"
        >
          <button
            @click="$emit('swapAccepted')"
            class="button button--green col-12 col-sm-5"
          >
            Accepter
          </button>
          <button
            @click="$emit('swapRefused')"
            class="button button--red col-12 col-sm-5"
          >
            Refuser
          </button>
        </div>
      </div>
      <div class="popupdetails-btns" v-if="sentSwap">
        <button  @click="$emit('swapCanceled')" class="button button--red">Annuler</button>
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
};
</script>

<style lang="scss">
.popupdetails {
  &-content {
    p:nth-child(1) {
      text-align: center;
    }
  }
  &-strong {
    font-weight: 600;
  }

  &-infos {
    img {
      max-width: 80%;
    }
  }

  &-description {
    margin: 20px 0;

    p > span {
      font-weight: 600;
    }
  }
}
</style>