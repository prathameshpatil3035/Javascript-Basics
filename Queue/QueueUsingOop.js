class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  enqueue(data) {
    const newNode = new Node(data);
    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }
    this.length++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return null; // Queue is empty
    }
    const removedNode = this.front;
    this.front = this.front.next;
    removedNode.next = null;
    this.length--;
    return removedNode.data;
  }

  peek() {
    return this.front ? this.front.data : null;
  }

  isEmpty() {
    return this.length === 0;
  }

  size() {
    return this.length;
  }

  clear() {
    this.front = null;
    this.rear = null;
    this.length = 0;
  }

  search(data) {
    let currentNode = this.front;
    let position = 1;
    while (currentNode) {
      if (currentNode.data === data) {
        return position;
      }
      currentNode = currentNode.next;
      position++;
    }
    return -1; // Element not found
  }
}

// Example usage
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log('Front item:', queue.peek()); // Output: 10

console.log('Size:', queue.size()); // Output: 3

console.log('Is empty:', queue.isEmpty()); // Output: false

console.log('Search for 20:', queue.search(20)); // Output: 2

console.log('Dequeue:', queue.dequeue()); // Output: 10

queue.clear();
console.log('Size after clear:', queue.size()); // Output: 0
