<template>
  <div class="container object-container">
    <BackButton />
    <div v-if="object" class="object">
      <div class="object_img">
        <img :src="object.image" alt="" />
      </div>
      <div class="object_seller box-white">
        <div v-if="object.seller._id == profile._id" class="object_btns-owner">
          <router-link
            :to="{ name: 'objects.edit' }"
            class="button button--purple"
            >Modifier</router-link
          >
          <router-link
            :to="{ name: 'objects.delete' }"
            class="button button--red"
            >Supprimer</router-link
          >
        </div>
        <div v-else>
          <p>
            Vendu par :
            <router-link
              :to="{ name: 'user.index', params: { id: object.seller._id } }"
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
              :to="{ name: 'user.index', params: { id: object.seller._id } }"
              >Profil du vendeur</router-link
            >
            <div class="object_btns-actions">
              <router-link
                :to="{ name: 'objects.create' }"
                class="button button--purple"
                >Swaper</router-link
              >
              <router-link
                :to="{ name: 'objects.create' }"
                class="button button--green"
                >Acheter</router-link
              >
            </div>
          </div>
        </div>
      </div>
      <div class="object_details box-white">
        <h2>{{ object.title }}</h2>
        <div class="object_criteria">
          <p><span>Prix :</span> {{ object.price }}€</p>
          <p><span>Etat :</span> {{ object.state }}</p>
          <p><span>Marque : </span>{{ object.brand }}</p>
          <p>
            <span>Association :</span> {{ object.association.name }} ({{
              object.association.type
            }})
          </p>
          <p>
            <span>Pourcentage du don :</span> {{ object.donationPercentage }}%
          </p>
        </div>
        <p>{{ object.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import BackButton from "@/components/ui/BackButton";

export default {
  name: "Index",
  components: {
    BackButton,
  },
  computed: {
    ...mapState({
      object: (state) => state.objects.object,
      profile: (state) => state.profile.profile.data,
    }),
  },
  methods: {
    ...mapActions({
      fetchObject: "objects/fetchObject",
      fetchProfile: "profile/fetchProfile",
    }),
  },
  async mounted() {
    await this.fetchProfile();
    await this.fetchObject(this.$route.params.id);
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

  &-container {
    margin-top: 80px;
  }

  &_img {
    border-radius: 10px;
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
</style>