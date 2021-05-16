<template>
  <header :class="windowTop > 200 ? 'small-header' : ''">
    <div class="container">
      <div class="row align-items-center justify-content-between">
        <div class="header-logo col-xs-12 col-md-3">
          <div class="menu-responsive_container d-md-none">
            <MenuResponsiveButton
              class="menu-responsive_btn"
              @clicked="isResponsiveMenuOpened = true"
            />
            <transition name="slide-fade-left">
              <MenuResponsive
                :profileMenuResponsive="profileMenuResponsive"
                class="menu-responsive_container"
                v-if="isResponsiveMenuOpened"
                @clicked="isResponsiveMenuOpened = false"
              />
            </transition>
          </div>
          <router-link :to="{ path: '/' }">
            <svg
              id="Logo_-_Desktop"
              data-name="Logo - Desktop"
              xmlns="http://www.w3.org/2000/svg"
              width="179.601"
              height="49.864"
              viewBox="0 0 179.601 49.864"
            >
              <g
                id="Groupe_53"
                data-name="Groupe 53"
                transform="translate(125.151 44.932)"
              >
                <path
                  id="Tracé_65"
                  data-name="Tracé 65"
                  d="M7.2.39c3.81,0,6.33-2.04,6.33-5.1,0-3.51-3.27-4.08-5.4-4.38-1.38-.21-2.46-.33-2.46-1.23,0-.6.45-1.17,1.56-1.17.9,0,1.5.39,1.62,1.08h4.38c-.09-2.67-2.37-4.8-6.06-4.8s-6.06,2.1-6.06,5.1c0,3.57,3.36,4.08,5.4,4.38,1.38.21,2.46.3,2.46,1.29,0,.63-.45,1.11-1.83,1.11-1.23,0-1.8-.39-1.83-1.17H.87C.93-1.65,3.39.39,7.2.39Zm15.03,0a5.868,5.868,0,0,0,4.98-2.37A5.83,5.83,0,0,0,32.19.39c3.6,0,6.36-2.1,6.36-6.87v-8.34h-4.5v8.34c0,1.98-.96,2.67-2.31,2.67-1.32,0-2.28-.69-2.28-2.67v-8.34h-4.5v8.34c0,1.98-.96,2.67-2.28,2.67-1.35,0-2.31-.69-2.31-2.67v-8.34h-4.5v8.34C15.87-1.71,18.63.39,22.23.39Zm25.83,0a4.715,4.715,0,0,0,4.59-2.85V0h4.14V-7.26c0-4.86-3.24-7.95-7.89-7.95a7.614,7.614,0,0,0-8.01,7.98A7.209,7.209,0,0,0,48.06.39Zm.81-4.2a3.341,3.341,0,0,1-3.42-3.6,3.341,3.341,0,0,1,3.42-3.6,3.341,3.341,0,0,1,3.42,3.6A3.341,3.341,0,0,1,48.87-3.81ZM59.73,6.33h4.5V-1.62A4.94,4.94,0,0,0,68.43.39a7.2,7.2,0,0,0,7.2-7.62,7.614,7.614,0,0,0-8.01-7.98c-4.53,0-7.89,2.97-7.89,7.95ZM67.65-3.81a3.341,3.341,0,0,1-3.42-3.6,3.341,3.341,0,0,1,3.42-3.6,3.341,3.341,0,0,1,3.42,3.6A3.341,3.341,0,0,1,67.65-3.81ZM85.29.39c4.38,0,7.32-2.55,7.32-7.53v-7.68h-4.5v7.68c0,2.34-1.14,3.33-2.82,3.33s-2.82-.99-2.82-3.33v-7.68h-4.5v7.68C77.97-2.13,80.91.39,85.29.39ZM95.55,6.33h4.5V-1.62a4.94,4.94,0,0,0,4.2,2.01,7.2,7.2,0,0,0,7.2-7.62,7.614,7.614,0,0,0-8.01-7.98c-4.53,0-7.89,2.97-7.89,7.95Zm7.92-10.14a3.341,3.341,0,0,1-3.42-3.6,3.341,3.341,0,0,1,3.42-3.6,3.341,3.341,0,0,1,3.42,3.6A3.341,3.341,0,0,1,103.47-3.81Z"
                  transform="translate(-57 -10)"
                  fill="#faf9f9"
                />
              </g>
              <g
                id="Groupe_54"
                data-name="Groupe 54"
                transform="translate(0 0)"
              >
                <path
                  id="Tracé_36"
                  data-name="Tracé 36"
                  d="M71.506,85.522h-17.6a7.9,7.9,0,0,1-7.873-7.873v-17.6a7.9,7.9,0,0,1,7.873-7.873h17.6a7.9,7.9,0,0,1,7.873,7.873v17.6a7.9,7.9,0,0,1-7.873,7.873"
                  transform="translate(-46.033 -35.657)"
                  fill="#ffa8ae"
                />
                <path
                  id="Tracé_35"
                  data-name="Tracé 35"
                  d="M103.328,44.844A17.844,17.844,0,1,1,85.484,27a17.844,17.844,0,0,1,17.844,17.844"
                  transform="translate(-53.463 -27)"
                  fill="#b3d7f9"
                />
                <path
                  id="Tracé_37"
                  data-name="Tracé 37"
                  d="M80.786,52.333H67.537c-.032.438-.054.88-.054,1.326A17.844,17.844,0,0,0,85.327,71.5c.447,0,.888-.022,1.326-.054V58.2a5.883,5.883,0,0,0-5.866-5.866"
                  transform="translate(-53.409 -35.712)"
                  fill="#a189db"
                />
              </g>
            </svg>
          </router-link>
        </div>
        <div class="header-search col-xs-12 col-md-6 container">
          <div class="row align-items-center">
            <SearchBar class="col col-10 col-md-12" @search="getSearchValue" />
            <FiltersButton class="fitlers-btn_container col-2 d-md-none" @clicked="isFiltersResponsiveOpened = true"/>
            <transition name="slide-fade-right">
              <FiltersResponsive
                class="filters-responsive_container"
                v-if="isFiltersResponsiveOpened"
                @clicked="isFiltersResponsiveOpened = false"
                v-on="$listeners"
              />
            </transition>
          </div>
        </div>
        <div class="header-connexion_container col col-md-3 d-none d-md-block">
          <div class="header-connexion" v-if="profile == undefined">
            <router-link :to="{ name: 'login' }">Se connecter</router-link>
            <span>|</span>
            <router-link :to="{ name: 'register' }">S'inscrire</router-link>
          </div>
          <div class="header-profile" v-else>
            <p @click="isProfileMenuOpened = !isProfileMenuOpened">
              {{ profile.username }}
            </p>
            <transition name="slide-down">
              <MenuDropdown
                v-if="isProfileMenuOpened"
                :items="profileMenuDropdown"
                @handleClick="closeMenuDropdown()"
              />
            </transition>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { mapState } from "vuex";

import SearchBar from "@/components/ui/SearchBar";
import MenuResponsiveButton from "@/components/menu/MenuResponsiveButton";
import MenuResponsive from "@/components/menu/MenuResponsive";
import MenuDropdown from "@/components/menu/MenuDropdown";
import FiltersButton from "@/components/filters/FiltersButton";
import FiltersResponsive from "@/components/filters/FiltersResponsive";

export default {
  name: "TheHeader",
  components: {
    SearchBar,
    MenuResponsiveButton,
    MenuResponsive,
    FiltersButton,
    MenuDropdown,
    FiltersResponsive
  },
  data() {
    return {
      windowTop: 0,
      isResponsiveMenuOpened: false,
      isProfileMenuOpened: false,
      isFiltersResponsiveOpened: false,
      profileMenuDropdown: [
        { label: "Mon profile", url: "profile" },
        { label: "Messagerie", url: "index" },
        /*      { label: "Mes swaps envoyés", url: "profile", tab: "sent-swaps" },
        { label: "Mes swaps reçus", url: "profile", tab: "received-swaps" }, */
      ],
      profileMenuResponsive: {
        discover: [
          { label: "Comment ça marche ?", url: "index" },
          { label: "FAQ", url: "index" },
          { label: "A propos", url: "index" },
        ],
        notConnected: [
          { label: "Crée ton compte", url: "register" },
          { label: "Connecte toi", url: "login" },
        ],
        connected: [
          { label: "Profil", url: "profile" },
          { label: "Favoris", url: "profile" },
          { label: "Notifications", url: "profile" },
          {
            label: "Swaps envoyés",
            url: "profile",
            query: { tab: "sentswaps" },
          },
          {
            label: "Swaps reçus",
            url: "profile",
            query: { tab: "receivedswaps" },
          },
        ],
      },
    };
  },
  computed: {
    ...mapState({
      profile: (state) => state.profile.profile.data,
    }),
  },
  methods: {
    getSearchValue(value) {
      console.log(value);
    },
    onScroll(e) {
      this.windowTop = e.target.documentElement.scrollTop;
    },
    closeMenuDropdown() {
      this.isProfileMenuOpened = false;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },

  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
};
</script>

<style lang="scss">
header {
  position: fixed;
  top: 0;
  background-color: $lightpurple;
  padding: 25px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  z-index: 100;
  transition: all 0.3s cubic-bezier(0.33, 1, 0.68, 1);

  &.small-header {
    padding: 12px 0;
  }

  .dropdown {
    margin-top: 10px;
  }
}

.menu-responsive {
  &_container {
    z-index: 1000;
  }
  &_btn {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 30px;
  }
}

.fitlers-btn_container {
  svg {
    max-width: 25px;
    padding-top: 5px;
  }
}

.header {
  /*  &-container {
  } */

  &-logo {
    svg {
      max-width: 100%;
    }
  }

  &-search {
    width: 40%;

    .search-bar {
      padding-right: 0;
    }
  }

  &-connexion {
    background-color: $purple;
    border-radius: $mainborderradius;
    padding: 5px 15px;
    color: $white;
    display: inline-block;

    &_container {
      text-align: right;
    }

    span {
      margin: 0 10px;
    }

    a {
      color: $white;
      text-decoration: none;
      font-weight: $semibold;
      font-size: 14px;
    }
  }

  &-profile {
    p {
      color: $white;
      margin-bottom: 0;
      font-weight: $semibold;
      cursor: pointer;
    }
  }
}

@media screen and (max-width: $md) {
  .header {
    &-logo {
      text-align: center;

      svg {
        max-width: 140px;
      }
    }
    &-search {
      margin-top: 10px;
    }
  }
}
</style>
