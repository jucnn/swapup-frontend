<template>
  <div class="objects-feed">
    <div class="objects-container container">
      <h1>Tous les objets</h1>
      <div class="row">
        <div class="d-md-block d-none">
          <Filters />
        </div>
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
import Filters from "@/components/Filters";

export default {
  name: "Index",
  data() {
    return {
      othersObjects: [],
    };
  },
  components: {
    ObjectCard,
    Filters,
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
.objects-feed {
  position: relative;
}
.objects-container {
  margin-top: 80px;
}
</style>
