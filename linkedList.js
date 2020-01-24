class Node {
  constructor(name) {
    this.name = name;
    this.next = null;
  }
}

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  add = (name) => {
    const node = new Node(name);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
  };

  remove = (name) => {
    let currentNode = this.head;
    let previousNode = null;
    if (currentNode.name === name) {
      this.head = currentNode.next;
    } else {
      while (currentNode.name !== name) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      if (currentNode.name === this.tail.name) {
        this.tail = previousNode;
      }
      previousNode.next = currentNode.next;
    }

    this.length--;
  };

  removeAt = (index) => {
    let currentNode = this.head;
    let previousNode = null;
    let currentIndex = 0;

    if (index < this.length) {
      if (index === 0) {
        this.head = currentNode.next;
      } else {
        while (currentIndex !== index) {
          previousNode = currentNode;
          currentNode = currentNode.next;
          currentIndex++;
        }
        if (index === this.length - 1) {
          this.tail = previousNode;
        }
        previousNode.next = currentNode.next;
      }
      this.length--;
    }

    return currentNode;
  };

  addAt = (index, name) => {
    let currentNode = this.head;
    let previousNode = null;
    let currentIndex = 0;
    let newNode = new Node(name);

    if (index < this.length) {
      if (index === 0) {
        this.head = currentNode.next;
        newNode.next = currentNode;
      } else {
        while (currentIndex !== index) {
          previousNode = currentNode;
          currentNode = currentNode.next;
          currentIndex++;
        }
        previousNode.next = newNode;
        newNode.next = currentNode;
      }
      this.length++;
    }
  };

  rearange = (fromIndex, toIndex) => {
    const node = this.removeAt(fromIndex);
    this.addAt(toIndex, node.name);
  }
}

const list = new LinkedList();
list.add(1);
list.add(3);
list.add(4);
list.add(5);
list.add(6);
list.add(2);
list.rearange(5, 1);
// list.addAt(1, 2);
// list.removeAt(2);
console.log("list", list);

