import jQuery from "jquery";

jQuery($ => {
  $(".overlay").each((_index, _el) => {
    _el = $(_el);
    _el.find(".close-icon").on("click", _e => {
      _e.preventDefault();
      _el.removeClass("visible");
      $("body").removeClass("scroll-locked");
    });
  });
  $(".password-widget").each((_index, _el) => {
    _el = $(_el);
    let _input = _el.find("input")[0];
    let _icons = _el.find(".icon .fa"); // Hidden

    _icons.on("click", () => {
      _el.toggleClass("visible");
      _input = $(_input);
      if (_el.hasClass("visible")) _input.attr("type", "text");
      else _input.attr("type", "password");
    });
  });

  $(".animation-wrapper > .content").each((_index, _el) => {
    _el = $(_el);
    if (!_el.is(":first-of-type"))
      _el.css("display", "none").addClass("pending");

    _el.find(".animation-control.forward").each((_index, _ctrl) => {
      $(_ctrl).on("click", () => {
        if ($(_ctrl).is(":disabled")) return;
        if (!_el.is(":last-of-type")) {
          _el.addClass("toggled");
          setTimeout(() => {
            _el.css("display", "none");
            _el.next().css("display", "block");
            setTimeout(() => {
              _el.next().removeClass("pending");
            }, 50);
          }, 250);
        }
      });
    });
    _el.find(".animation-control.backward").each((_index, _ctrl) => {
      $(_ctrl).on("click", () => {
        if (!_el.is(":first-of-type")) {
          _el.addClass("pending");
          setTimeout(() => {
            _el.css("display", "none");
            _el.prev().css("display", "block");
            setTimeout(() => {
              _el.prev().removeClass("toggled");
            }, 50);
          }, 250);
        }
      });
    });
  });
});
