<template>
  <div class="CategoryView">
    <Hero />
    <MainContentWraper
      class="mx-auto bg-white h-100 pt-5"
      style="width: 90vw; border-radius: 10px; transform: translateY(-50px)"
    >
      <h1 class="light text-center my-5">
        The page you were looking for could not be found!
      </h1>
      <div class="d-flex justify-content-center">
        <router-link to="/" class="custom-btn inline d-inline-block">
          <span
            class="icon position-relative"
            style="margin-right: 5px; bottom: -9px; right: 5px; transform: rotate(180deg);"
          >
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
            </svg> </span
          >Back to home page
        </router-link>
      </div>
    </MainContentWraper>
  </div>
</template>

<script>
  import Hero from "@/components/Hero.vue";
  import MainContentWraper from "@/components/Main/ContentWrapper.vue";

  export default {
    name: "NotFound",
    components: { Hero, MainContentWraper },
  };
</script>
