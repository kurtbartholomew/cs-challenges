/*
  Given a singly linked list, remove all duplicates.

  Example: (8) -> (9) -> (2) -> (6) -> (8) -> (2) -> (3)
  Returns (8) -> (9) -> (2) -> (6) -> (3)

  Example: (5) -> (3) -> (2) -> (7) -> (8) -> (1)
  Returns (5) -> (3) -> (2) -> (7) -> (8) -> (1)

*/

var DuplicationRemoval = function(linkedList) {
  // if(linkedList.tail === null) { return linkedList; }
  // var valueHash = {};
  // var previousNode = linkedList.head;
  // var currentNode = linkedList.head.next;
  // valueHash[linkedList.head.value] = true;
  // while(currentNode) {
  //   if(valueHash[currentNode.value]){
  //     if(currentNode.next){
  //       previousNode.next = currentNode.next;
  //       currentNode.next = null;
  //     } else {
  //       previousNode.next = null;
  //     }
  //   } else {
  //     valueHash[currentNode.value] = true;
  //   }
  //   currentNode = currentNode.next || previousNode.next;
  // }
  // return linkedList;
};




// ============== Linked List Implementation ===========

// Assume the following linked list implementation exists already

// function LinkedList() {
//   this.head = null;
//   this.tail = null;
// }

// function LinkedListNode(value) {
//   this.next = null;
//   this.value = value;
// }

// LinkedList.prototype.addToTail = function(value) {
//   var node = new LinkedListNode(value);
//   if(this.head === null) {
//     this.head = node;
//     this.tail = node;
//   } else {
//     this.tail.next = node;
//     this.tail = node;
//   }
// };

// LinkedList.prototype.removeFromHead = function() {
//   if(this.head === null) { return null; }
//   var oldHead = this.head;
//   this.head = oldHead.next;
//   oldHead.next = null;
//   return oldHead.value;
// };

// LinkedList.prototype.size = function() {
//   if(this.head === null) { return 0; }
//   var length = 1;
//   var currentNode = this.head;
//   while(currentNode.next !== null) {
//     length++;
//     currentNode = currentNode.next;
//   }
//   return length;
// };