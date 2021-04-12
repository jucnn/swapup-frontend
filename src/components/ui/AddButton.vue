<template>
  <div>
    <div class="add-button" :style="{ backgroundColor: color }">
      <router-link
        class="button button--purple"
        :to="{ name: 'objects.create' }"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17.242"
          height="18.966"
          viewBox="0 0 17.242 18.966"
        >
          <g
            id="Groupe_57"
            data-name="Groupe 57"
            transform="translate(-302.705 -606.705)"
          >
            <line
              id="Ligne_2"
              data-name="Ligne 2"
              y2="18.966"
              transform="translate(311.326 606.705)"
              fill="none"
              stroke="#faf9f9"
              stroke-width="1"
            />
            <line
              id="Ligne_3"
              data-name="Ligne 3"
              x1="17.242"
              transform="translate(302.705 616.188)"
              fill="none"
              stroke="#faf9f9"
              stroke-width="1"
            />
          </g>
        </svg>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: "#7A5EBF",
    },
  },
};
</script>

<style lang="scss">
.add-button {
  height: 50px;
  width: 50px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>