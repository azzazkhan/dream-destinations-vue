<template>
  <div class="CardsSliderComponent slider-wrapper">
    <div class="owl-carousel card-slider">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="card bg-mask bg-zoom bg-blur hard"
        :class="wideCards ? 'wide' : ''"
      >
        <div
          class="background"
          :style="{
            'background-image': card.category
              ? 'url(\'' +
                require(`@/assets/img/${card.category}/featured.jpg`) +
                '\')'
              : 'url(\'' +
                require(`@/assets/img/slides/${card.image}.jpg`) +
                '\')',
            'background-position': card.image_position
              ? card.image_position
              : 'center',
          }"
        ></div>
        <div class="content">
          <div
            v-if="!viewOnly && card.tags && typeof card.tags == 'array'"
            class="tags fadeable"
          >
            <a
              v-for="(tag, idx) in card.tags"
              :key="idx"
              href="javascript:void(0)"
              v-text="card.tags[idx]"
            ></a>
          </div>
          <h2
            class="title fadeable"
            v-text="card.title ? card.title : 'Lorem ipsum dolor set amet'"
          ></h2>
          <a
            v-if="!viewOnly"
            :href="
              card.category ? `/${card.category}/all` : 'javascript:void(0)'
            "
            class="btn-explore"
            >Explore</a
          >
        </div>
      </div>
    </div>
    <a
      v-if="!viewOnly"
      :href="customButton.url"
      class="custom-btn inline text-capitalize mt-4 mb-2"
    >
      {{ customButton.text }}
      <div class="icon position-relative" style="margin-left: 5px; top: -9px;">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style="position: relative; transform: translateY(8px) rotate(180deg)"
        >
          <path
            d="M21 11H6.83L10.41 7.41L9 6L3 12L9 18L10.41 16.59L6.83 13H21V11Z"
            fill="#FFFFFF"
            stroke="none"
          />
        </svg>
      </div>
    </a>
  </div>
</template>

<script>
  import "@/assets/js/cardsSlider.js";

  export default {
    name: "CardsSlider",
    props: {
      cards: {
        type: Array,
        required: true,
      },
      wideCards: {
        type: Boolean,
        default: false,
      },
      viewOnly: {
        type: Boolean,
        default: false,
      },
      customButton: {
        type: Object,
        default: function() {
          return {
            url: "javascript:void(0)",
            text: "View More Locations",
          };
        },
      },
    },
  };
</script>

<style
  scoped
  lang="scss"
  src="@/assets/scss/components/cardsSlider.scss"
></style>
