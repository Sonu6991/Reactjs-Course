$(document).ready(function () {
  function blink() {
    // var red = document.getElementById("red");
    // var yellow = document.getElementById("yellow");
    // var green = document.getElementById("green");

    function timer(count, id) {
      var timer = document.getElementById("timer");
      setInterval(function () {
        if (count >= 0) {
          // console.log(count);
          $(id).text(count);
        }
        count--;
      }, 1000);
    }

    function reset(id) {
      $("#green").removeClass("opacity");
      $("#red").removeClass("opacity");
      $("#yellow").removeClass("opacity");
      $(id).text("");
    }
    // console.log($);
    setTimeout(function () {
      var count = 30;
      timer(count, "#green");
      reset("red");
      $("#green").addClass("opacity");
    });

    setTimeout(function () {
      var count = 4;
      timer(count, "#yellow");
      reset("#green");
      $("#yellow").addClass("opacity");
    }, 31000);

    setTimeout(function () {
      var count = 60;
      timer(count, "#red");
      reset("yellow");
      $("#red").addClass("opacity");
    }, 36000);
  }

  setInterval(function () {
    blink();
  }, 97000);
  blink();
});
