/*
  Construct the data structure known as a Queue.
  This is a FIFO (First In - First Out) structure implemented using either
  an array or an object.

  Fill in the methods to dequeue from the head of the queue, add to the 
  enqueue a new element to the end, check if the queue is empty and return
  the queue's size.

  Note: Please instantiate in pseudoclassical style

  Example:
    var line = new Queue();
    line.size()                //  0
    line.isEmpty()             // true
    line.enqueue(7)            // (7)
    line.enqueue(5)            // (5) -> (7)
    line.enqueue(9)            // (9) -> (5) -> (7)
    line.size()                //  3
    line.dequeue()             //  7
    line.dequeue()             //  5
    line.isEmpty()             // false
*/

function Queue() {
  this.storage = [];
  this.beginning = 0;
  this.end = 0;
}

Queue.prototype.size = function () {
  return this.end - this.beginning;
};

Queue.prototype.enqueue = function (value) {
  this.end++;
  this.storage[this.end] = value;
};

Queue.prototype.dequeue = function () {
  if(this.end === this.beginning) { return null; }
  this.beginning++;
  var temp = this.storage[this.beginning];
  delete this.storage[this.beginning];
  return temp;
};

Queue.prototype.isEmpty = function () {
  if(this.end === this.beginning) { return true; }
  return false;
};


// ======= Alternate Implementation (Singly Linked List) ========


// function Queue() {
//   this.head = null;
//   this.tail = null;
// }

// function QueueNode(value){
//   this.value = value || null;
//   this.next = null;
// }

// Queue.prototype.size = function () {
//   if(this.tail === null) { return 0; }
//   var queueSize = 0;
//   var currentNode = this.head;
//   while(currentNode) {
//     queueSize++;
//     currentNode = currentNode.next;
//   }
//   return queueSize;
// };

// Queue.prototype.enqueue = function (value) {
//   var newNode = new QueueNode(value);
//   if(this.tail === null) {
//     this.head = newNode;
//     this.tail = newNode;
//   } else {
//     this.tail.next = newNode;
//     this.tail = newNode;
//   }
// };

// Queue.prototype.dequeue = function () {
//   if(this.tail === null) { return null; }
//   var temp = this.head;
//   this.head = this.head.next;
//   temp.next = null;
//   if(this.head === null) { this.tail = null; }
//   return temp.value;
// };

// Queue.prototype.isEmpty = function () {
//   if(this.tail === null) { return true; }
//   return false;
// };

