$(document).ready(function () {
  $("#signupForm").validate({
    rules: {
      name: {
        required: true,
      },
      email: {
        required: true,
        email: true,
        accept: "[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}",
      },
      password: {
        required: true,
        pswdIsValid: true,
        minlength: 6,
      },
      confirmPswd: {
        required: true,
        equalTo: "#password",
      },
    },
    messages: {
      name: {
        required: "Please enter your name",
      },
      email: {
        required: "Please enter your email",
        email: "Please enter a valid email address",
      },
      password: {
        required: "Please enter password",
      },
      confirmPswd: {
        required: "Please enter confirm password",
        equalTo: "Password not match!",
      },
    },
  });

  $.validator.addMethod("pswdIsValid", function (value, element) {
    return /^[A-Za-z0-9\d=!\-@._*]+$/.test(value);
  });

  function pswdIsValid() {
    $("");
  }

  if (!$("#signupForm").valid()) {
    alert("fbshdbvjfbnfb");
  }

  $("#submit").on("click", function (event) {
    console.log("executed");
    if (!$("#signupForm").valid()) {
      event.preventDefault();
    }
  });
});
