<template>
  <div class="">
    <div class="object-card">
      <router-link :to="{ name: 'objects.show', params: { id: object._id } }">
        <div class="object-card_img">
          <img :src="object.image" alt="" />
        </div>
        <div class="object-card_description">
          <Tag :category="object.category.label" />
          <div
            class="container-fluid "
          >
            <div class="row justify-content-between align-items-center">
              <h3 class="col-12 col-md-9">{{ object.title }}</h3>
              <p class="col-12 col-md-3">{{ object.price }}€</p>
            </div>
          </div>
          <p>{{ object.seller.address }}</p>
          <p>
            Don à <i>{{ object.association.label }}</i>
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
  border-radius: $mainborderradius;
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
    padding: 30px 20px 20px 20px;
    position: relative;

    .container-fluid {
      padding: 0;
    }

    h3 {
      font-size: 18px;
      line-height: 22px;
      font-weight: $semibold;
      margin-bottom: 10px;
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
