<template>
  <div class="col-12 col-md-6 col-lg-4 mb-4">
    <div
      class="CategoryCardComponent rounded shadow"
      :style="{
	  'background-image': 'url(\'' + require(`@/assets/img/${image}`) + '\')'
  }"
    >
      <h3 class="text-white" v-if="title" v-text="title"></h3>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryCard",
  props: {
    title: String,
    image: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
div {
  background-position: center;
  background-size: cover;
  height: 300px;
  width: 100%;
}
</style>