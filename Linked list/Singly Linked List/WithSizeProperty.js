class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // Insertion Methods
  insertAtHead(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
  }

  insertAtTail(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  insertAfter(node, data) {
    if (!node) return;
    const newNode = new Node(data);
    newNode.next = node.next;
    node.next = newNode;
    this.size++;
  }

  // Deletion Methods
  deleteAtHead() {
    if (!this.head) return;
    this.head = this.head.next;
    this.size--;
  }

  deleteNode(node) {
    if (!node || !this.head) return;
    let current = this.head;
    while (current.next !== node) {
      current = current.next;
    }
    current.next = node.next;
    this.size--;
  }

  // Search/Access Methods
  getNode(index) {
    if (index < 0 || !this.head) return null;
    let current = this.head;
    for (let i = 0; i < index && current; i++) {
      current = current.next;
    }
    return current;
  }

  contains(data) {
    let current = this.head;
    while (current) {
      if (current.data === data) return true;
      current = current.next;
    }
    return false;
  }

  // Traversal Methods
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

  // Length/Size Methods
  getSize() {
    return this.size;
  }

  isEmpty() {
    return this.size === 0;
  }

  // Reverse method
  reverse() {
    let prev = null;
    let current = this.head;
    while (current) {
      const next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    }
    this.head = prev;
  }
}

// Example usage
const list = new LinkedList();
list.insertAtHead(10);
list.insertAtTail(20);
list.insertAtTail(30);
list.printList();
console.log('Size:', list.getSize());
