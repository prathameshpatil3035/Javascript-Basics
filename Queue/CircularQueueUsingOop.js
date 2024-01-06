class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularQueue {
  constructor(size) {
    this.size = size;
    this.front = null;
    this.rear = null;
    this.currentSize = 0;
  }

  // Check if the queue is empty
  isEmpty() {
    return this.currentSize === 0;
  }

  // Check if the queue is full
  isFull() {
    return this.currentSize === this.size;
  }

  // Add an element to the rear of the queue
  enqueue(item) {
    if (this.isFull()) {
      console.log('Queue is full. Cannot enqueue.');
      return;
    }

    const newNode = new Node(item);

    if (this.isEmpty()) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.next = newNode;
      this.rear = newNode;
    }

    // Make it circular
    this.rear.next = this.front;
    this.currentSize++;
  }

  // Remove and return an element from the front of the queue
  dequeue() {
    if (this.isEmpty()) {
      console.log('Queue is empty. Cannot dequeue.');
      return;
    }

    const removedItem = this.front.data;

    if (this.front === this.rear) {
      // Reset the queue when there's only one element
      this.front = null;
      this.rear = null;
    } else {
      this.front = this.front.next;
      this.rear.next = this.front; // Update the circular link
    }

    this.currentSize--;
    return removedItem;
  }

  // Peek at the front element without removing it
  peek() {
    if (this.isEmpty()) {
      console.log('Queue is empty. Cannot peek.');
      return;
    }

    return this.front.data;
  }

  // Print the elements of the queue
  display() {
    if (this.isEmpty()) {
      console.log('Queue is empty.');
      return;
    }

    let current = this.front;
    do {
      console.log(current.data);
      current = current.next;
    } while (current !== this.front);
  }
}

// Usage example:
const cq = new CircularQueue(5);

cq.enqueue(1);
cq.enqueue(2);
cq.enqueue(3);
cq.enqueue(4);
cq.display(); // Output: 1 2 3 4

cq.dequeue();
cq.display(); // Output: 2 3 4

cq.enqueue(5);
cq.enqueue(6);
cq.display(); // Output: 2 3 4 5 6

cq.enqueue(7); // Queue is full. Cannot enqueue.

console.log('Front element:', cq.peek()); // Output: Front element: 2
