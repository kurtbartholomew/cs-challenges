/*
  Construct a Queue data structure that utilizes two Stack data
  structures to mirror the same functionality as the original.

  Example:
    var queueStacky = new StackQueue();
    queueStacky.push(4);
    queueStacky.push(3);
    queueStacky.push(10);
    queueStacky.pop();        // 10
    queueStacky.pop();        // 3

*/

var StackQueue =  function(){
  this.front = new Stack();
  this.back = new Stack();
};

StackQueue.prototype.size = function(){
  return this.front.objectSize + this.back.objectSize;
};

StackQueue.prototype.enqueue = function(value){
  this.back.push(value);
};

StackQueue.prototype.dequeue = function(){
  if(this.back.isEmpty() && this.front.isEmpty()) { return null; }
  if(this.front.isEmpty() && !this.back.isEmpty()) {
    while(this.back.peek() !== null){ this.front.push(this.back.pop()); }
  }
  return this.front.pop();
};

