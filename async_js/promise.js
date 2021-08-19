function doSomethingAsyc(duration) {
  return new Promise((resolve, reject) => {
    console.log("......");

    setTimeout(
      () => resolve("Finished async tasks after " + duration / 1000),
      duration
    );
  });
}

const doSomething = async () => {
  let duration = 3000;
  console.log(await doSomethingAsyc(duration));
  console.log("after await"); // this line awaits the previous line to be finished.
};

console.log("before doSomething()");
doSomething();
console.log("after doSomething()");
