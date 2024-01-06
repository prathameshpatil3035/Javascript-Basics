class CircularQueue {
  constructor(size) {
    this.size = size;
    this.queue = new Array(size);
    this.front = -1;
    this.rear = -1;
  }

  // Check if the queue is empty
  isEmpty() {
    return this.front === -1 && this.rear === -1;
  }

  // Check if the queue is full
  isFull() {
    return (this.rear + 1) % this.size === this.front;
  }

  // Add an element to the rear of the queue
  enqueue(item) {
    if (this.isFull()) {
      console.log('Queue is full. Cannot enqueue.');
      return;
    }

    if (this.isEmpty()) {
      this.front = 0;
      this.rear = 0;
    } else {
      this.rear = (this.rear + 1) % this.size;
    }

    this.queue[this.rear] = item;
  }

  // Remove and return an element from the front of the queue
  dequeue() {
    if (this.isEmpty()) {
      console.log('Queue is empty. Cannot dequeue.');
      return;
    }

    const removedItem = this.queue[this.front];

    if (this.front === this.rear) {
      // Reset the queue when there's only one element
      this.front = -1;
      this.rear = -1;
    } else {
      this.front = (this.front + 1) % this.size;
    }

    return removedItem;
  }

  // Peek at the front element without removing it
  peek() {
    if (this.isEmpty()) {
      console.log('Queue is empty. Cannot peek.');
      return;
    }

    return this.queue[this.front];
  }

  // Print the elements of the queue
  display() {
    if (this.isEmpty()) {
      console.log('Queue is empty.');
      return;
    }

    let current = this.front;
    while (true) {
      console.log(this.queue[current]);
      if (current === this.rear) break;
      current = (current + 1) % this.size;
    }
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
