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
  // Footer newsletter form

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
