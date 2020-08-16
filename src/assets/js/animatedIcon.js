import jQuery from "jquery";

jQuery($ => {
  $(".animated-icon").each((_idx, _el) => {
    _el = $(_el);
    _el.on("click", () => {
      _el.toggleClass("toggled");
    });
  });
});
