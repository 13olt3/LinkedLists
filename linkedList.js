#!/usr/bin/env node

export class LinkedList {
  constructor() {
    this.object = {};
    this.object.head = null;
  }

  #createListItem(value) {
    let newValue = new Node(value);
    return newValue;
  }

  #headIsNull() {
    if (this.object.head === null) {
      return true;
    } else return false;
  }

  append(value) {
    if (this.#headIsNull()) {
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
    if (this.#headIsNull()) {
      this.object.head = this.#createListItem(value);
    } else {
      let newHead = this.#createListItem(value);
      newHead.setNext(this.object.head);
      this.object.head = newHead;
    }
  }

  size() {
    if (this.#headIsNull()) {
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
    if (this.#headIsNull()) {
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
      return "Index is greater than list size.";
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

  pop() {
    if (this.#headIsNull()) {
      return "List is already empty.";
    } else {
      let lastNode = this.object.head;
      let newLastNode;
      while (lastNode.getNext() != null) {
        newLastNode = lastNode;
        lastNode = lastNode.getNext();
      }
      return newLastNode.setNext(null);
    }
  }

  contains(value) {
    if (this.#headIsNull()) {
      return "List is empty.";
    } else {
      let currentNode = this.object.head;
      while (currentNode.getNext() != null) {
        if (currentNode.getValue() === value) {
          return true;
        }
        currentNode = currentNode.getNext();
      }
      if (currentNode.getValue() === value) {
        return true;
      } else return false;
    }
  }

  find(value) {
    if (this.#headIsNull()) {
      return "List is empty.";
    } else {
      let currentNode = this.object.head;
      let count = 0;
      while (currentNode.getNext() != null) {
        if (currentNode.getValue() === value) {
          return count;
        } else {
          currentNode = currentNode.getNext();
          count++;
        }
      }
      if (currentNode.getValue() === value) {
        return count;
      } else return null;
    }
  }

  toString() {
    let outputString = "";
    if (this.#headIsNull()) {
      return "Empty list";
    } else {
      let nextNode = this.object.head;
      while (nextNode.getNext() != null) {
        outputString = outputString + `( ${nextNode.getValue()} ) -> `;
        nextNode = nextNode.getNext();
      }
      outputString = outputString + `( ${nextNode.getValue()} ) -> null`;
    }
    return outputString;
  }

  insertAt(value, index) {
    if (index > this.size()) {
      return "Input index is larger than list size.";
    }
    if (index === this.size()) {
      return this.append(value);
    }

    let nodeCounter = 0;
    let currentNode = this.object.head;
    let insertionNode = this.#createListItem(value);
    let priorNode;
    if (index === 0) {
      insertionNode.setNext(currentNode);
      this.object.head = insertionNode;
    } else {
      while (nodeCounter < index) {
        nodeCounter++;
        priorNode = currentNode;
        currentNode = currentNode.getNext();
      }
      priorNode.setNext(insertionNode);
      insertionNode.setNext(currentNode);
    }
  }

  removeAt(index) {
    if (index >= this.size()) {
      return "Input index is larger than list size.";
    }
    if (index === this.size()) {
      return this.pop();
    }
    if (index === 0 && this.size() === 0) {
      return "List is empty.";
    }
    let nodeCounter = 0;
    let currentNode = this.object.head;
    let priorNode;
    if (index === 0) {
      this.object.head = this.object.head.getNext();
    } else {
      while (nodeCounter < index) {
        nodeCounter++;
        priorNode = currentNode;
        currentNode = currentNode.getNext();
      }
      priorNode.setNext(currentNode.getNext());
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
}
