/* Under the hood understanding of how a Generator works.
2.Under the hood understanding of how Async/await works */

const doTask = function (a, b) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
};

/* By using asunc awit */
(async () => {
  const sum1 = await doTask(1, 2);
  const sum2 = await doTask(3, sum1);
  const sum3 = await doTask(4, sum2);

  console.log(
    `Sum of first 4 natural numbers using promise and async/await is ${sum3}`
  );
})();

/* By using then and catch  */

doTask(1, 2)
  .then((sum1) => {
    return doTask(3, sum1);
  })
  .then((sum2) => {
    return doTask(4, sum2);
  })
  .then((sum3) => {
    console.log(
      `Sum of first 4 natural numbers using promise and then() is ${sum3}`
    );
  });

/* use of generators  */

function* gen() {
    console.log("1. code before the first yield");
    yield 100;
    
   console.log("2. code before the second yield");
    yield 200;
}

const obj = gen();

console.log(obj.next());
console.log(obj.next());
console.log(obj.next());