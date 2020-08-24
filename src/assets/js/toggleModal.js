import jQuery from "jquery";

jQuery($ => {
  $(".modal-trigger[data-modal]").each((_idx, _el) => {
    let _id = $(_el).attr("data-modal");
    let _modal = $(`#${_id}`);
    $(_el).on("click", _e => {
      _e.preventDefault();
      _modal.addClass("visible");
      $("body").addClass("scroll-locked");
    });
  });
});
