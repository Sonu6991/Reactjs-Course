$(document).ready(function () {
  console.log("executed");
  $("#createBtn").on("click", function () {
    const person = Object.create(null);
    person.name = "Matthew";
    person.isHuman = true;
    $("#createOutput").text(JSON.stringify(person));
  });
  $("#definePropertiesBtn").on("click", function () {
    const other = {};
    // const other = Object.create(null);
    Object.defineProperties(other, {
      fname: {
        value: "sonu",
      },
      lname: {
        value: "chauhan",
      },
    });

    let abc = Object.assign(other);
    $("#definePropertiesOutput").text('{"fname": "sonu", "lname": "chauhan"}');
  });
});
