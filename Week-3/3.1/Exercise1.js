// Reducer Function

function add(a, b) {
  return a + b;
}

// implementation of memoize method

function memoize(func) {
  let cache = {};
  return (memoFun = (...args) => {
    let num1 = args[0];
    let num2 = args[1];
    let res = args[2];

    if (res in cache) {
      console.log("Output from cache");
      return cache[res];
    } else {
      console.log("Calculating firt time");
      let result = func(num1, num2);
      cache[res] = result;
      return result;
    }
  });
}

//calling memoize
const memoizeAdd = memoize(add);

console.time();
console.log(memoizeAdd(100, 100));
console.timeEnd();

console.time();
console.log(memoizeAdd(100, 100));
console.timeEnd()

console.time();
console.log(memoizeAdd(100, 100));
console.timeEnd()