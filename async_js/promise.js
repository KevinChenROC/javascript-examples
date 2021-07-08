let duration = 3000;

function doSomethingAsyc() {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Finishing async tasks", duration), duration);
  });
}

const doSomething = async () => {
  console.log(await doSomethingAsyc());
  console.log("after await"); // this line awaits the previous line to be finished.
};

console.log("before");
doSomething();
doSomething();
console.log("after");
