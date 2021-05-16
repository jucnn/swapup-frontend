<template>
  <div class="user-profile container">
    <div v-if="user">
      <div class="user-profile_presentation">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-5 col-sm-3">
              <div class="user-profile_photo"></div>
              <!--   <img src="" alt="" /> -->
            </div>
            <div class="user-profile_infos col-6">
              <h3>{{ user.username }}</h3>
              <p>{{ user.address }}</p>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="user-profile_description">
          <p>{{ user.description }}</p>
        </div>
      </div>

      <div class="container-fluid">
        <h3>{{ user.username }} a {{ objectsByUser.length }} objets</h3>
        <div class="row">
          <ObjectCard
            class="objects-item col-12 col-sm-6 col-lg-4"
            v-for="object in objectsByUser"
            :key="object._id"
            :object="object"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import ObjectCard from "@/components/object/ObjectCard";

export default {
  name: "Index",
  components: {
    ObjectCard,
  },
  data() {
    return {
      userObjects: [],
    };
  },
  computed: {
    ...mapState({
      user: (state) => state.users.user,
      objectsByUser: (state) => state.users.objectsByUser,
    }),
  },
  methods: {
    ...mapActions({
      fetchUser: "users/fetchUser",
      fetchObjectsByUser: "users/fetchObjectsByUser",
    }),
  },
  async mounted() {
    await this.fetchUser(this.$route.params.id);
    await this.fetchObjectsByUser(this.$route.params.id);
    /*    this.userObjects = this.allObjects.filter(
      (object) => object.seller._id == this.user._id
    ); */
  },
};
</script>

<style lang="scss">
.user-profile {
  &_presentation {
    background-color: white;
    box-shadow: $boxshadow;
    padding: 20px;
    border-radius: $mainborderradius;
    margin: 40px 0;
  }

  &_description {
    margin-bottom: 40px;
  }

  &_photo {
    height: 150px;
    width: 150px;
    border-radius: 100%;
    background-color: $lightgrey;

    @media screen and (max-width: $sm) {
      height: 100px;
      width: 100px;
    }
  }

  &_infos {
    @media screen and (max-width: $sm) {

      h3 {
        margin-bottom: 5px;
      }
    }
    & > p:nth-last-child(1) {
      margin-bottom: 0;
    }
  }
}
</style>