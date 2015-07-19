/*
  Construct the data structure known as a Stack.
  This is a LIFO (Last In - First Out) structure implemented using either
  an array, object or a linked list.

  Fill in the methods to push to the stack, pop off the stack, peek
  at the top value on the stack and check if the stack is empty.

  Note: Please instantiate in pseudoclassical style

  Example:
    var stacky = new Stack();
    stacky.size()             //  0
    stacky.push(2)            // (2)
    stacky.push(12)           // (2)(12)
    stacky.push(1)            // (2)(12)(1)
    stacky.size()             //  3
    stacky.pop()              //  1
    stacky.peek()             //  12
    stacky.isEmpty()          // false
*/

function Stack() {
  this.storage = [];
  this.objectSize = 0;
}

Stack.prototype.size = function(){
  return this.objectSize;
};

Stack.prototype.push = function(value){
  this.objectSize++;
  this.storage[this.objectSize] = value;
};

Stack.prototype.pop = function(){
  if(this.objectSize === 0) { return null; }
  var poppedVal = this.storage[this.objectSize];
  delete this.storage[this.objectSize];
  this.objectSize--;
  return poppedVal;
};

Stack.prototype.peek = function(){
  var peekedVal = this.storage[this.objectSize];
  this.objectSize--;
  return peekedVal;
};

Stack.prototype.isEmpty = function(){
  if(!this.objectSize) { return true; }
  return false;
};

// ========== Alternate Implementation ( Singly Linked List) ===========

// function Stack() {
//   this.top = null;
// }

// function StackNode(value) {
//   this.value = value;
//   this.next = null;
// }

// Stack.prototype.size = function(){
//   if(this.top === null) { return 0; }
//   var currentNode = this.top;
//   var objectSize = 1;
//   while(currentNode) {
//     objectSize++;
//     currentNode = currentNode.next;
//   }
//   return objectSize;
// };

// Stack.prototype.push = function(value){
//   var newNode = new StackNode(value);
//   if(this.top) { this.top.next = newNode; }
//   this.top = newNode;
// };

// Stack.prototype.pop = function(){
//   if(this.top === null) { return null; }
//   var poppedVal = this.top.value;
//   this.top = this.top.next;
//   return poppedVal;
// };

// Stack.prototype.peek = function(){
//   if(this.top === null) { return null; }
//   var peekedVal = this.top.value;
//   return peekedVal;
// };

// Stack.prototype.isEmpty = function(){
//   if(this.top === null) { return true; }
//   return false;
// };