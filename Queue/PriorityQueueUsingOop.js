class Node {
  constructor(data, priority) {
    this.data = data;
    this.priority = priority;
    this.next = null;
  }
}

class PriorityQueue {
  constructor() {
    this.front = null;
  }

  // Check if the priority queue is empty
  isEmpty() {
    return this.front === null;
  }

  // Add an element with a priority to the queue
  enqueue(item, priority) {
    const newNode = new Node(item, priority);

    if (this.isEmpty() || priority < this.front.priority) {
      newNode.next = this.front;
      this.front = newNode;
    } else {
      let current = this.front;

      while (current.next !== null && priority >= current.next.priority) {
        current = current.next;
      }

      newNode.next = current.next;
      current.next = newNode;
    }
  }

  // Remove and return the highest-priority element from the queue
  dequeue() {
    if (this.isEmpty()) {
      console.log('Priority queue is empty. Cannot dequeue.');
      return;
    }

    const removedItem = this.front.data;
    this.front = this.front.next;
    return removedItem;
  }

  // Peek at the highest-priority element without removing it
  peek() {
    if (this.isEmpty()) {
      console.log('Priority queue is empty. Cannot peek.');
      return;
    }

    return this.front.data;
  }

  // Print the elements of the priority queue
  display() {
    if (this.isEmpty()) {
      console.log('Priority queue is empty.');
      return;
    }

    let current = this.front;
    while (current !== null) {
      console.log(`Item: ${current.data}, Priority: ${current.priority}`);
      current = current.next;
    }
  }
}

// Usage example:
const pq = new PriorityQueue();

pq.enqueue('Task 1', 3);
pq.enqueue('Task 2', 1);
pq.enqueue('Task 3', 2);

pq.display();
/*
Output:
Item: Task 2, Priority: 1
Item: Task 3, Priority: 2
Item: Task 1, Priority: 3
*/

console.log('Dequeued:', pq.dequeue()); // Output: Dequeued: Task 2
console.log('Peek:', pq.peek()); // Output: Peek: Task 3
