/* Question: WHAT IS THE OUTPUT OF BELOW CODE WHY?  */

function createIncrement() {
  let count = 0;
  function increment() {
    count++;
  }
  let message = `count is ${count}`;
  function log() {
    console.log(message);
  }
  return [increment, log];
}

const [increment, log] = createIncrement();

increment();
increment();
increment();
log();

/* EXPLANATION */
// output: count is 0

/* In above code if we console log the variable count then output will be 3
but if we console log message variable then output will be 0  first time 
when we call the  createIncrement method at that time the message = count is 0
set but after that we only call the increament methods 3 time and at last log method
so message did't get chance to update themself that's why output is count is 0 */
