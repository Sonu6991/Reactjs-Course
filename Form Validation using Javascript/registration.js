$(document).ready(function () {
  $(".error").hide();

  function fnameHandler() {
    if ($("#fName").val().length === 0) {
      $("#.error1").text("First name must not be empty!").show();
    } else {
      $("#.error1").hide();
    }
  }

  function dobHandler() {
    //     var today = new Date().getFullYear();
    //     var dob = new Date($("#dob").val()).getFullYear();
    //     var age = today - dob;

    if ($("#dob").val().length === 0) {
      $("#.error3").text("Birth date must not be empty!").show();
    } else {
      $("#.error3").hide();
    }

    if (age < 18) {
      $("#.error3").text("You must be at least 18 years old!").show();
    } else {
      $("#.error3").hide();
    }
  }

  $("#submit").on("click", function (event) {
    fnameHandler();
    dobHandler();

    if ($("#.error").show()) {
      event.preventDefault();
    }
  });
});
