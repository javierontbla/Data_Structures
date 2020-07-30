// Binary Search Tree Implementation
class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    // create the new node with class
    const newNode = new Node(value);
    if (!this.root) {
      // if it's the first time we are inserting a value
      this.root = newNode;
    } else {
      let current = this.root;
      // infinite loop
      while (true) {
        if (newNode.value > current.value) {
          // right side
          if (!current.right) {
            // if we reach a null point assign that node to the newNode
            current.right = newNode;
            break;
          }
          // we assign current to new node everytime right isn't null
          current = current.right;
        } else {
          // left side
          if (!current.left) {
            // if we reach a null point assign that node to the newNode
            current.left = newNode;
            break;
          }
          // we assign current to new node everytime right isn't null
          current = current.left;
        }
      }
    }
  }

  lookup(value) {
    if (!this.root) return false;
    // assign current to root first to start searching
    let current = this.root;
    while (current) {
      if (value > current.value) {
        // right side
        if (current.value === value) return current;
        current = current.right;
      } else {
        // left side
        if (current.value === value) return current;
        current = current.left;
      }
    }
    return false;
  }

  remove(value) {
    if (!this.root) return;

    // locate node to be removed
    let toBeRemoved = this.lookup(value);
    let current = true;

    while (current) {
      // node has no children, so we just deleted it
      if (!toBeRemoved.left && !toBeRemoved.right) {
        toBeRemoved.value = null;
        current = null;
        // this means, the value to be deleted has 2 children
      } else if (toBeRemoved.left && toBeRemoved.right) {
        // keep track of parent node
        // find max of left sub-tree
        current = toBeRemoved.left;
        // get the max value of left sub-tree
        while (current.right) {
          current = current.right;
        }
        toBeRemoved.value = current.value;
        // remove duplicate value
      } else {
        if (toBeRemoved.right) {
          // | one child scenario |
          // assign the value of the right node to
          // node to be removed
          toBeRemoved.value = toBeRemoved.right.value;
          // convert node that got displaced to null
          toBeRemoved.right = null;
          current = false;
        } else if (toBeRemoved.left) {
          // | one child scenario |
          // assign the value of the left node to the
          // node to be removed
          toBeRemoved.value = toBeRemoved.left.value;
          current = false;
          // remove duplicate value
        }
      }
    }
  }

  print() {
    console.log(JSON.stringify(this.root));
  }
}

const tree = new BinarySearchTree();

tree.insert(9);
tree.insert(7);
tree.insert(19);
tree.insert(11);
tree.insert(10);
tree.insert(12);
tree.insert(21);
tree.insert(23);
tree.print();
tree.remove(7);
tree.print();
