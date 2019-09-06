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
  
};

Queue.prototype.enqueue = function (value) {
  
};

Queue.prototype.dequeue = function () {

};

Queue.prototype.isEmpty = function () {

};
