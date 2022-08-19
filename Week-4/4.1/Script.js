const PENDING = 0;
const FULFILLED = 1;
const REJECTED = 2;

function customePromise(executor) {
  var state = PENDING;
  var value = undefined;
  var handlers = [];
  var catchers = [];

  resolve = (value) => {
    if (state !== PENDING) {
      return;
    }
    state = FULFILLED;
    value = value;

    handlers.forEach((h) => h(value));
  };

  reject = (error) => {
    if (state !== PENDING) {
      return;
    }

    state = REJECTED;
    value = error;

    catchers.forEach((c) => c(value));
  };

  this.then = (scb) => {
    if (state === FULFILLED) {
      scb(value);
    } else {
      handlers.push(scb);
    }
  };

  this.catch = (fcb) => {
    if (state === REJECTED) {
      fcb(value);
    } else {
      catchers.push(fcb);
    }
  };
  executor(resolve, reject);
}

function getNumber() {
  let num = Math.floor(Math.random() * 100 + 1);
  return num;
}
const myObj = new customePromise((res, rej) => {
  if (getNumber() % 5 == 0) {
    rej();
  } else {
    res();
  }
});

myObj.then((val) => {
  console.log("number is not divisible by 5 so resolve");
});

myObj.catch((val) => {
  console.log("Number is divisible by 5 so rejected");
});
