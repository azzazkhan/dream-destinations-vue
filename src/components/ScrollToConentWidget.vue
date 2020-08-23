<template>
  <a href="javascript:void(0)" :class="{'invert': invert}"></a>
</template>

<script>
export default {
  name: "ScrollToContentWidget",
  props: {
    invert: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style
  scoped
  lang="scss"
  src="@/assets/scss/components/scrollToContentWidget.scss"
></style>
