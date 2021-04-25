<template>
  <div class="menu-responsive">
    <span class="menu-responsive_close" @click="$emit('clicked')">fermer</span>
    <div class="menu-responsive_content">
      <div v-if="profile">
        <div class="menu-responsive_account">
          <!-- If connected -->
          <h2>Mon compte</h2>
          <div>
            <p><router-link :to="{ path: 'profile' }">Profil</router-link></p>
            <p><router-link :to="{ path: 'index' }">Favoris</router-link></p>
            <p>
              <router-link :to="{ path: 'index' }">Notifications</router-link>
            </p>
            <p>
              <router-link :to="{ path: 'index' }">Swaps envoyés</router-link>
            </p>
            <p>
              <router-link :to="{ path: 'index' }">Swaps reçus</router-link>
            </p>
          </div>
        </div>
        <hr />
      </div>
      <!-- If not connected -->
      <div class="menu-responsive_connect" v-else>
        <p><router-link :to="{ path: 'index' }">Connecte toi</router-link></p>
        <hr />
      </div>
      <div class="menu-responsive_discover">
        <h2>Découvrir</h2>
        <div>
          <p>
            <router-link :to="{ path: 'index' }"
              >Comment ça marche ?</router-link
            >
          </p>
          <p><router-link :to="{ path: 'index' }">FAQ</router-link></p>
          <p><router-link :to="{ path: 'index' }">A propos</router-link></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      profile: (state) => state.profile.profile.data,
    }),
  },
};
</script>

<style lang="scss">
.menu-responsive {
  text-align: left;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  z-index: 200;
  background-color: $white;
  padding: 20px;

  hr {
    margin: 40px 0;
  }

  p {
    font-size: 16px;
  }

  &_close {
    position: absolute;
    right: 10%;
  }

  &_content {
    margin-top: 20px;
  }
}
</style>
