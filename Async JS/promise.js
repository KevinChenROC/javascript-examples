function doSomethingAsyc(duration) {
  return new Promise((resolve, reject) => {
    console.log("......");

    setTimeout(
      () => resolve("Finished async tasks after " + duration+ " miliseconds"),
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

// First way to consume promise
// doSomethingAsyc(3000).then((msg)=>{
//   console.log(msg);
// }).catch((err)=>{
//   console.log(err)
// })

// Second way to consume promise
// Consume it inside an async function
doSomething();
console.log("after doSomething()");
