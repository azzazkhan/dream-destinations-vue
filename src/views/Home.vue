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
        <a href="#" class="animated-anchor">Visit our help article</a>
      </InfoNotice>
      <CardsSlider />
      <AnchorGrid class="mt-5" :links="links">
        <template v-slot:description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio deleniti
          expedita unde vel recusandae fuga ratione amet error neque commodi!
        </template>
      </AnchorGrid>
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
        links: Links,
      };
    },
  };
</script>
