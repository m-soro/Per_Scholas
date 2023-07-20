// let myArr = new Array();
// let myObj = new Object();

// let myLinkedList = new LinkedList();

/**
 * ----------------
 * TIME COMPLEXITY
 * ----------------
 * time complexity is constant O(1) - It only takes one step
 * we know the index that we cant to return
 */
let arr = [1, 2, 3, 4, 5];
let newVar = arr[3];

/**
 * --------------------
 * CREATE A LINKEDLIST
 * --------------------
 */

class LinkedList {
  constructor() {
    this.head = null;
    this.walker = null;
  }
  startWalker() {
    this.walker = this.head;
    while (this.walker.next) {
      walker = walker.next;
    }
  }
}

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = null;
  }
}
// Each object points to the next object
let myNode1 = new Node(10, myNode2);
let myNode2 = new Node(20, myNode3);
let myNode3 = new Node(30, myNode4);
let myNode4 = new Node(40);

console.log(myNode2);
