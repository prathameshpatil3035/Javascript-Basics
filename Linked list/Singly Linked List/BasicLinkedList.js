/**
  Insertion Methods:
insertAtHead(data): Inserts a new node at the beginning of the linked list.
insertAtTail(data): Inserts a new node at the end of the linked list.
insertAfter(node, data): Inserts a new node with the given data after a specified node.

  Deletion Methods:
deleteAtHead(): Removes the first node from the linked list.
deleteAtTail(): Removes the last node from the linked list.
deleteNode(node): Removes a specific node from the linked list.

  Search/Access Methods:
getNode(index): Retrieves the node at the specified index in the linked list.
contains(data): Checks if a node with the given data exists in the linked list.

  Traversal Methods:
traverse(): Visits each node in the linked list and performs an operation.
printList(): Prints the data in each node, usually for debugging purposes.

  Length/Size Methods:
size(): Returns the number of nodes in the linked list.
isEmpty(): Checks if the linked list is empty.

  Miscellaneous Methods:
reverse(): Reverses the order of nodes in the linked list.
getHead(): Returns the first node in the linked list.
getTail(): Returns the last node in the linked list.
 */

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Insertion Methods
  insertAtHead(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  insertAtTail(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  insertAfter(node, data) {
    if (!node) return;
    const newNode = new Node(data);
    newNode.next = node.next;
    node.next = newNode;
  }

  // Deletion Methods
  deleteAtHead() {
    if (!this.head) return;
    this.head = this.head.next;
  }

  deleteNode(node) {
    if (!node || !this.head) return;
    let current = this.head;
    while (current.next !== node) {
      current = current.next;
    }
    current.next = node.next;
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

  // Miscellaneous Methods
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

  getHead() {
    return this.head;
  }

  getTail() {
    if (!this.head) return null;
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    return current;
  }

  getNodeAt(position) {
    let current = this.head;
    let index = 0;
    while (current && index !== position) {
      current = current.next;
      index++;
    }
    return current;
  }

  swap(position1, position2) {
    if (position1 === position2) {
      return; // No need to swap same positions
    }

    const node1 = this.getNodeAt(position1);
    const node2 = this.getNodeAt(position2);

    if (!node1 || !node2) {
      return; // One or both positions are out of bounds
    }

    const tempData = node1.data;
    node1.data = node2.data;
    node2.data = tempData;
  }

  //more methods-

  // Find the middle node of the list
  findMiddle() {
    if (!this.head) {
      return null;
    }
    let slow = this.head;
    let fast = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow.data;
  }

  // Check if the list contains a cycle (loop)
  hasCycle() {
    let slow = this.head;
    let fast = this.head;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow === fast) {
        return true;
      }
    }
    return false;
  }

  // Remove duplicates from the list (unsorted)
  removeDuplicatesUnsorted() {
    const uniqueValues = new Set();
    let current = this.head;
    let prev = null;
    while (current) {
      if (uniqueValues.has(current.data)) {
        prev.next = current.next;
      } else {
        uniqueValues.add(current.data);
        prev = current;
      }
      current = current.next;
    }
  }

  // Merge two sorted linked lists into a new sorted list
  static mergeSortedLists(list1, list2) {
    const mergedList = new SinglyLinkedList();
    let current1 = list1.head;
    let current2 = list2.head;
    while (current1 && current2) {
      if (current1.data < current2.data) {
        mergedList.append(current1.data);
        current1 = current1.next;
      } else {
        mergedList.append(current2.data);
        current2 = current2.next;
      }
    }
    while (current1) {
      mergedList.append(current1.data);
      current1 = current1.next;
    }
    while (current2) {
      mergedList.append(current2.data);
      current2 = current2.next;
    }
    return mergedList;
  }

  swapAdjacentNodes() {
    let current = this.head;
    while (current && current.next) {
      let temp = current.data;
      current.data = current.next.data;
      current.next.data = temp;
      current = current.next.next;
    }
  }

  // Find the Nth node from the end of the list
  findNthFromEnd(n) {
    if (n <= 0 || !this.head) {
      return null;
    }
    let firstPointer = this.head;
    let secondPointer = this.head;
    for (let i = 0; i < n; i++) {
      if (!firstPointer) {
        return null;
      }
      firstPointer = firstPointer.next;
    }
    while (firstPointer) {
      firstPointer = firstPointer.next;
      secondPointer = secondPointer.next;
    }
    return secondPointer.data;
  }

  // Split the list into two halves
  splitInHalf() {
    if (!this.head) {
      return [null, null];
    }
    let slow = this.head;
    let fast = this.head;
    while (fast.next && fast.next.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    const secondHalf = new SinglyLinkedList();
    secondHalf.head = slow.next;
    slow.next = null;
    return [this, secondHalf];
  }

  // Reverse the list using recursion
  reverseRecursive(current = this.head, prev = null) {
    if (!current) {
      this.head = prev;
      return;
    }
    const next = current.next;
    current.next = prev;
    this.reverseRecursive(next, current);
  }
}
