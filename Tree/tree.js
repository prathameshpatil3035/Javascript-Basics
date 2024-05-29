class Node {
  constructor(value) {
    this.data = value;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(value) {
    this.root = this.insertRecursive(this.root, value);
  }

  insertRecursive(root, value) {
    if (root === null) {
      return new Node(value);
    }

    if (value < root.data) {
      root.left = this.insertRecursive(root.left, value);
    } else if (value > root.data) {
      root.right = this.insertRecursive(root.right, value);
    }

    return root;
  }

  search(value) {
    return this.searchRecursive(this.root, value);
  }

  searchRecursive(root, value) {
    if (root === null) {
      return false;
    }
    if (root.data === value) {
      return true;
    }
    if (value < root.data) {
      return this.searchRecursive(root.left, value);
    } else {
      return this.searchRecursive(root.right, value);
    }
  }

  //other one search method
  search(value) {
    return this.searchRecursive(this.root, value);
  }

  searchRecursive(root, value) {
    if (root === null || root.data === value) {
      return root;
    }

    if (value < root.data) {
      return this.searchRecursive(root.left, value);
    } else {
      return this.searchRecursive(root.right, value);
    }
  }

  remove(value) {
    this.root = this.deleteRecursive(this.root, value);
  }

  deleteRecursive(root, value) {
    if (root === null) {
      return null;
    }

    if (value < root.data) {
      root.left = this.deleteRecursive(root.left, value);
    } else if (value > root.data) {
      root.right = this.deleteRecursive(root.right, value);
    } else {
      // Case 1: No child or only one child
      if (root.left === null) {
        let temp = root.right;
        root = null;
        return temp;
      } else if (root.right === null) {
        let temp = root.left;
        root = null;
        return temp;
      }

      // Case 2: Two children
      let temp = this.findMin(root.right);
      root.data = temp.data;
      root.right = this.deleteRecursive(root.right, temp.data);
    }
    return root;
  }

  findMin(root) {
    if (root === null) {
      return null;
    }
    while (root.left !== null) {
      root = root.left;
    }
    return root;
  }

  findMax(root) {
    if (root === null) {
      return null;
    }
    while (root.right !== null) {
      root = root.right;
    }
    return root;
  }

  height() {
    return this.heightRecursive(this.root);
  }

  heightRecursive(root) {
    if (root === null) {
      return -1;
    }
    let leftHeight = this.heightRecursive(root.left);
    let rightHeight = this.heightRecursive(root.right);
    return Math.max(leftHeight, rightHeight) + 1;
  }

  levelOrder() {
    let result = [];
    if (this.root === null) {
      return result;
    }

    let queue = [this.root];

    while (queue.length > 0) {
      let current = queue.shift();
      result.push(current.data);
      if (current.left !== null) {
        queue.push(current.left);
      }
      if (current.right !== null) {
        queue.push(current.right);
      }
    }
    return result;
  }

  inOrder() {
    let result = [];
    this.inOrderRecursive(this.root, result);
    return result;
  }

  inOrderRecursive(root, result) {
    if (root !== null) {
      this.inOrderRecursive(root.left, result);
      result.push(root.data);
      this.inOrderRecursive(root.right, result);
    }
  }

  preOrder() {
    let result = [];
    this.preOrderRecursive(this.root, result);
    return result;
  }

  preOrderRecursive(root, result) {
    if (root !== null) {
      result.push(root.data);
      this.preOrderRecursive(root.left, result);
      this.preOrderRecursive(root.right, result);
    }
  }

  postOrder() {
    let result = [];
    this.postOrderRecursive(this.root, result);
    return result;
  }

  postOrderRecursive(root, result) {
    if (root !== null) {
      this.postOrderRecursive(root.left, result);
      this.postOrderRecursive(root.right, result);
      result.push(root.data);
    }
  }

  minValue() {
    let minNode = this.findMin(this.root);
    if (minNode !== null) {
      return minNode.data;
    }
    throw new Error("Tree is empty");
  }

  maxValue() {
    let maxNode = this.findMax(this.root);
    if (maxNode !== null) {
      return maxNode.data;
    }
    throw new Error("Tree is empty");
  }

  isBST() {
    return this.isBSTUtil(
      this.root,
      Number.MIN_SAFE_INTEGER,
      Number.MAX_SAFE_INTEGER
    );
  }

  isBSTUtil(root, min, max) {
    if (root === null) {
      return true;
    }

    if (root.data < min || root.data > max) {
      return false;
    }

    return (
      this.isBSTUtil(root.left, min, root.data - 1) &&
      this.isBSTUtil(root.right, root.data + 1, max)
    );
  }

  successor(value) {
    let current = this.root;
    let successor = null;

    while (current !== null) {
      if (current.data > value) {
        successor = current;
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return successor;
  }
}

// Usage
let tree = new BST();
tree.insert(50);
tree.insert(30);
tree.insert(20);
tree.insert(40);
tree.insert(70);
tree.insert(60);
tree.insert(80);

// Searching for a value
let searchValue = 60;
let isFound = tree.search(searchValue);
console.log(
  "Search for",
  searchValue + ":",
  isFound ? "Node found" : "Node not found"
);

console.log("Level Order Traversal:", tree.levelOrder());
console.log("Inorder Traversal:", tree.inOrder());
console.log("Preorder Traversal:", tree.preOrder());
console.log("Postorder Traversal:", tree.postOrder());
console.log("Height of the tree:", tree.height());
console.log("Minimum value:", tree.minValue());
console.log("Maximum value:", tree.maxValue());
console.log("Is BST:", tree.isBST() ? "Yes" : "No");

let value = 30;
let successor = tree.successor(value);
console.log(
  "Successor of",
  value + ":",
  successor ? successor.data : "No successor found"
);

// Deleting a node
tree.remove(20);
console.log("Inorder Traversal after deleting 20:", tree.inOrder());
