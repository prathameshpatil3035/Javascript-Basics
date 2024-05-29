class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.adjList = new Map();
    for (let i = 0; i < vertices; i++) {
      this.adjList.set(i, []);
    }
  }

  addEdge(v1, v2, weight) {
    // Adding an edge between vertex v1 and v2 with weight
    if (v1 >= 0 && v1 < this.vertices && v2 >= 0 && v2 < this.vertices) {
      this.adjList.get(v1).push({ vertex: v2, weight: weight });
      this.adjList.get(v2).push({ vertex: v1, weight: weight }); // For undirected graph
    } else {
      console.log("Invalid vertex index");
    }
  }

  display() {
    for (let [vertex, neighbours] of this.adjList.entries()) {
      let neighbourStr = neighbours
        .map((n) => `${n.vertex} (${n.weight})`)
        .join(" ");
      console.log(vertex + " -> " + neighbourStr);
    }
  }
}

// Example usage:
const g = new Graph(4);
g.addEdge(0, 1, 2);
g.addEdge(0, 2, 3);
g.addEdge(1, 3, 1);

console.log("Adjacency List:");
g.display();

// Adjacency List:
// 0 -> 1 (2) 2 (3)
// 1 -> 0 (2) 3 (1)
// 2 -> 0 (3)
// 3 -> 1 (1)
