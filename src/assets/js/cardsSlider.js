import jQuery from "jquery";

jQuery($ => {
  let _card_slider = $(".CardsSliderComponent .owl-carousel");
  _card_slider.owlCarousel({
    autoWidth: true,
    checkVisible: false,
    // items: 4,
    rewind: false,
    // nav: true,
    dots: false,
    margin: 35,
  });
  /* _card_slider
    .find(".owl-nav button")
    .html(
      '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 11H6.83L10.41 7.41L9 6L3 12L9 18L10.41 16.59L6.83 13H21V11Z" fill="black" /></svg>',
    ); */
});
