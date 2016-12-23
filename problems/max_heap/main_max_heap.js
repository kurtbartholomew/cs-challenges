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
	var temp;
	temp = this.set[a];
	this.set[a] = this.set[b];
	this.set[b] = temp;
};

MaxHeap.prototype.heapify = function(index) {
	var largest;
	var leftChildIndex = 2 * index;
	var rightChildIndex = (2 * index) + 1;
  var leftChild = this.set[leftChildIndex];
  var rightChild = this.set[rightChildIndex];
	if(leftChild > this.set[index]) {
		largest = leftChildIndex;
	} else {
		largest = index;
	}
	if(rightChild > this.set[largest]) {
		largest = rightChildIndex;
	}
	if(largest !== index) {
		this.swap(index,largest);
		this.heapify(largest);
	}
};

MaxHeap.prototype.buildHeap = function() {
	for(var i = (this.set.length / 2); i >= 1; i--) {
		this.heapify(i);
	}
};

MaxHeap.prototype.insert = function(value) {
	this.set.push(value);
	var index = this.set.length - 1;
	while(index !== 0 && this.set[Math.round(index/2)] < this.set[index]) {
		this.swap(Math.round(index/2),index);
		index = Math.round(index/2);
	}
};

MaxHeap.prototype.max = function() {
	return this.set[0];
};

MaxHeap.prototype.extractMax = function() {
	var max = this.set[0];
	this.set[0] = this.set[this.set.length - 1];
	this.heapify(0);
	return max;
};

MaxHeap.prototype.heapSort = function() {
	var sortedHeap = [];
	while(this.set.length > 0) {
		this.swap(0,this.set.length - 1);
		sortedHeap.push(this.set[this.set.length - 1]);
		delete this.set[this.set.length - 1];
	}
	return sortedHeap;
};