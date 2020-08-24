<template>
  <div class="CategoryView">
    <Hero>
      <h1 class="featured-title text-white text-center text-capitalize">Dream Destinations</h1>
    </Hero>
    <MainContentWraper
      class="mx-auto bg-white h-100 pt-5"
      style="width: 90vw; border-radius: 10px; transform: translateY(-50px)"
    >
      <h1 class="light mb-5">Showing all (10) available {{ $route.params.category }}</h1>
      <div class="row">
        <CategoryCard
          v-for="(t, index) in tiles"
          :key="index"
          :image="`${$route.params.category}/all/${index + 1}.jpg`"
        />
      </div>
    </MainContentWraper>
  </div>
</template>

<script>
import Hero from "@/components/Hero.vue";
import MainContentWraper from "@/components/Main/ContentWrapper.vue";
import CategoryCard from "@/components/CategoryCard.vue";

export default {
  name: "Category",
  components: { Hero, MainContentWraper, CategoryCard },
  data() {
    return {
      tiles: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
  },
};
</script>