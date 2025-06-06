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
    } else if (this.list.head.next === null) {
      this.list.head.next = newValue;
    } else if (this.list.head.next.next === null) {
      this.list.head.next.next = newValue;
    } else if (this.list.head.next.next.next === null) {
      this.list.head.next.next.next = newValue;
    }
    // goes on forever
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

testList.appendValue("cat");
testList.appendValue("dog");
testList.appendValue("mouse");
testList.appendValue("rabbit");

console.log(testList.getList());
