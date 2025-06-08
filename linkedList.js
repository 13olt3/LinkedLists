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

  appendValue(value) {
    let newObject = this.#createListItem(value);
    if (this.object.head === null) {
      this.object.head = newObject;
    } else {
      let nextObject = this.object.head;
      while (nextObject.getNext() != null) {
        nextObject = nextObject.getNext();
      }
      nextObject.setNext(newObject);
    }
  }

  getList() {
    return this.object;
  }
  printValues() {
    let isNull = this.object.head;
    while (isNull.getNext() != null) {
      console.log(isNull.getValue());
      isNull = isNull.getNext();
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
testList.appendValue("cat");
testList.appendValue("dog");
testList.appendValue("rabbit");
testList.appendValue("horse");

// const myNode2 = new Node("value1", "next1");

// let myNode = new Node("cat");
// let adjNode = myNode;
// myNode.setNext("asdf");
// console.log(adjNode.getNext());

// adjNode.setNext("notAsdf");
// console.log(myNode.getNext());

// console.log(testList.getList());
console.log(testList.printValues());
