class CrazyQueue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  push(value) {
    // get length to check if stack1 is empty
    const length = this.stack1.length;
    // if length is 0, this will never execute
    // this means, no element has been dequeue
    for (let i = 0; i < length; i++) {
      this.stack2.push(this.stack1.pop());
    }
    this.stack2.push(value);
    console.log(this);
  }

  pop() {
    const length = this.stack2.length;
    for (let i = 0; i < length; i++) {
      // all elements get passed to the other stack
      // in reverse order
      this.stack1.push(this.stack2.pop());
    }
    // the last element of stack2, but first of stack1
    this.stack1.pop();
    console.log(this);
  }
  peek() {
    if (this.stack2.length > 0) {
      return this.stack2[0];
    }
    // this.last.length === 0
    // this means, the last element of stack2 is the first of stack1
    return this.stack1[this.stack1.length - 1];
  }
}

// const myQueue = new CrazyQueue();
// myQueue.enqueue("Joy");
// myQueue.enqueue("Matt");
// myQueue.dequeue("Joy");

// My Implementation
class MyQueue {
  constructor() {
    this.add = false;
    this.remove = false;
    this.stack = [];
  }

  push(value) {
    // reverse if we already remove one element
    if (this.remove) this.stack.reverse();
    this.stack.push(value);
    this.add = true;
    this.remove = false;
    return this.stack;
  }

  pop() {
    // reverse if we already add one element
    if (this.add) this.stack.reverse();
    const element = this.stack.pop();
    this.remove = true;
    this.add = false;
    return element;
  }
  peek() {
    if (this.stack.length === 0) return "stack is empty";
    if (this.add) return this.stack[0];
    if (this.remove) return this.stack[this.stack.length - 1];
  }
  empty() {
    if (this.stack.length === 0) return true;
    return false;
  }
}

const leetQueue = new MyQueue();
leetQueue.enqueue("google");
leetQueue.enqueue("youtube");
leetQueue.enqueue("facebook");
leetQueue.dequeue();
leetQueue.enqueue("facebook");
