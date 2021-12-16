function call() {
  sum = 0;
  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}
console.log(call(2, 4));
console.log($);
