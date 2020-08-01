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
    if (!this.root) return false;

    let parent = null;
    let current = this.root;

    while (current && current.value !== value) {
      // parent gets stored before current value changed again
      // in this way, if we find current node down here
      // the parent var doesn't get re-assigned
      parent = current;
      if (current.value > value) {
        current = current.left;
      } else if (current.value < value) {
        current = current.right;
      }
    }

    console.log("parent", parent);
    console.log("current", current);
    // if there is no node with that value
    if (!current) return false;

    // node with no children
    if (!current.left && !current.right) {
      // check if it's right or left side of parent
      if (parent.left) {
        parent.left = null;
      } else if (parent.right) {
        parent.right = null;
      }
    }

    // two children
    if (current.left && current.right) {
      let tempParent = current;
      let tempCurrent = current.right;

      // find min in right sub-tree
      while (tempCurrent.left) {
        // when we find the min value
        // the parent node store the last value before getting
        // re-assigned again
        tempParent = tempCurrent;
        tempCurrent = tempCurrent.left;
      }

      // min value of right sub-tree gets assigned to node to be removed
      current.value = tempCurrent.value;
      tempParent.left = null;

      if (tempCurrent.right) {
        tempParent.left = tempCurrent.right;
        return true;
      } else if (!tempCurrent.right) {
        tempParent.left = null;
        return true;
      }
    }

    // only right child
    if (current.right) {
      // right side of parent
      if (parent.right.value === value) {
        parent.right = current.right;
        return true;
      } else {
        // left side of parent
        parent.left = current.right;
        return true;
      }

      // only left child
    } else if (current.left) {
      // right side of parent
      if (parent.right.value === value) {
        parent.right = current.left;
        return true;
      } else {
        // left side of parent
        parent.left = curren.left;
        return true;
      }
    }
  }

  print() {
    console.log(JSON.stringify(this.root));
  }
}

const tree = new BinarySearchTree();

tree.insert(9);
tree.insert(21);
tree.insert(5);
tree.insert(8);
tree.insert(2);
tree.insert(17);
tree.insert(26);
tree.insert(1);
tree.insert(3);
tree.insert(0);
tree.remove(5);
tree.print();
