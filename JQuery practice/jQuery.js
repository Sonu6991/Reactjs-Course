$(document).ready(function () {
  //   $("#btn").addClass("btn");

  $("#btn").click(function () {
    $(this).toggleClass("btn");
  });

  $("#btn1").dblclick(function () {
    $(this).hide();

    setTimeout(function () {
      $("#btn1").show();
    }, 5000);
  });
  $("#btn3").mouseenter(function () {
    $(this).addClass("btn");
  });

  $("#input").on("keydown", function (e) {
    if (e.keyCode == 66) {
      e.preventDefault();
    }
    console.log(e.key);
  });
});

function formSubmit(event) {
  event.stopPropagation;
  console.log("Form submitted");
}
function btnSubmit() {
  console.log("Button Clicked");
}
// javascript alternative of document.ready()

// document.onreadystatechange = function () {
//   if (document.readyState === "complete") {
//     console.log("loaded");
//   }
// };
