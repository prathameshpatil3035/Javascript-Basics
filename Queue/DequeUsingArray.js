class Deque {
  constructor() {
    this.items = [];
  }

  addFront(item) {
    this.items.unshift(item);
  }

  addBack(item) {
    this.items.push(item);
  }

  removeFront() {
    if (this.isEmpty()) {
      return null; // Deque is empty
    }
    return this.items.shift();
  }

  removeBack() {
    if (this.isEmpty()) {
      return null; // Deque is empty
    }
    return this.items.pop();
  }

  peekFront() {
    if (this.isEmpty()) {
      return null; // Deque is empty
    }
    return this.items[0];
  }

  peekBack() {
    if (this.isEmpty()) {
      return null; // Deque is empty
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

  search(item) {
    const index = this.items.indexOf(item);
    return index !== -1 ? index + 1 : -1; // 1-based index or -1 if not found
  }
}

// Example usage
const deque = new Deque();
deque.addBack(10);
deque.addBack(20);
deque.addFront(5);

console.log('Front item:', deque.peekFront()); // Output: 5
console.log('Back item:', deque.peekBack()); // Output: 20

console.log('Search for 10:', deque.search(10)); // Output: 2

deque.removeFront();
console.log('Size after removing front:', deque.size()); // Output: 1

deque.removeBack();
console.log('Size after removing back:', deque.size()); // Output: 0
