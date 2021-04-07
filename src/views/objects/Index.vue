<template>
  <div>
    <h1>Tous les objets</h1>
    <div class="objects-container container">
      <div class="row">
        <ObjectCard
          class="objects-item"
          v-for="object in othersObjects"
          :key="object.id"
          :object="object"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import ObjectCard from "@/components/object/ObjectCard";

export default {
  name: "Index",
  data() {
    return {
      othersObjects: [],
    };
  },
  components: {
    ObjectCard,
  },
  computed: {
    ...mapState({
      allObjects: (state) => state.objects.allObjects,
      profile: (state) => state.profile.profile.data,
    }),
  },
  methods: {
    ...mapActions({
      fetchAllObjects: "objects/fetchAllObjects",
      fetchProfile: "profile/fetchProfile",
    }),
  },
  async mounted() {
    await this.fetchProfile();
    await this.fetchAllObjects(this.$route.query);
    this.othersObjects = this.allObjects.filter(
      (object) => object.seller_id !== this.profile._id
    );
  },
};
</script>

<style lang="scss">
.objects-container {
  /*   display: flex;
  column-gap: 20px;

  .objects-item {
    flex: 1 1 0;
    max-width: 320px;
  } */
}
</style>