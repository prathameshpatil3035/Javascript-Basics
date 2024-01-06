class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class CircularLinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      newNode.next = this.head;
    } else {
      let current = this.head;
      while (current.next !== this.head) {
        current = current.next;
      }
      current.next = newNode;
      newNode.next = this.head;
    }
  }

  prepend(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      newNode.next = this.head;
    } else {
      let current = this.head;
      while (current.next !== this.head) {
        current = current.next;
      }
      current.next = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  insertAfter(targetData, newData) {
    const newNode = new Node(newData);
    if (!this.head) {
      return;
    }
    let current = this.head;
    do {
      if (current.data === targetData) {
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    } while (current !== this.head);
  }

  insertBefore(targetData, newData) {
    const newNode = new Node(newData);
    if (!this.head) {
      return;
    }
    let current = this.head;
    let prev = null;
    do {
      if (current.data === targetData) {
        if (prev === null) {
          newNode.next = current;
          let lastNode = this.head;
          while (lastNode.next !== this.head) {
            lastNode = lastNode.next;
          }
          lastNode.next = newNode;
          this.head = newNode;
        } else {
          newNode.next = current;
          prev.next = newNode;
        }
        return;
      }
      prev = current;
      current = current.next;
    } while (current !== this.head);
  }

  remove(data) {
    if (!this.head) {
      return;
    }
    if (this.head.data === data) {
      if (this.head.next === this.head) {
        this.head = null;
      } else {
        let current = this.head;
        while (current.next !== this.head) {
          current = current.next;
        }
        current.next = this.head.next;
        this.head = this.head.next;
      }
    } else {
      let current = this.head;
      let prev = null;
      do {
        if (current.data === data) {
          prev.next = current.next;
          return;
        }
        prev = current;
        current = current.next;
      } while (current !== this.head);
    }
  }

  update(oldData, newData) {
    if (!this.head) {
      return;
    }
    let current = this.head;
    do {
      if (current.data === oldData) {
        current.data = newData;
        return;
      }
      current = current.next;
    } while (current !== this.head);
  }

  reverse() {
    if (!this.head || this.head.next === this.head) {
      return;
    }
    let prev = null;
    let current = this.head;
    let next = null;
    do {
      next = current.next;
      current.next = prev;
      prev = current;
      current = next;
    } while (current !== this.head);
    this.head.next = prev;
    this.head = prev;
  }

  display() {
    if (!this.head) {
      return 'Circular linked list is empty.';
    }
    let result = '';
    let current = this.head;
    do {
      result += current.data + ' -> ';
      current = current.next;
    } while (current !== this.head);
    return result + '...';
  }

  traverse(callback) {
    if (!this.head) {
      return;
    }
    let current = this.head;
    do {
      callback(current.data);
      current = current.next;
    } while (current !== this.head);
  }

  size() {
    if (!this.head) {
      return 0;
    }
    let count = 0;
    let current = this.head;
    do {
      count++;
      current = current.next;
    } while (current !== this.head);
    return count;
  }

  isEmpty() {
    return this.head === null;
  }

  toArray() {
    const array = [];
    if (!this.head) {
      return array;
    }
    let current = this.head;
    do {
      array.push(current.data);
      current = current.next;
    } while (current !== this.head);
    return array;
  }

  //Other Methods -

  indexOf(data) {
    if (!this.head) {
      return -1;
    }
    let current = this.head;
    let index = 0;
    do {
      if (current.data === data) {
        return index;
      }
      current = current.next;
      index++;
    } while (current !== this.head);
    return -1;
  }

  // Get the data at a specific index
  getDataAt(index) {
    const size = this.size();
    if (index < 0 || index >= size) {
      return null;
    }
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.data;
  }

  // Remove the node at a specific index
  removeAt(index) {
    const size = this.size();
    if (index < 0 || index >= size) {
      return;
    }
    if (index === 0) {
      if (size === 1) {
        this.head = null;
      } else {
        let lastNode = this.head;
        while (lastNode.next !== this.head) {
          lastNode = lastNode.next;
        }
        this.head = this.head.next;
        lastNode.next = this.head;
      }
    } else {
      let current = this.head;
      let prev = null;
      for (let i = 0; i < index; i++) {
        prev = current;
        current = current.next;
      }
      prev.next = current.next;
    }
  }

  // Rotate the list by a specified number of positions
  rotateBy(positions) {
    if (!this.head || positions === 0) {
      return;
    }
    let current = this.head;
    for (let i = 0; i < positions - 1; i++) {
      current = current.next;
    }
    this.head = current.next;
    current.next = this.head;
  }

  // Split the list into two halves
  split() {
    if (!this.head) {
      return [null, null];
    }
    let slow = this.head;
    let fast = this.head;
    while (fast.next !== this.head && fast.next.next !== this.head) {
      slow = slow.next;
      fast = fast.next.next;
    }
    const firstHalf = new CircularLinkedList();
    const secondHalf = new CircularLinkedList();
    firstHalf.head = this.head;
    secondHalf.head = slow.next;
    slow.next = this.head;
    let lastNode = secondHalf.head;
    while (lastNode.next !== this.head) {
      lastNode = lastNode.next;
    }
    lastNode.next = secondHalf.head;
    return [firstHalf, secondHalf];
  }

  // Check if the list contains a specific data value
  contains(data) {
    return this.indexOf(data) !== -1;
  }

  // Get the last node of the list
  getLastNode() {
    if (!this.head) {
      return null;
    }
    let current = this.head;
    while (current.next !== this.head) {
      current = current.next;
    }
    return current;
  }

  // Remove duplicates from the list
  removeDuplicates() {
    if (!this.head) {
      return;
    }
    let current = this.head;
    do {
      let runner = current;
      while (runner.next !== this.head) {
        if (runner.next.data === current.data) {
          runner.next = runner.next.next;
        } else {
          runner = runner.next;
        }
      }
      current = current.next;
    } while (current !== this.head);
  }

  // Add another circular linked list to the end of the current list
  concatenate(otherList) {
    if (!this.head) {
      this.head = otherList.head;
    } else if (otherList.head) {
      let lastNode = this.getLastNode();
      lastNode.next = otherList.head;
      let otherLastNode = otherList.getLastNode();
      otherLastNode.next = this.head;
    }
  }
}
