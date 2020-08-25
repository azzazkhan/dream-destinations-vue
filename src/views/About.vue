<template>
  <div class="CategoryView">
    <Hero
      :style="{
        'background-image':
          'url(\'' + require(`@/assets/img/hero-about.jpg`) + '\')',
      }"
    />
    <MainContentWraper
      class="mx-auto bg-white h-100 pt-5"
      style="width: 90vw; border-radius: 10px; transform: translateY(-50px)"
    >
      <h1 class="light">What is Dream Destinations all about?</h1>
      <p class="mb-5">
        With over 2 million bookable vacation rentals, DD connects homeowners
        with families and vacationers looking for something more than a hotel
        for their trip. The DD community offers families an array of rental
        property types such as condos, cabins, lake rentals, beach houses, and
        more. Discover properties in destinations that everyone dreams of
        visiting. All it takes is a quick DD property search to securely book
        your next condo, cabin, or house anywhere in the world. If you're
        traveling with a large group, you can find rental homes on DD that give
        you the space and comfort you need without sacrificing the amenities
        that matter most, all within your budget.
      </p>

      <h2 class="light">Here’s what makes a vacation rental perfect for you</h2>
      <p class="mb-5">
        Whether you're planning a family vacation with your pet, a relaxing
        weekend getaway, or an adventurous excursion, vacation rentals are ideal
        for trips of all types. You can find everything from charming mountain
        cabins and lakeside lodges to breathtaking city apartments and luxury
        homes, or anything in between, all with an array of features to make
        your trip more comfortable and convenient. Staying in a vacation home,
        you'll enjoy amenities like extra bedrooms or a full kitchen with
        appliances, making it much easier to enjoy a stress-free trip with the
        family. You can also find vacation home rentals with additional features
        such as waterfront views, a private pool or hot tub, or outdoor
        entertainment space.
      </p>

      <h2 class="light">Message From C.E.O</h2>
      <p class="mb-3">
        Having worked in this field since a very young age, I developed an early
        love for travelling and everything that has something to do with
        tourism. From an early stage of my life I was especially interested in
        exploring my own country, Switzerland, which offers an amazing variety
        of superb holiday destinations. During my extensive travels over the
        years in Switzerland, I believed I had visited every corner of this
        country, but to my surprise, on each new journey I discovered a part of
        my country that I had never experienced before.
      </p>
      <p>
        Throughout the years I have strived to attain several goals: To
        emphasize the importance of “domestic travelers” and to increase
        awareness amongst my fellow Switzerland's about the beauty of their own
        country. To invite and serve people from all over the world who have
        developed a love for Switzerland. Until today many customers return, and
        many continue to keep in touch with us, recalling the “Adventure
        Switzerland” that they had had the chance to experience. To encourage my
        countrymen to travel abroad and experience new cultures and meet new
        people in order to expand the horizons of their mind as well as their
        knowledge. And last but not least, to encourage our youth to participate
        in school trips in order to change attitudes and raise aspirations
        through new activities and experiences. Rising to new challenges and
        living alongside their peers helps pupils become more adaptable and
        confident; aspects which are critical to so many areas of their
        development.
      </p>
      <p class="mb-3">
        All these travelers help foster an understanding between people,
        providing a cultural exchange between both hosts and guests and
        increasing the chances to develop mutual sympathy and understanding
        towards our country while at the same time reducing their prejudices; an
        aspect much needed in these times.
      </p>
      <p class="mb-3">
        Tourism, one of the world’s largest industries, is at the forefront of
        new world conflicts, but from my experience, the tourism industry has
        developed a capacity to adapt and survive with extraordinary resistance
        towards these issues. I am convinced that the passion and desire to
        travel, to experience new places and to meet new people will take
        tourism to new heights as the years go by. Especially now, in the field
        of sustainable tourism, where locals and visitors have encounters that
        will benefit all those involved, including the local environment.
      </p>
      <p class="mb-3">
        I hope to see tourism in Switzerland increase in the future, bringing
        with it all its benefits and capacity to increase interaction and
        understanding between different people. There is much to be done and I
        will continue pursuing my life passion in the hope that one day everyone
        gets the opportunity to experience what traveling could mean for them.
      </p>
      <p class="mb-3">
        This is something that I think, with your help, we can achieve and it
        would be my pleasure to invite you on this exciting journey that I like
        to call,
        <em>TRAVELLING</em>&hellip;
      </p>
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
