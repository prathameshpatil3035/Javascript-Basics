class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class Deque {
  constructor() {
    this.front = null;
    this.back = null;
    this.size = 0;
  }

  addFront(data) {
    const newNode = new Node(data);
    if (!this.front) {
      this.front = newNode;
      this.back = newNode;
    } else {
      newNode.next = this.front;
      this.front.prev = newNode;
      this.front = newNode;
    }
    this.size++;
  }

  addBack(data) {
    const newNode = new Node(data);
    if (!this.back) {
      this.front = newNode;
      this.back = newNode;
    } else {
      newNode.prev = this.back;
      this.back.next = newNode;
      this.back = newNode;
    }
    this.size++;
  }

  removeFront() {
    if (!this.front) {
      return null; // Deque is empty
    }
    const removedData = this.front.data;
    if (this.front === this.back) {
      this.front = null;
      this.back = null;
    } else {
      this.front = this.front.next;
      this.front.prev = null;
    }
    this.size--;
    return removedData;
  }

  removeBack() {
    if (!this.back) {
      return null; // Deque is empty
    }
    const removedData = this.back.data;
    if (this.front === this.back) {
      this.front = null;
      this.back = null;
    } else {
      this.back = this.back.prev;
      this.back.next = null;
    }
    this.size--;
    return removedData;
  }

  peekFront() {
    return this.front ? this.front.data : null;
  }

  peekBack() {
    return this.back ? this.back.data : null;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }

  clear() {
    this.front = null;
    this.back = null;
    this.size = 0;
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
const deque = new Deque();
deque.addBack(10);
deque.addBack(20);
deque.addFront(5);

console.log('Front item:', deque.peekFront()); // Output: 5
console.log('Back item:', deque.peekBack()); // Output: 20

deque.removeFront();
console.log('Size after removing front:', deque.getSize()); // Output: 1

deque.removeBack();
console.log('Size after removing back:', deque.getSize()); // Output: 0

console.log('Search for 10:', deque.search(10)); // Output: -1 (Not found)
