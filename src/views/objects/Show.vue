<template>
  <div class="container object-container">
    <div v-if="object" class="object">
      <div class="object_img">
        <img :src="object.image" alt="" />
      </div>
      <div class="object_seller box-white">
        <div
          v-if="profile && object.seller._id == profile._id"
          class="object_btns-owner"
        >
          <router-link
            :to="{ name: 'objects.edit' }"
            class="button button--purple"
            >Modifier</router-link
          >
          <a @click="handleDelete" class="button button--red">Supprimer</a>
        </div>
        <div v-else>
          <p>
            Vendu par :
            <router-link
              :to="{ name: 'user', params: { id: object.seller._id } }"
              >{{ object.seller.username }}</router-link
            >
          </p>
          <p>Membre depuis {{ object.seller.creationDate }} (use Moment)</p>
          <div>
            <p v-if="object.seller.objectsWanted">A la recherche de :</p>
            {{ object.seller.objectsWanted }}
          </div>
          <div class="object_btns">
            <router-link
              class="button button--blue"
              :to="{ name: 'user', params: { id: object.seller._id } }"
              >Profil du vendeur</router-link
            >
            <div class="object_btns-actions">
              <button
                class="button button--purple"
                @click="swapBtnClicked()"
                :disabled="isSwapExist"
              >
                <span v-if="!isSwapExist">Swaper</span>
                <span v-else>Swap envoyé</span>
              </button>
              <button class="button button--green">Acheter</button>
            </div>
          </div>
        </div>
      </div>
      <div class="object_details box-white">
        <h2>{{ object.title }}</h2>
        <div class="object_criteria">
          <p><span>Prix :</span> {{ object.price }}€</p>
          <p><span>Etat :</span> {{ object.state.label }}</p>
          <p>
            <span>Marque : </span
            >{{ object.brand ? object.brand : "Pas de marque" }}
          </p>
          <p>
            <span>Association :</span> {{ object.association.label }} ({{
              object.association.type
            }})
          </p>
        </div>
        <p v-if="object.description == ' '">Pas de description</p>
        <p v-else>{{ object.description }}</p>
      </div>
    </div>
    <Popup
      v-if="popup"
      :isValidate="swapSent"
      :isUserConnected="isUserConnected"
      @closeClick="popup = false"
    >
      <SwapPopupRequest v-if="swapPopup" @handleClick="sendSwap" />
      <div v-if="swapSent" class="swappopup-validation">
        <img src="@/assets/img/check.png" alt="" />
        <h4>Swap envoyé !</h4>
        <p>Maintenant, attends la réponse du swapeur</p>
      </div>
    </Popup>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import BackButton from "@/components/ui/BackButton";
import Popup from "@/components/ui/Popup";
import SwapPopupRequest from "@/components/swap/SwapPopupRequest";

export default {
  name: "Index",
  components: {
    BackButton,
    Popup,
    SwapPopupRequest,
  },
  data() {
    return {
      popup: false,
      swapPopup: false,
      swapSent: false,
    };
  },
  computed: {
    ...mapState({
      object: (state) => state.objects.object,
      profile: (state) => state.profile.profile.data,
      userSwapSent: (state) => state.profile.userSwapSent,
      userSwapRecieved: (state) => state.profile.userSwapReceived,
    }),
    isUserConnected() {
      return this.profile ? true : false;
    },
    isSwapExist() {
      return this.userSwapSent.some(
        (swapSent) => swapSent.objectWanted._id == this.object._id
      );
    },
  },
  methods: {
    ...mapActions({
      fetchObject: "objects/fetchObject",
      deleteObject: "objects/deleteObject",
      createSwap: "swap/createSwap",
    }),
    swapBtnClicked() {
      this.popup = true;
      this.swapPopup = true;
    },
    sendSwap(value) {
      this.swapPopup = false;
      const payload = {
        objectWanted: this.object._id,
        objectToExchange: value,
        swap_sender: this.profile._id,
        swap_receiver: this.object.seller._id,
      };
      this.createSwap(payload);
      this.swapSent = true;
    },
    handleDelete() {
      console.log("delete");
      this.deleteObject(this.object._id);
      this.$router.go(-1);
    },
  },
  mounted() {
    this.fetchObject(this.$route.params.id);
  },
};
</script>

<style lang="scss">
.object {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px 40px;
  grid-template-areas:
    "img seller"
    "details details";

  @media screen and (max-width: $md) {
    grid-template-areas:
      "img img"
      "details details"
      "seller seller";
  }

  &-container {
    margin-top: 80px;
  }

  &_img {
    border-radius: $mainborderradius;
  }

  &_img {
    grid-area: img;
    background-color: $grey;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 200px;
  }

  &_details {
    grid-area: details;
  }

  &_criteria {
    border-top: 2px solid $lightgrey;
    border-bottom: 2px solid $lightgrey;
    display: flex;
    flex-wrap: wrap;
    column-gap: 10px;
    padding-top: 20px;
    margin-bottom: 20px;

    p {
      width: calc((100% / 3) - 20px);
    }

    span {
      font-weight: $semibold;
    }
  }

  &_seller {
    grid-area: seller;
    display: flex;
    align-items: center;
  }

  &_btns {
    &-actions {
      display: flex;
      column-gap: 10px;
      margin-top: 10px;
    }
  }

  &_btns-owner {
    width: 100%;
    a:not(:last-child) {
      margin-bottom: 20px;
    }
  }
}

.swappopup-validation {
  color: $white;

  img {
    margin-bottom: 20px;
  }

  p,
  h4 {
    margin-bottom: 10px;
  }

  h4 {
    font-weight: $semibold;
  }
}
</style>