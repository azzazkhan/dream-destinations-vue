<template>
  <div class="CategoryView">
    <Hero>
      <h1 class="featured-title text-white text-center text-capitalize">
        About Dream Destinations
      </h1>
    </Hero>
    <MainContentWraper
      class="mx-auto bg-white h-100 pt-5"
      style="width: 90vw; border-radius: 10px; transform: translateY(-50px)"
    >
      <div
        v-for="(title, index) in ['Our History', 'Our Aim', 'Support']"
        :key="index"
        class="mb-5"
      >
        <h1 class="light mb-4" v-text="title"></h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus sed
          perspiciatis voluptatum, reiciendis hic fuga, obcaecati recusandae
          fugit cumque saepe eaque magni quos! Est quasi repellat corporis
          assumenda distinctio id quas aliquid quo tenetur officia iure
          asperiores dignissimos error deleniti earum natus eveniet, temporibus
          incidunt quis necessitatibus magni minima enim mollitia! Deleniti
          commodi inventore suscipit illum molestias praesentium, sequi nam
          maiores dolore. Itaque laboriosam at illum quo quis. Rem esse labore
          incidunt cupiditate dolorem dignissimos debitis, accusantium adipisci
          inventore, ipsum nemo a fuga ab omnis eum quis quae eius sed illum
          aspernatur. Voluptatum earum, repellendus optio velit aliquam
          cupiditate obcaecati!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          deleniti dolorem, perferendis excepturi tenetur illo aperiam culpa,
          harum at, eaque fuga accusantium minus eveniet corrupti! Sit nesciunt
          nihil debitis, fugit natus quod repudiandae vero deserunt recusandae
          doloribus perspiciatis sunt id sapiente voluptatum et aspernatur atque
          non quisquam officia adipisci eveniet?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, error
          quod. Libero laudantium expedita hic illum velit, animi obcaecati
          aliquid.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas
          doloribus aperiam nemo? Adipisci iste cupiditate assumenda nisi esse,
          corporis necessitatibus, nam inventore cum explicabo dolorem molestiae
          quo, repellendus beatae ipsum ab ratione ipsa enim accusamus atque
          impedit quam? Fugiat amet alias unde iure repellendus perspiciatis
          cumque aut ullam a sit non tempora earum deserunt vero accusamus,
          recusandae at, animi facere!
        </p>
      </div>
    </MainContentWraper>
  </div>
</template>

<script>
  import Hero from "@/components/Hero.vue";
  import MainContentWraper from "@/components/Main/ContentWrapper.vue";

  export default {
    name: "Help",
    components: { Hero, MainContentWraper },
  };
</script>
