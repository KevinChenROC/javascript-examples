module1 = require("./module1");
module2 = require("./module2"); //node style import

console.log("a ", module1.a);
console.log("b ", module1.b);
module2.hello();
