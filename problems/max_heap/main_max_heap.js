/*
  Given a potentially unsorted array, build a max heap out of it

  The heap should also have the following functions:
  insert - inserts a node with the passed value
  max - returns max value node
  extract_max - returns max value node and removes it from the heap

  Example: [16,4,10,14,7,9,3,2,8,1]
  Returns  [16,14,10,9,8,7,4,3,2,1]
*/

var MaxHeap = function(inputArray) {
	this.set = inputArray;
	this.buildHeap(this.set);
};

MaxHeap.prototype.getSet = function() {
	return this.set;
};

MaxHeap.prototype.swap = function(a, b) {

};

MaxHeap.prototype.heapify = function(index) {

};

MaxHeap.prototype.buildHeap = function() {
	
};

MaxHeap.prototype.insert = function(value) {
	
};

MaxHeap.prototype.max = function() {
	
};

MaxHeap.prototype.extractMax = function() {
	
};

MaxHeap.prototype.heapSort = function() {
	=
};