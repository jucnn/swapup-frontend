<template>
  <div class="profile">
    <div v-if="profile">
      <div class="profile-top">
        <div class="container">
          <div class="row">
            <div class="col-4 container">
              <div class="row justify-content-center">
                <div class="profile-photo">
                  <!-- <img src="" alt="" /> -->
                </div>
              </div>
            </div>
            <div class="col-8">
              <p>
                <b>{{ profile.username }}</b>
                <br />{{ profile.address }}
              </p>
              <p>
                Membre depuis le
                {{ new Date(profile.creationDate).toLocaleDateString() }}
              </p>
            </div>
          </div>
          <div class="row">
            <div class="profile-btns col-12 col-sm-4">
              <router-link
                class="button button--purple"
                :to="{ name: 'objects.create' }"
                >Modifier mon profil</router-link
              >
              <ButtonLogout />
            </div>
          </div>
        </div>
      </div>
      <div class="profile-bottom container">
        <div class="container">
          <div class="row justify-content-between">
            <p>{{ profile.email }}</p>
            <p>{{ profile.telephone }}</p>
          </div>
        </div>
        <p>{{ profile.description }}</p>
        <div class="tabs-container">
          <Tabs>
            <Tab title="Mes objets">
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
                      class="objects-item col-6 col-lg-4"
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
            <Tab title="Mes swaps envoyés">
              <div class="profile-swap">
                <h2 class="col">Mes swaps envoyés</h2>
                <div v-for="swapSent in userSwapSent" :key="swapSent._id">
                  <p>
                    {{ swapSent }}
                  </p>
                </div>
              </div>
            </Tab>
            <Tab title="Mes swaps reçus">
              <div class="profile-swap">
                <h2 class="col">Mes swaps reçus</h2>
                <div
                  v-for="swapRecieved in userSwapRecieved"
                  :key="swapRecieved._id"
                >
                  <p>
                    {{ swapRecieved }}
                  </p>
                </div>
              </div>
            </Tab>
          </Tabs>
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
import Tabs from "@/components/ui/Tabs";
import Tab from "@/components/ui/Tab";
import ObjectCard from "@/components/object/ObjectCard";

export default {
  name: "Profile",
  components: {
    Button,
    AddButton,
    ObjectCard,
    ButtonLogout,
    Tabs,
    Tab,
  },
  data() {
    return {
      /*  userObjects: [], */
    };
  },

  computed: {
    ...mapState({
      profile: (state) => state.profile.profile.data,
      userSwapSent: (state) => state.profile.userSwapSent,
      userSwapRecieved: (state) => state.profile.userSwapReceived,
      userObjects: (state) => state.profile.userObjects,
    }),
  },
  methods: {
    ...mapActions({
      fetchUserObjects: "profile/fetchUserObjects",
    }),
  },
  mounted() {
    this.fetchUserObjects();
  },
};
</script>

<style lang="scss">
.profile {
  &-top {
    background-color: $lightpurple;
    padding: 60px 0;
    color: $white;

    p {
      font-size: 22px;
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
    height: 100px;
    width: 100px;
    border-radius: 100%;
    background-color: lightgrey;
    margin-bottom: 60px;
  }

  .addbutton-container {
    position: sticky;
    bottom: 20px;
    left: 80%;
    display: inline-block;
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
