class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertAtHead(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  insertAtTail(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  insertAfter(node, data) {
    const newNode = new Node(data);
    if (node === this.tail) {
      this.tail.next = newNode;
      this.tail = newNode;
    } else {
      newNode.next = node.next;
      node.next = newNode;
    }
  }

  deleteAtHead() {
    if (!this.head) return;
    this.head = this.head.next;
    if (!this.head) this.tail = null;
  }

  deleteAtTail() {
    if (!this.head) return;
    if (this.head === this.tail) {
      this.head = null;
      this.tail = null;
      return;
    }
    let current = this.head;
    while (current.next !== this.tail) {
      current = current.next;
    }
    current.next = null;
    this.tail = current;
  }

  deleteNode(node) {
    if (!this.head) return;
    if (node === this.head) {
      this.head = this.head.next;
      if (!this.head) this.tail = null;
      return;
    }
    let current = this.head;
    while (current.next !== node) {
      current = current.next;
    }
    current.next = node.next;
    if (node === this.tail) this.tail = current;
  }

  getNode(index) {
    if (index < 0) return null;
    let count = 0;
    let current = this.head;
    while (current && count < index) {
      current = current.next;
      count++;
    }
    return current;
  }

  contains(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  traverse(callback) {
    let current = this.head;
    while (current) {
      callback(current);
      current = current.next;
    }
  }

  printList() {
    this.traverse((node) => console.log(node.data));
  }

  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  isEmpty() {
    return this.head === null;
  }

  reverse() {
    let prev = null;
    let current = this.head;
    this.tail = current;
    while (current) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }
}

// Example usage
const linkedList = new LinkedList();

linkedList.insertAtHead(10);
linkedList.insertAtTail(20);
linkedList.insertAtTail(30);
linkedList.insertAfter(linkedList.head, 15);

linkedList.printList(); // Output: 10, 15, 20, 30

console.log('Size:', linkedList.size()); // Output: Size: 4

console.log('Contains 20:', linkedList.contains(20)); // Output: Contains 20: true
console.log('Contains 25:', linkedList.contains(25)); // Output: Contains 25: false

linkedList.reverse();
linkedList.printList(); // Output: 30, 20, 15, 10
