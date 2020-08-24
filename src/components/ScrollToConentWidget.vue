<template>
  <a
    href="#main"
    class="ScrollToContentWidgetComponent"
    :class="{ invert: invert }"
    data-scroll="smooth"
  ></a>
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
