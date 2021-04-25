<template>
  <div class="swappopup-container">
    <h3>Lequel de tes objets veux-tu échanger ?</h3>
    <div
      v-for="object in userObjects"
      :key="object.id"
      class="swappopup-object_container"
    >
      <input
        :id="object._id"
        type="radio"
        :name="object._id"
        :value="object._id"
        v-model="objectSelected"
      />
      <label :for="object._id">
        <div
          :class="
            objectSelected == object._id
              ? 'swappopup_object-checked'
              : ''
          "
        ></div>
        <div class="swappopup-object">
          <div class="container">
            <div class="row align-items-center">
              <div class="swappopup-object_image col-6">
                <img :src="object.image" alt="" />
              </div>
              <div class="swappopup-object_details col-6">
                <Tag :category="object.category.label" />
                <h4>{{ object.title }}</h4>
              </div>
            </div>
          </div>
        </div>
      </label>
    </div>
    <button :disabled="objectSelected == null" class="button button--green" @click="$emit('handleClick', objectSelected)">Valider</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

import Tag from "@/components/ui/Tag";

export default {
  components: {
    Tag,
  },
  data() {
    return {
      objectSelected: null,
    };
  },
  computed: {
    ...mapState({
      profile: (state) => state.profile.profile.data,
      userObjects: (state) => state.profile.userObjects,
    }),
  },
  methods: {
    ...mapActions({
      fetchUserObjects: "profile/fetchUserObjects",
    }),
  },
  mounted() {
    this.fetchUserObjects();
  },
};
</script>

<style lang="scss">
.swappopup {
  &-container {
    h3 {
      font-weight: $semibold;
    }

    input {
      display: none;
    }

    button {
      margin-top: 20px;
    }
  }

  &-object {
    margin-bottom: 10px;
    box-shadow: $boxshadow;
    border-radius: $mainborderradius;
    padding: 15px;
    cursor: pointer;

    label {
      display: block;
    }

    &_container {
      position: relative;
    }

    &_image {
      height: 100px;
      background-color: $grey;
      border-radius: $mainborderradius;
    }

    &_details {
      text-align: left;

      h4 {
        font-weight: $semibold;
        margin-bottom: 0;
        margin-top: 10px;
      }
    }
  }
  &_object-checked {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(164, 145, 211, 0.7);
    border-radius: $mainborderradius;
    z-index: 100;
    transition: 200ms;
    cursor: pointer;

    &::before {
      content: url("../../assets/img/check.png");
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
</style>