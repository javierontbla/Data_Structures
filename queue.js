// Queue Implementation

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  // first item
  peek() {
    console.log(this.first);
  }
  // put in
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
    } else {
      this.last.next = newNode;
    }
    this.last = newNode;
    this.length++;
  }
  // put out
  dequeue() {
    if (this.length === 0) return;
    if (this.length === 1) this.last = null;

    const newStart = this.first.next;
    this.first = newStart;
    this.length--;
  }

  print() {
    console.log(this);
  }
}

const myQueue = new Queue();

// myQueue.enqueue("google");
// myQueue.print();
// myQueue.enqueue("facebook");
// myQueue.print();
// myQueue.enqueue("youtube");
// myQueue.print();
// myQueue.dequeue();
// myQueue.print();
// myQueue.dequeue();
// myQueue.print();

const str = "a ";
console.log(str.length);
