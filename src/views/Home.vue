<template>
  <div class="HomeView">
    <Hero>
      <h1 class="featured-title text-white text-center">Find dream vacation</h1>
      <BookingForm />
    </Hero>
    <MainContentWraper
      class="mx-auto bg-white h-100 pt-5"
      style="width: 90vw; border-radius: 10px; transform: translateY(-50px)"
    >
      <InfoNotice>
        Travel safe: Be sure to follow any government safety guidelines for
        travel.
        <a
          href="#"
          class="animated-anchor"
        >Visit our help article</a>
      </InfoNotice>
      <CardsSlider :cards="cards" />
    </MainContentWraper>
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import BookingForm from "@/components/Booking/Form";
import MainContentWraper from "@/components/Main/ContentWrapper.vue";
import InfoNotice from "@/components/Notice/Info.vue";
import CardsSlider from "@/components/CardsSlider.vue";

import Cards from "@/data/cards.json";

export default {
  name: "Home",
  components: {
    Hero,
    BookingForm,
    MainContentWraper,
    InfoNotice,
    CardsSlider,
  },
  data() {
    return {
      cards: Cards,
    };
  },
};
</script>