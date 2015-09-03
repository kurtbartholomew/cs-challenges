/*
  Given the implementation of a typical stack, redesign it to include a
  minimum method that returns the minimum value in the array. All methods
  should execute in constant time.

*/

(function(CSC){

CSC.AltStack = function(){
  this.storage = [];
  this.stackSize = 0;
  this.min = null;
};

CSC.AltStack.prototype.push = function(value){
  this.stackSize++;
  if(this.min > value || this.min === null) { this.min = value; }
  this.storage[this.stackSize] = [value,this.min];
};

CSC.AltStack.prototype.pop = function(){
  if(this.stackSize === 0) { return null; }
  var temp = this.storage[this.stackSize];
  delete this.storage[this.stackSize];
  this.stackSize--;
  this.min = temp[1];
  return temp[0];
};

CSC.AltStack.prototype.minimum = function(){
  return this.min;
};


// ====== Alternate Implementation (Less than n space for min) =======

// function AltStack(){
//   this.storage = [];
//   this.stackSize = 0;
//   this.minStack = new Stack();
// }

// AltStack.prototype.push = function(value){
//   this.stackSize++;
//   this.storage[this.stackSize] = value;
//   if(value <= this.minStack.peek() || this.minStack.objectSize === 0){
//     this.minStack.push(value); 
//   }
// };

// AltStack.prototype.pop = function(){
//   if(this.stackSize === 0) { return null; }
//   var temp = this.storage[this.stackSize];
//   delete this.storage[this.stackSize];
//   this.stackSize--;
//   if(temp === this.minStack.peek()) { this.minStack.pop(); }
//   return temp;
// };

// AltStack.prototype.minimum = function(){
//   if(this.stackSize === 0) { return null; }
//   return this.minStack.peek();
// };


})(CSC);