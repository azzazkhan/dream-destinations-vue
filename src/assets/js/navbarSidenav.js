import jQuery from "jquery";

jQuery($ => {
  let _header = $(".HeaderNavbarComponent").eq(0);
  let _navbar = _header.find("> .navigation-wrapper").eq(0);
  let _hamburger = _header.find("> .hamburger").eq(0);
  _hamburger.on("click", () => {
    let _nav_opened = _navbar.hasClass("opened");
    // alert(_nav_opened);
    if (!_nav_opened) {
      setTimeout(() => {
        _navbar.css("visibility", "visible");
        _navbar.addClass("opened");
      }, 200);
    } else {
      _navbar.css("visibility", "visible");
      _navbar.removeClass("opened");
      setTimeout(() => {
        _navbar.css("visibility", "hidden");
      }, 400);
    }
  });
});
