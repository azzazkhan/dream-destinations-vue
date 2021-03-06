<template>
  <div class="BookingPopupComponent selection-box">
    <div class="header d-lg-none">
      <h4 v-if="title && !input" class="title" v-text="title"></h4>
      <input
        v-if="has_input_box()"
        v-model="entry"
        type="text"
        class="input-capture"
        :placeholder="
          (typeof input.placeholder).toLowerCase() == 'string'
            ? input.placeholder
            : 'Please enter your data here.'
        "
        autocomplete="off"
      />
      <span class="close-icon dismiss-selection">
        <svg
          focusable="false"
          data-id="SVG_CLOSE__16"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5 12.5l-9-9m9 0l-9 9"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </span>
    </div>
    <CubesLoader :class="{ 'd-none': !loading, active: loading }" />
    <div class="selection-content px-0">
      <slot>
        <p class="p-3 m-5 text-center text-muted lead">Scilence is golden</p>
      </slot>
      <button
        v-if="dismissButton"
        class="custom-btn blue continue dismiss-selection w-75 mx-auto my-3"
      >
        Continue
      </button>
    </div>
  </div>
</template>

<script>
  import "@/assets/js/bookingPopup.js";

  import CubesLoader from "@/components/Loaders/Cubes.vue";

  export default {
    name: "BookingPopup",
    components: {
      CubesLoader,
    },
    props: {
      title: {
        type: String,
        default: "",
      },
      input: {
        type: Object,
        default: function() {
          return {};
        },
      },
      loading: {
        type: Boolean,
        default: false,
      },
      dismissButton: {
        type: Boolean,
        default: false,
      },
    },
    data() {
      return {
        entry: "",
      };
    },
    computed: {
      total_guests() {
        // Nothing goes on whithout adults.
        if (this.search.guests.adults <= 0) return;

        let _total_guests =
          this.search.guests.adults + this.search.guests.children;
        let _pets = this.search.guests.pets ? ", Pets" : "";

        return `${_total_guests} Guests` + _pets;
      },
    },
    watch: {
      entry() {
        this.$emit("input-updated", this.entry);
      },
    },
    methods: {
      has_input_box() {
        return Object.keys(this.input).length > 0;
      },
    },
  };
</script>
<style
  scoped
  lang="scss"
  src="@/assets/scss/components/bookingPopup.scss"
></style>
