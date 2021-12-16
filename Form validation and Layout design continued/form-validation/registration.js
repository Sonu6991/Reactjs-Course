$(document).ready(function () {
  $(".error").hide();
  $("#passwordDialog").hide();
  function reset() {
    $(".error").hide();
    $("#fName").text("");
    $("#lName").text("");
    $("#dob").text("");
    $("#address").text("");
    $("#contactNo").text("");
    $("#email").text("");
  }

  function fnameHandler() {
    if ($("#fName").val().length === 0) {
      $("#error1").text("First name is required!").show();
      return false;
    } else {
      $("#error1").hide();
      return true;
    }
  }
  function lnameHandler() {
    if ($("#lName").val().length === 0) {
      $("#error2").text("Last name is required!").show();
      return false;
    } else {
      $("#error2").hide();
      return true;
    }
  }
  function addressHandler() {
    if ($("#address").val().length > 100) {
      $("#error4")
        .text("Address can not be greater than 100 characters!")
        .show();
      return false;
    } else {
      $("#error4").hide();
      return true;
    }
  }
  function dobHandler() {
    var today = new Date();
    var dob = new Date($("#dob").val());
    var age = Math.floor((today - dob) / (365.25 * 24 * 60 * 60 * 1000));

    if ($("#dob").val().length === 0) {
      $("#error3").text("Birth date is required!").show();
      return false;
    } else if (age < 18) {
      $("#error3").text("You must be at least 18 years old!").show();
      return false;
    } else {
      $("#error3").hide();
      return true;
    }
  }

  function contactNoHandler() {
    if ($("#contactNo").val().length === 0) {
      $("#error5").text("Contact no. is required!").show();
      return false;
    } else if (!Number($("#contactNo").val())) {
      $("#error5").text("Contact number must be numbers only.").show();
      return false;
    } else if (
      !$("#contactNo")
        .val()
        .match(/^(\+\d{1,3}[- ]?)?\d{10}$/)
    ) {
      $("#error5").text("required 10 digits, match requested format!").show();
      return false;
    } else {
      $("#error5").hide();
      return true;
    }
  }
  function emailHandler() {
    if ($("#email").val().length === 0) {
      $("#error6").text("Email is required!").show();
      return false;
    } else if (
      !$("#email")
        .val()
        .match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)
    ) {
      $("#error6").text("Please enter valid email address").show();
      return false;
    } else {
      $("#error6").hide();
      return true;
    }
  }
  function passwordHandler() {
    if ($("#password").val().length === 0) {
      $("#error7").text("Please enter password!").show();
      return false;
    } else if (
      !$("#password")
        .val()
        .match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/)
    ) {
      $("#error7")
        .text(
          // "A minimum 8 characters password contains a combination of uppercase and lowercase letter and number are required."
          "Please enter valid password"
        )
        .show();
      return false;
    } else {
      $("#error7").hide();
      return true;
    }
  }

  // First name validation
  $("#fName").on("keyup blur", function () {
    fnameHandler();
  });

  // Last name validation

  $("#lName").on("keyup blur", function () {
    lnameHandler();
  });

  // Birth date validation
  $("#dob").on("blur", function () {
    dobHandler();
  });
  // Address validation
  $("#address").on("blur", function () {
    addressHandler();
  });
  // Contact no validation
  $("#contactNo").on("blur keyup", function () {
    contactNoHandler();
  });

  // Email validation
  $("#email").on("blur", function () {
    emailHandler();
  });
  $("#password").on("blur keyup", function () {
    passwordHandler();
  });
  $("#password").on("keyup", function () {
    var password = $("#password").val();
    // var char = /^[a-zA-Z ._-]*$/;
    // var filtered = $("#password").val().match(char);
    // console.log(filtered.input);
    $("#passwordDialog").val().allow;

    $("#passwordDialog").show();
    // if (char.test(filtered.input)) {
    //   $("#rule1").addClass("text-success");
    // }

    for (var i = 0; i < password.length; i++) {
      if (password[i].match(/^[A-Z]*$/)) {
        $("#rule1").addClass("text-success");
      } else {
        $("#rule1").removeClass("text-success");
      }
    }
  });
  // $("#confirnPswd").on("blur keyup", function () {
  //   passwordHandler();
  // });

  //reset button onclick
  $("#reset").on("click", function () {
    reset();
  });
  // Submit button onclick
  $("#submit").on("click", function (event) {
    fnameHandler();
    lnameHandler();
    dobHandler();
    emailHandler();
    addressHandler();
    contactNoHandler();

    if (
      fnameHandler() === false ||
      lnameHandler() === false ||
      dobHandler() === false ||
      emailHandler() === false ||
      addressHandler() === false ||
      contactNoHandler() === false
    ) {
      event.preventDefault();
    }
  });
});
