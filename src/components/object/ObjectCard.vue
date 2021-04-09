<template>
  <div class="col col-sm-4 col-xs-12">
    <div class="object-card">
      <router-link :to="{ name: 'objects.show', params: { id: object._id } }">
        <div class="object-card_img">
          <img :src="object.image" alt="" />
        </div>
        <div class="object-card_description">
          <Tag :category="object.category" />
          <div class="d-flex justify-content-between align-items-center">
            <h3>{{ object.title }}</h3>
            <p>{{ object.price }}€</p>
          </div>
          <p>{{ object.seller.address }}</p>
          <p>
            Don à <i>{{ object.association }}</i>
          </p>
        </div>
      </router-link>
    </div>
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
  overflow: hidden;
  margin-bottom: 30px;

  a {
    text-decoration: none;
  }

  &_img {
    background-color: $lightgrey;
    height: 160px;
    text-align: center;

    img {
      height: 100%;
    }
  }

  &_description {
    padding: 20px;
    position: relative;

    h3 {
      font-size: 22px;
      line-height: 22px;
      font-weight: $semibold;
      margin-bottom: 10px;
      margin-top: 10px;
    }

    p {
      margin-top: 0;
      margin-bottom: 0px;
      font-weight: $regular;
    }

    .tag {
      position: absolute;
      top: 0;
      transform: translateY(-50%);
    }
  }
}
</style>