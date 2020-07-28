// Linked List Class

// creating a class to avoid repeating code multiple times
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

// doubly - linked list
class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;
    this.length += 1;
  }

  insert(index, value) {
    if (index === 0) {
      return this.prepend(value);
    } else if (index === this.length) {
      return this.append(value);
    } else {
      const newNode = new Node(value);
      let currentNode = this.head;

      for (let i = 1; i < this.length; i++) {
        if (i === index) {
          // newNode.next --> oldNode to be replaced, to keep order of all other nodes
          newNode.next = currentNode.next;
          newNode.prev = currentNode;
          currentNode.next.prev = newNode;
          // currentNode.next (this is the parent node) --> assign new inserted node
          currentNode.next = newNode;

          // exit loop to avoid unnecessary replacements
          break;
        }
        currentNode = currentNode.next;
      }
    }
    this.length += 1;
    return this;
  }

  remove(index) {
    let currentNode = this.head;

    for (let i = 1; i < this.length; i++) {
      if (i === index) {
        const toBeRemoved = currentNode.next;
        currentNode.next = toBeRemoved.next;
      }
      currentNode = currentNode.next;
    }
    this.length -= 1;
  }

  reverse() {
    const reversedLinkedList = [];
    let current = this.head;

    while (current) {
      reversedLinkedList.push(current);
      current = current.next;
    }

    console.log(reversedLinkedList);

    reversedLinkedList.reverse();
    console.log(reversedLinkedList.length);
    for (let i = 0; i < reversedLinkedList.length; i++) {
      if (i === reversedLinkedList.length - 1) {
        reversedLinkedList[i].next = null;
      }
      reversedLinkedList[i].next = reversedLinkedList[i + 1];
    }
  }

  print() {
    const arr = [];
    let current = this.head;
    while (current) {
      arr.push(current.value);
      current = current.next;
    }
    return arr;
  }
}

const newDoublyLinkedList = new DoublyLinkedList(10);

newDoublyLinkedList.append(21);
newDoublyLinkedList.append(101);
newDoublyLinkedList.insert(1, 99);
//console.log(newDoublyLinkedList.print());
newDoublyLinkedList.reverse();
//console.log(newDoublyLinkedList.print());
