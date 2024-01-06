class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(item) {
    this.items.push(item);
  }

  dequeue() {
    if (this.isEmpty()) {
      return null; // Queue is empty
    }
    return this.items.shift();
  }

  peek() {
    if (this.isEmpty()) {
      return null; // Queue is empty
    }
    return this.items[0];
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

  search(item) {
    const index = this.items.indexOf(item);
    return index !== -1 ? index + 1 : -1; // 1-based index or -1 if not found
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

console.log('Dequeue:', queue.dequeue()); // Output: 10

console.log('Search for 20:', queue.search(20)); // Output: 1

queue.clear();
console.log('Size after clear:', queue.size()); // Output: 0
