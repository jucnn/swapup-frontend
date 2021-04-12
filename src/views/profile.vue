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
                <router-link
                  class="button button--purple"
                  :to="{ name: 'objects.create' }"
                  >Modifier mon profil</router-link
                >
              </div>
            </div>
            <div class="col-8">
              <p>
                <b>{{ profile.username }}</b>
              </p>
              <p>{{ profile.address }}</p>
              <p>
                Membre depuis le
                {{ new Date(profile.creationDate).toLocaleDateString() }}
              </p>
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
        <hr class="row" />
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
            <div class="row">
              <ObjectCard
                class="objects-item"
                v-for="object in userObjects"
                :key="object._id"
                :object="object"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <AddButton class="d-sm-none" />
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import Button from "@/components/ui/Button";
import AddButton from "@/components/ui/AddButton";
import ObjectCard from "@/components/object/ObjectCard";

export default {
  name: "Profile",
  components: {
    Button,
    AddButton,
    ObjectCard,
  },
  data() {
    return {
      userObjects: [],
    };
  },

  computed: {
    ...mapState({
      profile: (state) => state.profile.profile.data,
      allObjects: (state) => state.objects.allObjects,
      allSwap: (state) => state.swap.allSwap,
    }),
  },
  methods: {
    ...mapActions({
      fetchProfile: "profile/fetchProfile",
      fetchAllObjects: "objects/fetchAllObjects",
      fetchAllSwap: "swap/fetchAllSwap",
    }),
  },
  async mounted() {
    await this.fetchProfile();
    await this.fetchAllObjects();
    await this.fetchAllSwap(this.$route.query);
    this.userObjects = this.allObjects.filter(
      (object) => object.seller._id == this.profile._id
    );
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

  &-bottom {
    margin-top: 60px;

    hr {
      margin-top: 30px;
      margin-bottom: 30px;
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
    height: 200px;
    width: 200px;
    border-radius: 100%;
    background-color: lightgrey;
    margin-bottom: 60px;
  }
}
</style>
