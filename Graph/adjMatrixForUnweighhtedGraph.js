class Graph {
  constructor(vertices) {
    this.vertices = vertices;
    this.adjMatrix = Array.from({ length: vertices }, () =>
      Array(vertices).fill(0)
    );
  }

  addEdge(v1, v2) {
    if (v1 >= 0 && v1 < this.vertices && v2 >= 0 && v2 < this.vertices) {
      this.adjMatrix[v1][v2] = 1;
      this.adjMatrix[v2][v1] = 1; // For an undirected graph
    } else {
      console.log("Invalid vertex index");
    }
  }

  display() {
    for (let i = 0; i < this.vertices; i++) {
      let row = "";
      for (let j = 0; j < this.vertices; j++) {
        row += this.adjMatrix[i][j] + " ";
      }
      console.log(row.trim());
    }
  }
}

// Example usage:
const g = new Graph(4);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);

console.log("Adjacency Matrix:");
g.display();

// Adjacency Matrix:
// 0 1 1 0
// 1 0 0 1
// 1 0 0 0
// 0 1 0 0
