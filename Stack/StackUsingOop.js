class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.length = 0;
  }

  // Add an element to the top of the stack
  push(data) {
    const newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
    this.length++;
  }

  // Remove and return the top element from the stack
  pop() {
    if (!this.top) {
      return null; // Stack is empty
    }
    const poppedNode = this.top;
    this.top = this.top.next;
    poppedNode.next = null;
    this.length--;
    return poppedNode.data;
  }

  // Return the top element without removing it
  peek() {
    return this.top ? this.top.data : null;
  }

  // Check if the stack is empty
  isEmpty() {
    return this.length === 0;
  }

  // Return the number of elements in the stack
  size() {
    return this.length;
  }

  // Clear all elements from the stack
  clear() {
    this.top = null;
    this.length = 0;
  }

  // Search for an element in the stack and return its position (1-based index)
  // Returns -1 if the element is not found
  search(data) {
    let currentNode = this.top;
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
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log('Top element:', stack.peek()); // Output: 30

console.log('Size:', stack.size()); // Output: 3

console.log('Is empty:', stack.isEmpty()); // Output: false

console.log('Search for 20:', stack.search(20)); // Output: 2

stack.pop();
console.log('Size after pop:', stack.size()); // Output: 2

stack.clear();
console.log('Size after clear:', stack.size()); // Output: 0
