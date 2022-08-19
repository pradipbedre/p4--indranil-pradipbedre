const mathOperation = require("./script.js");

test("adds 2 + 2 to equal 4", () => {
  expect(mathOperation.sum(2, 2)).toBe(4);
});
test("adds 2 - 2 to equal 0", () => {
    expect(mathOperation.diff(2, 2)).toBe(0);
});
test("adds 2 * 2 to equal 4", () => {
    expect(mathOperation.mul(2, 2)).toBe(4);
});
test("adds 2 / 2 to equal 1", () => {
    expect(mathOperation.div(2, 2)).toBe(1); 
});

