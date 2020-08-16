import jQuery from "jquery";

jQuery($ => {
  $("a[href='#']").on("click", e => e.preventDefault());
});
