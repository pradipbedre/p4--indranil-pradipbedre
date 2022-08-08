function createStack() {
  var items = [];
  var top = 0;

  //Push an item in the Stack
  this.push = function (element) {
    items[top++] = element;
  };
  //top++, first performs the operation then increment's the value

  //Pop an item from the Stack
  this.pop = function () {
    return items[--top];
  };
}

const stack = new createStack();
stack.push(10);
stack.push(5);
console.log(stack.pop());
console.log(stack.items);
