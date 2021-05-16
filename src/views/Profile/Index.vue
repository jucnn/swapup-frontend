<template>
  <div class="profile">
    <div v-if="profile">
      <div class="profile-top">
        <div class="container">
          <div class="row">
            <div class="col-6 col-md-4 container">
              <div class="row justify-content-center">
                <div class="profile-photo">
                  <!--  <img src="" alt="" /> -->
                </div>
              </div>
            </div>
            <div class="col-6 col-md-5">
              <p>
                <b>{{ profile.username }}</b>
                <br />{{ profile.address }}
              </p>
              <p>
                Membre depuis le
                {{ new Date(profile.creationDate).toLocaleDateString() }}
              </p>
            </div>
            <div class="col-3 d-none d-md-block">
              <router-link
                class="button button--purple"
                :to="{ name: 'profile.edit' }"
                >Modifier mon profil</router-link
              >
            </div>
          </div>
        </div>
      </div>
      <div class="profile-bottom container">
        <div class="d-block d-md-none btn-actions">
          <router-link
            class="button button--purple"
            :to="{ name: 'profile.edit' }"
            >Modifier mon profil</router-link
          >
        </div>
        <p>{{ profile.description }}</p>
        <div class="tabs-container">
          <TabsHorizontal
            :openedTab="getIndexOfTab.index"
            :openedTabSlug="getIndexOfTab.slug"
            @changeTab="getSelectedTab"
          >
            <Tab title="Mes objets" slug="objects">
              <div class="profile-objects">
                <div class="container profile-objects_title">
                  <div class="row align-items-center">
                    <h2 class="col">Mes objets</h2>
                    <div class="col-4 d-none d-sm-block">
                      <router-link
                        class="button button--purple"
                        :to="{ name: 'objects.create' }"
                        >Ajouter un objet</router-link
                      >
                    </div>
                  </div>
                </div>
                <div class="container">
                  <p>Tu as publié {{ userObjects.length }} objets</p>
                </div>
                <div class="container">
                  <div class="row">
                    <ObjectCard
                      class="objects-item col-12 col-sm-6 col-lg-4"
                      v-for="object in userObjects"
                      :key="object._id"
                      :object="object"
                    />
                  </div>
                  <div class="d-sm-none addbutton-container">
                    <AddButton />
                  </div>
                </div>
              </div>
            </Tab>
            <Tab title="Mes swaps envoyés" slug="sentswaps">
              <div class="profile-swap">
                <h2 class="col">Mes swaps envoyés</h2>
                <TabsVertical>
                  <Tab title="En attente" type="pending">
                    <div
                      v-for="swapSent in userSwapByState(
                        userSwapSent,
                        'pending'
                      )"
                      :key="swapSent._id"
                    >
                      <SwapCard
                        @handleClick="displaySwapPopup"
                        :swap="swapSent"
                        :sentSwap="true"
                      />
                    </div>
                  </Tab>
                  <Tab title="Accepté" type="accepted">
                    <div
                      v-for="swapSent in userSwapByState(
                        userSwapSent,
                        'accepted'
                      )"
                      :key="swapSent._id"
                    >
                      <SwapCard :swap="swapSent" :sentSwap="true" />
                    </div>
                  </Tab>
                  <Tab title="Refusé" type="refused">
                    <div
                      v-for="swapSent in userSwapByState(
                        userSwapSent,
                        'refused'
                      )"
                      :key="swapSent._id"
                    >
                      <SwapCard :swap="swapSent" :sentSwap="true" />
                    </div>
                  </Tab>
                </TabsVertical>
              </div>
            </Tab>
            <Tab title="Mes swaps reçus" slug="receivedswaps">
              <div class="profile-swap">
                <h2 class="col">Mes swaps reçus</h2>
                <TabsVertical>
                  <Tab title="En attente" type="pending">
                    <div
                      v-for="swapReceived in userSwapByState(
                        userSwapReceived,
                        'pending'
                      )"
                      :key="swapReceived._id"
                    >
                      <SwapCard
                        @handleClick="displaySwapPopup"
                        :swap="swapReceived"
                        :receivedSwap="true"
                      />
                    </div>
                  </Tab>
                  <Tab title="Accepté" type="accepted">
                    <div
                      v-for="swapReceived in userSwapByState(
                        userSwapReceived,
                        'accepted'
                      )"
                      :key="swapReceived._id"
                    >
                      <SwapCard :swap="swapReceived" :receivedSwap="true" />
                    </div>
                  </Tab>
                  <Tab title="Refusé" type="refused">
                    <div
                      v-for="swapReceived in userSwapByState(
                        userSwapReceived,
                        'refused'
                      )"
                      :key="swapReceived._id"
                    >
                      <SwapCard :swap="swapReceived" :receivedSwap="true" />
                    </div>
                  </Tab>
                </TabsVertical>
              </div>
            </Tab>
          </TabsHorizontal>
          <transition name="fade">
            <Popup
              v-if="swapupPopup.isDisplayed"
              :isValidate="isReponseAccepted"
              :isAccepted="responseType == 'accepted' ? true : false"
              :isRefusal="responseType == 'refused' ? true : false"
              :isUserConnected="isUserConnected"
              @closeClick="closePopup()"
            >
              <SwapPopupDetails
                v-if="isResponseSent == false"
                :swap="swapupPopup.swap"
                :receivedSwap="swapupPopup.isReceivedSwap"
                :sentSwap="swapupPopup.isSentSwap"
                @swapAccepted="changeSwapState('accepted', swapupPopup.swap)"
                @swapRefused="changeSwapState('refused', swapupPopup.swap)"
                @swapCanceled="changeSwapState('canceled', swapupPopup.swap)"
              />
              <div v-else>
                <div v-if="responseType == 'accepted'" class="swappopup-validation">
                  <img src="@/assets/img/check.png" alt="">
                  <h3>Tu as accepté le swap !</h3>
                </div>
                <div v-if="responseType == 'refused'" class="swappopup-validation">
                  <img src="@/assets/img/check.png" alt="">
                  <h3>Tu as refusé le swap.</h3>
                </div>
                <div v-if="responseType == 'canceled'" class="swappopup-validation">
                  <img src="@/assets/img/check.png" alt="">
                  <h3>Tu as annulé le swap.</h3>
                </div>
              </div>
            </Popup>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Button from "@/components/ui/Button";
import ButtonLogout from "@/components/connexion/ButtonLogout";
import AddButton from "@/components/ui/AddButton";
import TabsHorizontal from "@/components/ui/TabsHorizontal";
import TabsVertical from "@/components/ui/TabsVertical";
import Tab from "@/components/ui/Tab";
import ObjectCard from "@/components/object/ObjectCard";
import SwapCard from "@/components/swap/SwapCard";
import SwapPopupDetails from "@/components/swap/SwapPopupDetails";
import Popup from "@/components/ui/Popup";

export default {
  name: "Profile",
  components: {
    Button,
    AddButton,
    ObjectCard,
    ButtonLogout,
    TabsHorizontal,
    TabsVertical,
    Tab,
    SwapCard,
    SwapPopupDetails,
    Popup,
  },
  data() {
    return {
      /*  userObjects: [], */
      openedTab: null,
      swapupPopup: {
        isDisplayed: false,
        swap: null,
        isSentSwap: false,
        isReceivedSwap: false,
      },
      isResponseSent: false,
      isReponseAccepted: null,
      responseType: null,
    };
  },
  computed: {
    ...mapState({
      profile: (state) => state.profile.profile.data,
      userSwapSent: (state) => state.profile.userSwapSent,
      userSwapReceived: (state) => state.profile.userSwapReceived,
      userObjects: (state) => state.profile.userObjects,
      allSwapstate: (state) => state.swap.allSwapstate,
    }),
    isUserConnected() {
      return this.profile ? true : false;
    },
    getIndexOfTab() {
      switch (this.$route.query.tab) {
        case "objects":
          return { slug: "objects", index: 0 };
          break;
        case "sentswaps":
          return { slug: "sentswaps", index: 1 };
          break;
        case "receivedswaps":
          return { slug: "receivedswaps", index: 2 };
          break;
        default:
          return { slug: "objects", index: 0 };
      }
    },
    changeRouteQuery(slug) {
      this.$route.query.tab = slug;
    },
  },
  watch: {
    $route(to, from) {
      // react to route changes...
    },
  },
  methods: {
    ...mapActions({
      fetchUserObjects: "profile/fetchUserObjects",
      fetchAllSwapstate: "swap/fetchAllSwapstate",
      updateSwap: "swap/updateSwap",
    }),
    userSwapByState(array, state) {
      return array.filter((item) => item.swap_state.slug == state);
    },
    displaySwapPopup(swap, sent, received) {
      this.swapupPopup = {
        isDisplayed: true,
        swap: swap,
        isSentSwap: sent,
        isReceivedSwap: received,
      };
    },
    getSelectedTab(value) {
      console.log(value);
      this.$router.replace({ query: { tab: value } }).catch(() => {});
    },
    changeSwapState(response, swap) {
      const swapstateId = this.allSwapstate.find(
        (swapstate) => swapstate.slug == response
      )._id;
      if (response != "canceled") {
        console.log(swap);
        const datas = {
          id: swap._id,
          payload: {
            swap_state: swapstateId,
          },
        };
        this.isReponseAccepted = true;

        console.log(datas);
        this.updateSwap(datas);
      } else {
        //TODO : delete swap
        console.log("delete swap");
      }
      //TODO : slice array
      this.isResponseSent = true;
      this.responseType = response;
    },
    closePopup() {
      this.swapupPopup.isDisplayed = false;
      this.isResponseSent = false;
    },
  },
  mounted() {
    this.openedTab = this.$route.query.tab;
    this.fetchUserObjects();
    this.fetchAllSwapstate();
  },
};
</script>

<style lang="scss">
.profile {
  &-top {
    background-color: $lightpurple;
    padding: 50px 0px;
    color: $white;

    p {
      font-size: 18px;
    }
  }

  &-btns {
    width: 100%;

    & > * {
      margin-bottom: 20px;
    }
  }

  &-bottom {
    margin-top: 60px;

    @media screen and (max-width: $md) {
      margin-top: 30px;
      .btn-actions {
        max-width: 80%;
        margin: 30px auto;

        a {
          margin-bottom: 10px;
        }
      }
    }

    hr {
      margin-top: 30px;
      margin-bottom: 30px;
    }

    .tabs-container {
      margin-top: 60px;
    }
  }

  &-objects {
    &_title {
      margin-bottom: 30px;

      h2 {
        margin-bottom: 0;
      }
    }
  }

  &-photo {
    height: 150px;
    width: 150px;
    border-radius: 100%;
    background-color: lightgrey;
  }

  .addbutton-container {
    position: sticky;
    bottom: 20px;
    left: 80%;
    display: inline-block;
  }

  .swappopup {
    &-validation {
      h3 {
       color:white
      }
    }
  }
}

@media screen and (max-width: $sm) {
  .profile {
    &-top {
      padding: 30px 0;
      p {
        font-size: 18px;
        margin-bottom: 10px;
      }
    }
  }
}
</style>
