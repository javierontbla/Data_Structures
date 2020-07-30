// Stack Implementation

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    console.log(this.top);
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.bottom = newNode;
    } else {
      newNode.next = this.top;
    }
    this.top = newNode;
    this.length++;
  }

  pop() {
    if (!this.top) return null;
    if (this.length === 1) this.bottom = null;
    const newTop = this.top.next;
    this.top = newTop;
    this.length--;
  }

  print() {
    return this;
    //     const arr = [];
    //     let current = this.top;
    //     while (current) {
    //       arr.push(current.value);
    //       current = current.next;
    //     }
    //     return arr;
  }
}

// const historyStack = new Stack();
// historyStack.push("google");
// historyStack.push("facebook");
// historyStack.pop();
// console.log(historyStack.print());
// historyStack.pop();
// console.log(historyStack.print());

// Using Array
class StackArray {
  constructor() {
    this.stack = [];
  }

  peek() {
    console.log(this.stack[this.stack.length - 1]);
  }

  push(value) {
    this.stack.push(value);
  }

  pop() {
    this.stack.pop();
  }

  print() {
    console.log(this.stack);
  }
}

const arrayStack = new StackArray();
arrayStack.push("facebook");
arrayStack.push("youtube");
arrayStack.push("google");
arrayStack.print();
arrayStack.pop();
arrayStack.print();
