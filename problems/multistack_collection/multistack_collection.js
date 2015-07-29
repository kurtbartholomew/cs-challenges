/*
  Given a size constraint, create a collection that utilizes Stacks to 
  store elements. Once a stack has reached the size constraint, another Stack
  will be created and elements will be placed in the subsquent Stack.

*/

var multiStackCollection = function(stackSize) {
  this._storage = [];
  this._storage.push(new Stack());
  this.currentStack = 0;
  this.sizeConstraint = stackSize;
};

multiStackCollection.prototype.push = function(value){
  if(this._storage[this.currentStack].objectSize === this.sizeConstraint){
    this.currentStack++;
    this._storage[this.currentStack] = new Stack();
  }
  this._storage[this.currentStack].push(value);
};

multiStackCollection.prototype.pop = function(){
  if(this._storage[this.currentStack].objectSize === 0 && this.currentStack === 0) {
    return null;
  } else if(this._storage[this.currentStack].objectSize === 0){
    this.currentStack--;
  }
  return this._storage[this.currentStack].pop();
};

multiStackCollection.prototype.popAt = function(stackIndex){
  if(this.currentStack < stackIndex || this._storage[stackIndex].objectSize === 0){
    return null;
  }
  return this._storage[stackIndex-1].pop();
};