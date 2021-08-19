function multiply(multiplier, ...theArgs) {
  return theArgs.map((x) => multiplier * x);
}

var arr = multiply(3, 1, 2, 3);
console.log(arr);
