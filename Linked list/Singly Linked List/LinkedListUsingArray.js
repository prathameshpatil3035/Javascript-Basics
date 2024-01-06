class LinkedList {
  constructor() {
    this.list = [];
  }

  insertAtHead(data) {
    this.list.unshift(data);
  }

  insertAtTail(data) {
    this.list.push(data);
  }

  insertAfter(index, data) {
    this.list.splice(index + 1, 0, data);
  }

  deleteAtHead() {
    if (this.list.length === 0) {
      return null;
    }
    return this.list.shift();
  }

  deleteAtTail() {
    if (this.list.length === 0) {
      return null;
    }
    return this.list.pop();
  }

  deleteNode(index) {
    if (index < 0 || index >= this.list.length) {
      return null;
    }
    return this.list.splice(index, 1)[0];
  }

  getNode(index) {
    if (index < 0 || index >= this.list.length) {
      return null;
    }
    return this.list[index];
  }

  contains(data) {
    return this.list.includes(data);
  }

  traverse() {
    for (const item of this.list) {
      // Perform an operation on each item
      console.log(item);
    }
  }

  printList() {
    console.log(this.list.join(' -> '));
  }

  size() {
    return this.list.length;
  }

  isEmpty() {
    return this.list.length === 0;
  }

  reverse() {
    this.list.reverse();
  }

  getHead() {
    if (this.list.length === 0) {
      return null;
    }
    return this.list[0];
  }

  getTail() {
    if (this.list.length === 0) {
      return null;
    }
    return this.list[this.list.length - 1];
  }
}

// Example usage
const linkedList = new LinkedList();
linkedList.insertAtHead(10);
linkedList.insertAtTail(20);
linkedList.insertAtTail(30);
linkedList.printList(); // Output: 10 -> 20 -> 30
console.log(linkedList.size()); // Output: 3
console.log(linkedList.contains(20)); // Output: true
linkedList.reverse();
linkedList.printList(); // Output: 30 -> 20 -> 10
console.log(linkedList.getHead()); // Output: 30
console.log(linkedList.getTail()); // Output: 10
