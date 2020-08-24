import jQuery from "jquery";

jQuery($ => {
  $("#newsletter_form").on("submit", _e => {
    _e.preventDefault();
    alert("Email registered!");
    $("#user_email_response").val("");
  });
});
