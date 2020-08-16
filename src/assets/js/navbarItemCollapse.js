import jQuery from "jquery";

jQuery($ => {
  $(".HeaderNavbarComponent nav .menu-item.has-children").each((_idx, _el) => {
    let _menu_item = $(_el);
    let _submenu = _menu_item.find("> .sub-menu")[0];
    _menu_item.find("> a").on("click", _e => {
      _e.preventDefault();
      _menu_item.toggleClass("opened");
      if (_submenu.style.maxHeight)
        // Close submenu if its opened
        _submenu.style.maxHeight = null;
      // Otherwise add scroll down animation and open the submenu
      else _submenu.style.maxHeight = `${_submenu.scrollHeight}px`;
    });
  });
});
