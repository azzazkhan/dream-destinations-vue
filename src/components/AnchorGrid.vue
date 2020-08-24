<template>
  <div class="AnchorGridComponent">
    <h2 class="title mb-2">Lorem title goes here</h2>
    <p class="description mt-0 text-muted">
      <slot name="description"></slot>
    </p>
    <ul v-if="links" class="links">
      <li v-for="(link, index) in links" :key="index">
        <a :href="link.url ? link.url : 'javascript:void(0)'" v-text="link.text"></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AnchorGrid",
  props: {
    links: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss" src="@/assets/scss/components/anchorGrid.scss"></style>
