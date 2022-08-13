/* So right now we have to implement custom promise */

/* Firstly we have to declear 3 state of promise  */
const PRNDING = 0;
const FULLFILED = 1;
const REJECTED = 2;

function customPromise(executor) {
  let state = PRNDING; // st staring state of promiss is pending
  let value = null;

  /* Now we have to define callback functions   */
  let handlers = []; // this for handling call back functions
  let cachers = []; // this for error

  function resolve(result) {
    if (state !== PRNDING) {
      return;
    }

    state = FULLFILED;
    value = result;

    handlers.forEach((h) => h(value));
  }

  function reject(err) {
    if (state !== PRNDING) {
      return;
    }
    state = REJECTED;
    value = err;
    cachers.forEach((c) => c(value));
  }

  this.then = function (sucesscallback) {
    if (state === FULLFILED) {
      sucesscallback(value);
    } else {
      handlers.push(sucesscallback);
    }
  }

  this.catch = function (failureCallback) {
    if (state === REJECTED) {
      failureCallback(value);
    } else {
      cachers.push(failureCallback);
    }
  }

  executor(resolve, reject);
}

function getNumber() {
  let x = parseInt(Math.random() * 100);
  return x;
}

const customPromiseObject = new customPromise(function (resolve, reject) {
  let num = getNumber();
 
  if ((num/5) == 0) {
    reject();
  } else {
    resolve();
  }
});

customPromiseObject.then((val) => {
  console.log("Promiss Resolve sucessfully ", val)
})
customPromiseObject.catch((val) => {
  console.log("Promise Rejected.... ! ", val)
});
