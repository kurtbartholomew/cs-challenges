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
    stacky.push(12)           // (2) <- (12)
    stacky.push(1)            // (2) <- (12) <- (1)
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
  
};

Stack.prototype.push = function(value){

};

Stack.prototype.pop = function(){

};

Stack.prototype.peek = function(){

};

Stack.prototype.isEmpty = function(){

};
