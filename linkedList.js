#!/usr/bin/env node

class LinkedList {
  constructor() {
    this.object = {};
    this.object.head = null;
  }

  #createListItem(value) {
    let newValue = new Node(value);
    return newValue;
  }

  append(value) {
    if (this.object.head === null) {
      this.object.head = this.#createListItem(value);
    } else {
      let nextObject = this.object.head;
      while (nextObject.getNext() != null) {
        nextObject = nextObject.getNext();
      }
      nextObject.setNext(this.#createListItem(value));
    }
  }

  prepend(value) {
    if (this.object.head === null) {
      this.object.head = this.#createListItem(value);
    } else {
      let newHead = this.#createListItem(value);
      newHead.setNext(this.object.head);
      this.object.head = newHead;
    }
  }

  size() {
    if (this.object.head === null) {
      return 0;
    } else {
      let nextObject = this.object.head;
      let count = 0;
      while (nextObject != null) {
        count++;
        nextObject = nextObject.getNext();
      }
      return count;
    }
  }

  head() {
    return this.object.head;
  }
  tail() {
    if (this.object.head === null) {
      return this.object.head;
    }
    let tail = this.object.head;
    while (tail.getNext() != null) {
      tail = tail.getNext();
    }
    return tail;
  }

  at(index) {
    if (index >= this.size()) {
      return "index is too large";
    } else {
      let count = 0;
      let valueAtIndex = this.object.head;
      while (count != index) {
        count++;
        valueAtIndex = valueAtIndex.getNext();
      }
      return valueAtIndex;
    }
  }

  pop() {}

  getList() {
    return this.object;
  }
  printValues() {
    let nullCheck = this.object.head;
    if (nullCheck.getNext() === null) {
      console.log(nullCheck.getValue());
    } else {
      while (nullCheck.getNext() != null) {
        console.log(nullCheck.getValue());
        nullCheck = nullCheck.getNext();
        if (nullCheck.getNext() === null) {
          console.log(nullCheck.getValue());
        }
      }
    }
    return "end of list";
  }
}

class Node {
  constructor(value, next) {
    this.object = {};
    if (value != null) {
      this.object.value = value;
    } else {
      this.object.value = null;
    }
    if (next != null) {
      this.object.next = next;
    } else {
      this.object.next = null;
    }
  }
  getValue() {
    return this.object.value;
  }
  getNext() {
    return this.object.next;
  }
  setNext(input) {
    this.object.next = input;
  }
  getObject() {
    return this.object;
  }
}

const testList = new LinkedList();
testList.append("cat");
testList.append("dog");
testList.append("rabbit");
testList.append("horse");

// testList.prepend("cat");
// testList.prepend("dog");
// testList.prepend("rabbit");
// testList.prepend("horse");

// console.log(testList.getList());
// console.log(testList.printValues());
// console.log(`total count: ${testList.size()}`);

console.log(testList.at(0));
