function drop() {
  var checkedlist = [];
  var parentlist = [];

  $("div#container1 input:checked").each(function () {
    checkedlist.push($(this).attr("id"));
  });

  for (var i = 0; i < checkedlist.length; i++) {
    parentlist.push(
      $("#" + checkedlist[i])
        .parents()
        .eq(2)
        .attr("id")
    );
  }
  var print;
  var container2 = document.getElementById("container2");
  for (var i = 0; i < parentlist.length; i++) {
    print = document.getElementById(parentlist[i]);
    container2.appendChild(print);
  }
}
