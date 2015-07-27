/*
  Given the implementation of a typical stack, redesign it to include a
  minimum method that returns the minimum value in the array. All methods
  should execute in constant time.
  
*/

function AltStack(){
  this.storage = [];
  this.stackSize = 0;
}

AltStack.prototype.push = function(value){
  this.stackSize++;
  this.storage[this.stackSize] = value;
};

AltStack.prototype.pop = function(){
  if(this.stackSize === 0) { return null; }
  var temp = this.storage[this.stackSize];
  delete this.storage[this.stackSize];
  this.stackSize--;
  return temp;
};

AltStack.prototype.minimum = function(){
  // TODO : Finish this
};