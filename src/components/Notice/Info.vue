<template>
  <div class="InfoNoticeComponent notice-info">
    <span class="icon">
      <svg
        focusable="false"
        data-id="SVG_INFO__24"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <g fill="none" fill-rule="evenodd">
          <path fill="currentColor" stroke="none" d="M11 8a1 1 0 1 1 2 0 1 1 0 0 1-2 0" />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 16.2v-5.1m-9.3.9a9.3 9.3 0 1 1 18.6 0 9.3 9.3 0 0 1-18.6 0z"
          />
        </g>
      </svg>
    </span>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "InfoNotice",
};
</script>

<style scoped lang="scss" src="@/assets/scss/components/infoNotice.scss"></style>