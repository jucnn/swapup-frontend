<template>
  <div class="profile-edit container">
    <h1>Modifier mon profil</h1>
    <form @submit.prevent="edit" class="form" v-if="profile">
      <div>
        <label for="description">Description</label> <br />
        <textarea name="description" id="description" v-model="profile.description" maxlength="300"></textarea>
      </div>

      <button class="button button--green" type="submit" value="save">
        Sauvegarder
      </button>
    </form>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState({
      profile: (state) => state.profile.profile.data,
    }),
  },
  methods: {
    ...mapActions({
      updateProfile: "profile/updateProfile",
    }),
    edit() {
      const datas = {
        id: this.profile._id,
        payload: {
          username: this.profile.username,
          description: this.profile.description,
        },
      };
      this.updateProfile(datas);
      this.$router.go(-1);
    },
  },
  mounted() {},
};
</script>

<style lang="scss">
.profile-edit {
  margin-top: 50px;

  form {
      input, textarea {
          margin-top: 20px;
      }
      & > div {
          margin-bottom: 40px;
      }
  }
}
</style>