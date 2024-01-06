class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
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
    if (index === this.length) {
      this.append(value);
      return;
    }

    const newNode = new Node(value);
    const prevNode = this.getNodeAtIndex(index - 1);
    const nextNode = prevNode.next;

    newNode.prev = prevNode;
    newNode.next = nextNode;
    prevNode.next = newNode;
    nextNode.prev = newNode;

    this.length++;
  }

  removeAt(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index out of bounds');
    }

    if (index === 0) {
      this.head = this.head.next;
      if (this.head) {
        this.head.prev = null;
      } else {
        this.tail = null;
      }
    } else if (index === this.length - 1) {
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      const nodeToRemove = this.getNodeAtIndex(index);
      const prevNode = nodeToRemove.prev;
      const nextNode = nodeToRemove.next;
      prevNode.next = nextNode;
      nextNode.prev = prevNode;
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
    return this.getNodeAtIndex(index).value;
  }

  updateAt(index, value) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index out of bounds');
    }
    this.getNodeAtIndex(index).value = value;
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

  reverse() {
    let current = this.head;
    let prev = null;
    while (current) {
      const next = current.next;
      current.next = prev;
      current.prev = next;
      prev = current;
      current = next;
    }
    [this.head, this.tail] = [this.tail, this.head];
  }

  getNodeAtIndex(index) {
    if (index < 0 || index >= this.length) {
      throw new Error('Index out of bounds');
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }
}

// Example usage
const linkedList = new DoublyLinkedList();
linkedList.append(10);
linkedList.append(20);
linkedList.prepend(5);
linkedList.insertAt(1, 15);
console.log(linkedList.toArray()); // [5, 15, 10, 20]
linkedList.updateAt(2, 25);
console.log(linkedList.toArray()); // [5, 15, 25, 20]
linkedList.removeAt(1);
console.log(linkedList.toArray()); // [5, 25, 20]
