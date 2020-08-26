<template>
  <div class="HomeView">
    <Hero>
      <h1 class="featured-title text-white text-center text-capitalize">
        Find your dream vacation
      </h1>
      <BookingForm />
    </Hero>
    <MainContentWraper
      class="mx-auto bg-white h-100 pt-5"
      style="width: 90vw; border-radius: 10px; transform: translateY(-50px)"
    >
      <InfoNotice>
        Travel safe: Be sure to follow any government safety guidelines for
        travel.
        <router-link to="/help" class="animated-anchor"
          >Visit our help article</router-link
        >
      </InfoNotice>
      <h2 class="base-heading mb-4 mt-5">Find spaces that suit your style</h2>
      <CardsSlider :cards="category_cards" />
      <AnchorGrid class="mt-5" :links="links" title="More Vacation Ideas">
        <template v-slot:description
          >Best location choosen by our team according to user
          reviews.</template
        >
      </AnchorGrid>
      <h2 class="base-heading mb-4 mt-5">
        Best places in the world for going to the beach
      </h2>
      <CardsSlider
        class="mt-5"
        :cards="best_places_cards"
        :view-only="true"
        :wide-cards="true"
      />
    </MainContentWraper>
  </div>
</template>

<script>
  import Hero from "@/components/Hero.vue";
  import BookingForm from "@/components/Booking/Form";
  import MainContentWraper from "@/components/Main/ContentWrapper.vue";
  import InfoNotice from "@/components/Notice/Info.vue";
  import CardsSlider from "@/components/CardsSlider.vue";
  import AnchorGrid from "@/components/AnchorGrid.vue";

  import CategoryCards from "@/data/cards_categories.json";
  import BestPlacesCards from "@/data/cards_best_places.json";
  import Links from "@/data/links.json";

  export default {
    name: "Home",
    components: {
      Hero,
      BookingForm,
      MainContentWraper,
      InfoNotice,
      CardsSlider,
      AnchorGrid,
    },
    data() {
      return {
        category_cards: CategoryCards,
        best_places_cards: BestPlacesCards,
        links: Links,
      };
    },
  };
</script>
