// Graph Implementation

class Graph {
  constructor() {
    this.numberOfNodes = 0;
    this.adjacentList = {};
  }

  insert(node) {
    // each node start with an empty list
    this.adjacentList[node] = [];
    this.numberOfNodes++;
  }

  edge(node1, node2) {
    // add to both nodes
    // because is an undirected graph
    this.adjacentList[node1].push(node2);
    this.adjacentList[node2].push(node1);
  }

  print() {
    const arr = Object.entries(this.adjacentList);
    arr.forEach((node, indx) => {
      let vertex = node[0];
      // show all node connections
      console.log(`${vertex} --> ${node[1]}`);
    });
  }
}

const myGraph = new Graph();

myGraph.insert("0");
myGraph.insert("1");
myGraph.insert("2");
myGraph.insert("3");
myGraph.insert("4");
myGraph.insert("5");
myGraph.insert("6");
myGraph.edge("3", "1");
myGraph.edge("3", "4");
myGraph.edge("4", "2");
myGraph.edge("4", "5");
myGraph.edge("1", "2");
myGraph.edge("1", "0");
myGraph.edge("0", "2");
myGraph.edge("6", "5");
myGraph.print();
