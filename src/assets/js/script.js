import jQuery from "jquery";

jQuery(document).ready($ => {
  {
    // TODO: Implement navigation visibility bug after resizing window
    $(window).resize({}, () => {
      // let _hamburger = $(".hamburger").eq(0);
      // let _nav = $(".navigation-wrapper").eq(0);
      // let _nav_opened = false;
      // let _desktop =
      // 	_hamburger.css('display') == 'none' ? true : false
      // console.log(_desktop ? 'Desktop' : 'Mobile')
      // if (_desktop) {
      // 	setTimeout(() => {
      // 		_nav.css('visibility', 'visibile !important')
      // 	}, 500)
      // 	// TODO: Implement accordition max-height logic
      // } else {
      // 	if (!_nav_opened) {
      // 		_nav.css('visibility', 'hidden')
      // 	}
      // }
    });
  }
  // Login modal animations and logic.
  {
    $(".overlay").each((_index, _el) => {
      _el = $(_el);
      _el.find(".close-icon").on("click", _e => {
        _e.preventDefault();
        _el.find(".modal").css("opacity", "0");
        setTimeout(() => {
          _el.removeClass("visible");
          setTimeout(() => {
            _el.css("display", "none");
          }, 200);
        }, 100);
      });
    });
    $(".password-widget").each((_index, _el) => {
      _el = $(_el);
      let _input = _el.find("input");
      let _icons = _el.find(".icon .fa"); // Hidden

      _icons.on("click", () => {
        _el.toggleClass("visible");
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
  }
  // Footer newsletter form
  $("#newsletter_form").on("submit", _e => {
    _e.preventDefault();
    alert("Email registered!");
    $("#user_email_response").val("");
  });
  $(window).on("keyup", _e => {
    let _key = _e.which;
    // let _name = _e.key.toLowerCase();
    // Escape key pressed
    if (_key == 27) {
      $(".selection-box").removeClass("opened");
      $(".menu-item.has-children")
        .removeClass("opened")
        .find(".sub-menu")
        .css({ "max-height": "" });
    }
  });
});
