<template>
  <div>
    <h1>User</h1>
    <div v-if="user">
      <p>{{ user.username }}</p>
      <p>{{ user.description }}</p>
      <p>{{ user.address }}</p>

      <h3>Objets de {{ user.username }}</h3>
      <ul v-for="object in userObjects" :key="object._id">
        <li>
          <span>
            <router-link
              :to="{ name: 'objects.show', params: { id: object._id } }"
              >{{ object.title }}</router-link
            >
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  name: "Index",
  data() {
    return {
      userObjects: [],
    };
  },
  computed: {
    ...mapState({
      user: (state) => state.users.user,
      allObjects: (state) => state.objects.allObjects,
    }),
  },
  methods: {
    ...mapActions({
      fetchUser: "users/fetchUser",
      fetchAllObjects: "objects/fetchAllObjects",
    }),
  },
  async mounted() {
    await this.fetchUser(this.$route.params.id);
    await this.fetchAllObjects();
    this.userObjects = this.allObjects.filter(
      (object) => object.seller_id == this.user._id
    );
  },
};
</script>