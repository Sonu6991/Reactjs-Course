$(document).ready(function () {

    $('#signupForm').validate({
        rules: {
            name: {
                required: true,
            },
            email: {
                required: true,
                email: true
            },
            password: {
                required: true,
                password: true
            },
            confirmPswd: {
                required: true,
                equalTo: "#password"
            }
        },
        messages: {
            name: {
                required: "Please enter your name",

            },
            email: {
                required: "Please enter your email",
                email: "Please enter a valid email address"
            },
            password: {
                required: "Please enter password",
            },
            confirmPswd: {
                required: "Please enter confirm password",
                equalTo: "Password not match!"
            }
        }
    })



});