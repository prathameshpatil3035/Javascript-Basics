class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  // Check if the priority queue is empty
  isEmpty() {
    return this.queue.length === 0;
  }

  // Add an element with a priority to the queue
  enqueue(item, priority) {
    this.queue.push({ item, priority });
    this.queue.sort((a, b) => a.priority - b.priority);
  }

  // Remove and return the highest-priority element from the queue
  dequeue() {
    if (this.isEmpty()) {
      console.log('Priority queue is empty. Cannot dequeue.');
      return;
    }

    return this.queue.shift().item;
  }

  // Peek at the highest-priority element without removing it
  peek() {
    if (this.isEmpty()) {
      console.log('Priority queue is empty. Cannot peek.');
      return;
    }

    return this.queue[0].item;
  }

  // Print the elements of the priority queue
  display() {
    if (this.isEmpty()) {
      console.log('Priority queue is empty.');
      return;
    }

    for (const { item, priority } of this.queue) {
      console.log(`Item: ${item}, Priority: ${priority}`);
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
