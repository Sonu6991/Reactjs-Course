function stringReverse() {
  var sbStr = "";
  var str = document.getElementById("from").value;
  var splitStr = str.split("");
  var reverseStr = splitStr.reverse().join("");
  document.getElementById("to").value = reverseStr;
  
  // if (str !== "" && str !== undefined && str.length > 0) {
  //   for (var i = str.length - 1; i >= 0; i--) {
  //     sbStr += str[i];
  //   }
  //   if (sbStr !== undefined && sbStr != "") {
  //     console.log(sbStr);
  //   }
  // }
}
