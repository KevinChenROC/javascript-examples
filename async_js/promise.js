let success = true;

const F = (data) => {
  return new Promise((resolve, reject) => {
    console.log("do...F");
    setTimeout(() => {
      if (success) resolve(data + " success!");
      else reject(data + " FAIL!");
    }, 3000);
  });
};

//Promise usage
// F(123)
//   .then((result) => console.log(result))
//   .catch((result) => console.log(result));

//async and await
const doSomething = async () => {
  try {
    const data = await F(123);
    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
//Invoking the async function
doSomething();
