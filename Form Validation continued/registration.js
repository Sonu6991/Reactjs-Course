$(document).ready(function () {
  $(".error").hide();
  var isValidate = false;

  function reset() {
    var isValidate = false;
    $(".error").hide();
    $("#fName").text('');
    $("#lName").text('');
    $("#dob").text('');
    $("#address").text('');
    $("#contactNo").text('');
    $("#email").text('');

  }
  function fnameHandler() {
    if ($("#fName").val().length === 0) {
      $("#error1").text("First name must not be empty!").show();
      isValidate = false;
    } else {
      $("#error1").hide();
      isValidate = true
    }
  }
  function lnameHandler() {
    if ($("#lName").val().length === 0) {
      $("#error2").text("Last name must not be empty!").show();
      isValidate = false;
    } else {
      $("#error2").hide();
      isValidate = true
    }
  }
  function addressHandler() {
    if ($("#address").val().length > 100) {
      $("#error4").text("Address can not be greater thank 100 characters!").show();
      isValidate = false;
    } else {
      $("#error4").hide();
      isValidate = true
    }
  }
  function dobHandler() {

    var today = new Date();
    var dob = new Date($("#dob").val());
    var age = Math.floor((today - dob) / (365.25 * 24 * 60 * 60 * 1000));

    if ($("#dob").val().length === 0) {
      $("#error3").text("Birth date must not be empty!").show();
      isValidate = false;
    }
    else if (age < 18) {
      $("#error3").text("You must be at least 18 years old!").show();
      isValidate = false;
    } else {
      $("#error3").hide();
      isValidate = true;
    }
  }


  function contactNoHandler() {
    if ($("#contactNo").val().length === 0) {
      $("#error5").text("Contact no. must not be empty!").show();
      isValidate = false;
    }
    else if (!$("#contactNo").val().match(/^(\+\d{1,3}[- ]?)?\d{10}$/)) {
      $("#error5").text("required 10 digits, match requested format!").show();
      isValidate = false;
    } else {
      $("#error5").hide();
      isValidate = true;
    }
  }
  function emailHandler() {
    if ($("#email").val().length === 0) {
      $("#error6").text("Email filed must not be empty!").show();
      isValidate = false;
    }
    else if (!$("#email").val().match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
      $("#error6").text("required 10 digits, match requested format!").show();
      isValidate = false;
    } else {
      $("#error6").hide();
      isValidate = true;
    }
  }

  // First name validation
  $("#fName").on("blur", function (event) {
    fnameHandler();
  });
  $("#fName").on("keyup", function (event) {
    fnameHandler();
  });

  // Last name validation 

  $("#lName").on("blur", function (event) {
    lnameHandler();
  });
  $("#lName").on("keyup", function (event) {
    lnameHandler();
  });

  // Birth date validation
  $("#dob").on("blur", function (event) {
    dobHandler();
  });
  // Address validation
  $("#address").on("blur", function (event) {
    addressHandler();
  });
  // Contact no validation
  $("#contactNo").on("blur", function (event) {
    contactNoHandler();
  });

  // Email validation
  $("#email").on("blur", function (event) {
    emailHandler();
  });

  //reset button onclick
  $('#reset').on("click", function (event) {
    reset();
  })
  // Submit button onclick
  $("#submit").on("click", function (event) {
    fnameHandler();
    dobHandler();
    lnameHandler();
    emailHandler();
    addressHandler();
    contactNoHandler();
    if (isValidate === false) {
      event.preventDefault();
    }
  });


});
