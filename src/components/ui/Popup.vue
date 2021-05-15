<template>
  <div>
    <div class="popup-overlay" @click="$emit('closeClick')"></div>
    <div class="popup-container" :class="isValidate ? 'popup-validation' : ''">
      <div class="popup-close" @click="$emit('closeClick')">
        <svg
          id="close"
          xmlns="http://www.w3.org/2000/svg"
          width="15"
          height="14.999"
          viewBox="0 0 15 14.999"
        >
          <g id="Groupe_41" data-name="Groupe 41">
            <path
              id="Tracé_42"
              data-name="Tracé 42"
              d="M9.152,7.515,14.76,1.907a.822.822,0,0,0,0-1.16L14.269.256a.822.822,0,0,0-1.16,0L7.5,5.864,1.892.256a.822.822,0,0,0-1.16,0L.24.747a.821.821,0,0,0,0,1.16L5.848,7.515.24,13.124a.823.823,0,0,0,0,1.16l.492.491a.822.822,0,0,0,1.16,0L7.5,9.167l5.608,5.608a.814.814,0,0,0,.58.24h0a.814.814,0,0,0,.58-.24l.491-.491a.823.823,0,0,0,0-1.16Z"
              transform="translate(0 -0.016)"
              fill="#faf9f9"
            />
          </g>
        </svg>
      </div>
      <div class="popup-content">
        <div v-if="isUserConnected">
          <slot></slot>
        </div>
        <ConnexionPopup v-else />
      </div>
    </div>
  </div>
</template>

<script>
import ConnexionPopup from "@/components/connexion/ConnexionPopup";

export default {
  components: {
    ConnexionPopup,
  },
  props: {
    isUserConnected: Boolean,
    isValidate: { type: Boolean, default: false },
  },
};
</script>

<style lang="scss">
.popup {
  &-overlay {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    background-color: rgba(0, 0, 0, 0.4);
    z-index: 100;
  }
  &-container {
    position: fixed;
    background-color: $white;
    top: 55%;
    left: 50%;
    width: 40%;
    max-height: 80vh;
    overflow: auto;
    transform: translate(-50%, -50%);
    border-radius: $mainborderradius;
    box-shadow: $boxshadow;
    z-index: 200;
  }

  &-close {
    background-color: $lightpurple;
    cursor: pointer;
    display: inline-block;
    position: absolute;
    right: 0;
    padding: 10px 15px;
    border-top-right-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  &-content {
    padding: 60px 20px 20px 20px;
    text-align: center;

    p:last-child {
      margin-bottom: 0;
    }
  }

  &-validation {
    background-color: $green;

    .popup-close {
      background-color: $lightgreen;
    }
  }

  &-refusal {
    background-color: $green;

    .popup-close {
      background-color: $lightgreen;
    }
  }
}

@media screen and (max-width: $xl) {
  .popup {
    &-container {
      width: 60%;
    }
  }
}

@media screen and (max-width: $sm) {
  .popup {
    &-container {
      width: 90%;
    }
  }
}
</style>