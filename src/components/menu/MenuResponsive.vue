<template>
  <div class="menu-responsive">
    <span class="menu-responsive_close" @click="$emit('clicked')">fermer</span>
    <div class="menu-responsive_content">
      <div v-if="profile">
        <div class="menu-responsive_account">
          <!-- If connected -->
          <h2>Mon compte</h2>
          <div>
            <p
              v-for="(item, index) in profileMenuResponsive.connected"
              :key="index"
              @click="$emit('clicked')"
            >
              <router-link :to="{ name: item.url, query: item.query }">{{
                item.label
              }}</router-link>
            </p>
          </div>
        </div>
        <hr />
      </div>
      <!-- If not connected -->
      <div class="menu-responsive_connect" v-else>
        <p
          v-for="(item, index) in profileMenuResponsive.notConnected"
          :key="index"
          @click="$emit('clicked')"
        >
          <router-link :to="{ name: item.url }">{{ item.label }}</router-link>
        </p>

        <hr />
      </div>
      <div class="menu-responsive_discover">
        <h2>Découvrir</h2>
        <div>
          <p
            v-for="(item, index) in profileMenuResponsive.discover"
            :key="index"
            @click="$emit('clicked')"
          >
            <router-link :to="{ name: item.url }">{{ item.label }}</router-link>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  props: {
    profileMenuResponsive: {
      type: Object,
      default: () => {},
    },
  },
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
    margin-top: 40px;
  }
}
</style>
