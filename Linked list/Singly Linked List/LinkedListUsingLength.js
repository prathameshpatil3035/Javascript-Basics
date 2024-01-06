class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  insertAt(index, value) {
    if (index < 0 || index > this.length) {
      throw new Error('Index out of bounds');
    }

    if (index === 0) {
      this.prepend(value);
      return;
    }

    const newNode = new Node(value);
    let current = this.head;
    for (let i = 0; i < index - 1; i++) {
      current = current.next;
    }
    newNode.next = current.next;
    current.next = newNode;
    this.length++;
  }

  removeAt(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index out of bounds');
    }

    if (index === 0) {
      this.head = this.head.next;
    } else {
      let current = this.head;
      for (let i = 0; i < index - 1; i++) {
        current = current.next;
      }
      current.next = current.next.next;
    }

    this.length--;
  }

  removeFirst() {
    this.removeAt(0);
  }

  removeLast() {
    this.removeAt(this.length - 1);
  }

  getAt(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index out of bounds');
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    return current.value;
  }

  updateAt(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index out of bounds');
    }

    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }

    current.value = value;
  }

  indexOf(value) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.value === value) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }

  size() {
    return this.length;
  }

  isEmpty() {
    return this.length === 0;
  }

  toArray() {
    const result = [];
    let current = this.head;
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    return result;
  }
}

// Example usage
const linkedList = new SinglyLinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.prepend(5);
linkedList.insertAt(1, 15);
console.log(linkedList.toArray()); // [5, 15, 10, 20]
linkedList.updateAt(2, 25);
console.log(linkedList.toArray()); // [5, 15, 25, 20]
