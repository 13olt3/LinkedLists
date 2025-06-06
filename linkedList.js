#!/usr/bin/env node

class LinkedList {
  constructor() {
    this.object = {};
    this.object.head = null;

    this.list = this.object;
  }

  getList() {
    return this.list;
  }

  #createListItem(value) {
    let newValue = new Node(value);
    return newValue.getObject();
  }

  #recursiveChecker(object, value) {
    // let inputValue = value;
    // if (inputValue.next != null) {
    //   this.#recursiveChecker(inputValue.next);
    // } else if (inputValue.next === null) {
    //   inputValue.next = object;
    // }
    // return inputValue.next;
  }

  appendValue(value) {
    const newValue = this.#createListItem(value);
    if (this.list.head === null) {
      this.list.head = newValue;
    }
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
const myNode2 = new Node("value1", "next1");

let testObject = {
  head: "value1",
  next: {
    value: "value2",
    next: {
      value: "value3",
      next: {
        value: "value4",
        next: null,
      },
    },
  },
};
function countNext(object) {
  count = 0;
  if (object.next === null) {
    return 1;
  } else if (object.next != null) {
    return 2;
  }
}

// testObject.next = myNode2.getObject();
// myNode2.setNext(new Node("nestedValue", "nestedNext").getObject());

// console.log(testObject.next.next.value);
// console.log(testObject.next.next.next.next === null);

// testList.appendValue("cat");
testList.appendValue("dog");
testList.appendValue("mouse");

console.log(testList.getList());
