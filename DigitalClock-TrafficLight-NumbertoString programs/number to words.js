var ones = [
  "",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];
var tens = [
  "",
  "",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];

function numToWrods() {
  var data = document.getElementById("num").value;
  var paragraph = document.getElementById("pr");
  var convertedStr;

  conversion(data);

  function smallNum(num) {
    var str = "";
    if (num < 20) {
      str = ones[Number(num)];
    }
    // --------------For 20 to 99-------------------//
    if (num >= 20 && num < 100) {
      str = tens[parseInt(Number(num) / 10)] + " " + ones[Number(num) % 10];
    }
    return str;
  }
  function conversion(num) {
    convertedStr = "";
    if (num < 100) {
      convertedStr = smallNum(num);
    } else if (num >= 100 && num < 1000) {
      // thousand
      convertedStr =
        smallNum(parseInt(Number(num) / 100)) +
        " hundred " +
        conversion(Number(Number(num) % 100));
    } else if (num >= 1000 && num < 100000) {
      // lakh
      convertedStr =
        smallNum(parseInt(Number(num) / 1000)) +
        " thousand " +
        conversion(Number(Number(num) % 1000));
    } else if (num >= 100000 && num < 1000000) {
      // crore
      convertedStr =
        smallNum(parseInt(Number(num) / 100000)) +
        " lac " +
        conversion(Number(Number(num) % 100000));
    } else if (num >= 1000000 && num < 1000000000) {
      // crore
      convertedStr =
        smallNum(parseInt(Number(num) / 10000000)) +
        " crore " +
        conversion(Number(Number(num) % 10000000));
    }
    return convertedStr;
  }
  // --------------For 100 to 999-------------------//

  paragraph.innerText = convertedStr;
  // console.log(str);
}
