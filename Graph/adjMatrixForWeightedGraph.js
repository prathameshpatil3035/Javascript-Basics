class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.adjMatrix = Array.from({ length: vertices }, () =>
      Array(vertices).fill(Infinity)
    );
    // Set diagonal to 0, as the distance from a vertex to itself is 0
    for (let i = 0; i < vertices; i++) {
      this.adjMatrix[i][i] = 0;
    }
  }

  addEdge(v1, v2, weight) {
    if (v1 >= 0 && v1 < this.vertices && v2 >= 0 && v2 < this.vertices) {
      this.adjMatrix[v1][v2] = weight;
      this.adjMatrix[v2][v1] = weight; // For an undirected graph
    } else {
      console.log("Invalid vertex index");
    }
  }

  display() {
    for (let i = 0; i < this.vertices; i++) {
      let row = "";
      for (let j = 0; j < this.vertices; j++) {
        row +=
          (this.adjMatrix[i][j] === Infinity ? "∞" : this.adjMatrix[i][j]) +
          " ";
      }
      console.log(row.trim());
    }
  }
}

// Example usage:
const g = new Graph(4);
g.addEdge(0, 1, 2);
g.addEdge(0, 2, 4);
g.addEdge(1, 3, 6);
g.addEdge(2, 3, 8);

console.log("Adjacency Matrix:");
g.display();

// Adjacency Matrix:
// 0 2 4 Infinity
// 2 0 Infinity 6
// 4 Infinity 0 8
// Infinity 6 8 0
