<template>
  <div class="BookingLocationItemComponent place dismiss-selection">
    <span class="icon">
      <svg
        v-if="place.type.toLowerCase() == 'airport'"
        focusable="false"
        data-id="SVG_PLANE__16"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
      >
        <g fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path
            d="M11.9 6.3l1.3 6.2c.1.5 0 1-.4 1.4l-.4.3-2.2-2.7m-.5-7.4L3.5 2.8c-.5-.1-1 0-1.4.4l-.3.4 2.7 2.2"
          />
          <path
            d="M6.1 11.5l.3 1.4c0 .5-.1 1-.5 1.3l-.3.4-1.7-2.5-2.5-1.7.4-.3c.3-.4.8-.5 1.3-.5l1.4.3 7.3-8a1.6 1.6 0 0 1 2.3 2.3l-8 7.3zm7.5-2.2l-.9 1m-6-8l-1 1"
          />
        </g>
      </svg>
      <svg
        v-if="place.type.toLowerCase() == 'city'"
        focusable="false"
        data-id="SVG_CITY__16"
        width="16"
        height="16"
        viewBox="0 0 16 16"
      >
        <g fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path
            d="M3.6 6.05h1.42M8.33 10.17H6.92M8.33 12.27H6.92M11.11 1v2.03M7.62 7.08V3.03h5.12c.83 0 1.5.67 1.5 1.5v10.04H7.62M7.62 14.57H2.5a1.5 1.5 0 0 1-1.5-1.5V5.1L4.31 2l1.56 1.46"
          />
          <path d="M4.31 14.57V8.29l6.62-2.24v8.52" />
        </g>
      </svg>
      <svg
        v-if="place.type.toLowerCase() == 'landmark'"
        focusable="false"
        data-id="SVG_CAMERA__16"
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
      >
        <g fill="none" fill-rule="evenodd">
          <path
            fill="currentColor"
            stroke="none"
            d="M12 6.9a.9.9 0 1 1 1.8 0 .9.9 0 0 1-1.8 0"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M1.7 2.7H3m-2 2h3.3l2.4-2H10l2.3 2h1.2c.8 0 1.5.6 1.5 1.5v7.1H2.5c-.8 0-1.5-.6-1.5-1.5V7"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M5.8 8.3a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0z"
          />
        </g>
      </svg>
      <svg
        v-if="place.type.toLowerCase() == 'region'"
        focusable="false"
        data-id="SVG_GLOBE__16"
        width="16px"
        height="16px"
        viewBox="0 0 16 16"
      >
        <g fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path
            d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zM1.4 10.33h13.2M1.4 5.67h13.2"
          />
          <path
            d="M6.62 14.63c-.77-1.35-1.29-3.79-1.29-6.58s.52-5.23 1.3-6.58M9.38 1.47c.77 1.35 1.29 3.79 1.29 6.58 0 2.8-.52 5.23-1.3 6.58"
          />
        </g>
      </svg>
    </span>
    <span class="name" v-text="place.name"></span>
    <span class="location" v-text="place.location"></span>
    <span class="type" v-text="place.type"></span>
  </div>
</template>

<script>
  export default {
    name: "BookingLocationItem",
    props: {
      place: {
        type: Object,
        required: true,
      },
    },
    mounted() {
      if (this.place && (typeof this.place).toLowerCase() == "object") {
        if (!this.place.location || !this.place.type)
          console.error(
            "Invalid place passed to <BookingLocationItem> component!",
          );
      }
    },
  };
</script>

<style
  scoped
  lang="scss"
  src="@/assets/scss/components/bookingLocationItem.scss"
></style>
