import jQuery from "jquery";

jQuery(document).ready($ => {
  // Disable all anchor tags.
  $('a:not([href="#"])').on("click", _e => {
    _e.preventDefault();
  });
  // Animated menu icons.
  $(".icon-menu.animated-icon").each((_index, _el) => {
    _el = $(_el);
    _el.on("click", _e => {
      _e.preventDefault();
      _el.toggleClass("toggled");
    });
  });
  {
    // Navgation logic goes in saperate block
    // Navigation toggle logic
    let _hamburger = $(".hamburger").eq(0);
    let _nav = $(".navigation-wrapper").eq(0);
    let _nav_opened = false;
    _hamburger.on("click", _e => {
      _e.preventDefault();
      if (!_nav_opened) {
        _nav.css("visibility", "visible");
        setTimeout(() => {
          _nav.addClass("opened");
        }, 200);
      } else {
        _nav.css("visibility", "visible");
        _nav.removeClass("opened");
        setTimeout(() => {
          _nav.css("visibility", "hidden");
        }, 400);
      }
      _nav_opened = !_nav_opened;
    });
    // Navigation submenu toggle logic (accordition logic implemented)
    $("nav .menu-item.has-children").each((_index, _el) => {
      _el = $(_el);
      _el.find("> a").on("click", () => {
        _el.toggleClass("opened");
        let _submenu = _el.find(".sub-menu")[0];
        if (_submenu.style.maxHeight) _submenu.style.maxHeight = null;
        else _submenu.style.maxHeight = `${_submenu.scrollHeight}px`;
      });
    });
    // TODO: Implement navigation visibility bug after resizing window
    $(window).resize({}, () => {
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
  // Hero selection box.
  $(".has-selection-box").each((_index, _el) => {
    _el = $(_el);
    let _s_box = _el.find(".selection-box");
    _el.find("input.trigger-select-box").on("click", _e => {
      _e.preventDefault();
      if (!_s_box.hasClass("opened")) _s_box.addClass("opened");
      // _s_box.toggleClass('opened')
    });
    _el.find(".selection-box .dismiss-selection").on("click", _e => {
      _e.preventDefault();
      setTimeout(() => {
        _s_box.removeClass("opened");
      }, 50);
    });
  });
  // Footer newsletter form
  $("#newsletter_form").on("submit", _e => {
    _e.preventDefault();
    alert("Email registered!");
    $("#user_email_response").val("");
  });
  // Slider
  {
    let _card_slider = $(".card-slider");
    _card_slider.owlCarousel({
      autoWidth: true,
      checkVisible: false,
      rewind: false,
      nav: true,
      dots: false,
      margin: 35,
    });
    _card_slider
      .find(".owl-nav button")
      .html(
        '<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21 11H6.83L10.41 7.41L9 6L3 12L9 18L10.41 16.59L6.83 13H21V11Z" fill="black" /></svg>',
      );
  }
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
