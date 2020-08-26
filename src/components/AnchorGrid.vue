<template>
  <div class="AnchorGridComponent">
    <h2 class="base-heading mb-2" v-text="title"></h2>
    <p class="description mt-0 text-muted">
      <slot name="description"></slot>
    </p>
    <ul v-if="links.length > 0" class="links">
      <li v-for="(link, index) in links" :key="index">
        <a href="javascript:void(0)" v-text="link"></a>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "AnchorGrid",
    props: {
      title: {
        type: String,
        default: "Lorem title goes here",
      },
      links: {
        type: Array,
        required: true,
      },
    },
  };
</script>

<style
  scoped
  lang="scss"
  src="@/assets/scss/components/anchorGrid.scss"
></style>
