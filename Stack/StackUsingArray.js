class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return 'Stack is empty';
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return 'Stack is empty';
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  clear() {
    this.items = [];
  }

  search(element) {
    const index = this.items.lastIndexOf(element);
    if (index !== -1) {
      return this.items.length - index;
    }
    return -1;
  }
}

// Example usage
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log('Peek:', stack.peek()); // Output: Peek: 30
console.log('Size:', stack.size()); // Output: Size: 3
console.log('Is Empty:', stack.isEmpty()); // Output: Is Empty: false

console.log('Pop:', stack.pop()); // Output: Pop: 30
console.log('Search 10:', stack.search(10)); // Output: Search 10: 2

stack.clear();
console.log('Is Empty:', stack.isEmpty()); // Output: Is Empty: true
