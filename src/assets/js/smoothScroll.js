import jQuery from "jquery";

jQuery($ => {
  $("a[data-scroll='smooth']").each((_idx, _el) => {
    $(_el).on("click", _e => {
      _e.preventDefault();
      let hash = _el.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset.top,
        },
        800,
      );
    });
  });
});
