/**
 * Example 1
 */
console.log(x === undefined); // true
var x = 3;

/**
 * Example 2
 */
// will return a value of undefined
var myvar = "my value";

(function () {
  console.log(myvar); // undefined
  var myvar = "local value";

  //the aboive is equivalent to this
  /*
    var myvar;
    console.log(myvar);
    myvar = "local value";
 */
})();
