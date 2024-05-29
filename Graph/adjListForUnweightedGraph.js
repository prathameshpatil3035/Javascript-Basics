class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.adjList = new Map();
    for (let i = 0; i < vertices; i++) {
      this.adjList.set(i, []);
    }
  }

  addEdge(v1, v2) {
    // Adding an edge between vertex v1 and v2
    if (v1 >= 0 && v1 < this.vertices && v2 >= 0 && v2 < this.vertices) {
      this.adjList.get(v1).push(v2);
      this.adjList.get(v2).push(v1); // For undirected graph
    } else {
      console.log("Invalid vertex index");
    }
  }

  display() {
    for (let [vertex, neighbours] of this.adjList.entries()) {
      console.log(vertex + " -> " + neighbours.join(" "));
    }
  }
}

// Example usage:
const g = new Graph(4);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);

console.log("Adjacency List:");
g.display();

// Adjacency List:
// 0 -> 1 2
// 1 -> 0 3
// 2 -> 0
// 3 -> 1
