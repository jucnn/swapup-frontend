<template>
  <div class="object-card">
    <router-link :to="{ name: 'objects.show', params: { id: object._id } }">
      <div class="object-card_img">
        <img :src="object.image" alt="" />
      </div>
      <div class="object-card_description">
        <p>{{ object.category }}</p>
        <h3>{{ object.title }}</h3>
        <p>{{ object.price }}€</p>
        <p>{{ object.seller.address }}</p>
        <p>
          Don : {{ object.donationPercentage }}% à "{{
            object.association.name
          }}"
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
import Tag from "@/components/ui/Tag";

export default {
  props: {
    object: Object,
  },
  components: {
    Tag,
  },
};
</script>

<style lang="scss">
.object-card {
  background-color: white;
  box-shadow: $boxshadow;
  border-radius: 10px;

  a {
    text-decoration: none;
  }

  &_img {
    background-color: $lightgrey;
    height: 200px;
    text-align: center;

    img {
      height: 100%;
    }
  }

  &_description {
    padding: 20px;
    h3 {
      font-size: 22px;
      font-weight: $semibold;
      margin-bottom: 10px;
    }

    p {
      margin-top: 0;
      margin-bottom: 10px;
    }
  }
}
</style>