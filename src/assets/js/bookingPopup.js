import jQuery from "jquery";

jQuery($ => {
  $(".has-selection-box").each((_idx, _el) => {
    _el = $(_el);
    let _box = _el.find(".selection-box");
    _el.find(".trigger-selection").on("click", () => {
      _box.addClass(!_box.hasClass("opened") ? "opened" : "");
    });
    _el.find(".dismiss-selection").on("click", () => {
      _box.removeClass("opened");
    });
  });
});
