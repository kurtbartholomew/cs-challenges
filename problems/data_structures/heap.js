/*
  Construct the data structure known as a Binary Heap.
  This is a tree structure implemented using a collection of directed
  acycical nodes linked together. Each node should contain a value as well
  as references to its right and left children. 

  In addition, the heap is a *complete tree*, meaning that all levels of the tree
  but the final level should be filled and anything remaining is filled from
  right to left.

  Specifically, you should implement a max heap, such that the root node
  of the heap is always the highest number in the heap.

  Fill in the methods to insert a value into the heap, check the max value 
  and remove the node with the maximum value.

  Note: Please instantiate in pseudoclassical style

  Example:
    var heapy = new Heap();
    heapy.insert(7)          // [7] 
    heapy.insert(12)         // [12,7]
    heapy.insert(72)         // [72,12,7]
    heapy.max()              //  72
    heapy.extract_max()      //  72
    heapy.insert(44)         // [44,25,12,7]
    heapy.max()              //  44
    heapy.insert(25)         // [44,25,12,7]
    heapy.insert(19)         // [44,25,19,12,7]
    heapy.insert(90)         // [90,44,25,19,12,7]
    heapy.extract_max()      //  90
    heapy.max()              //  44 
*/

function Heap(){
  this.storage = [];
}

var hSwap = function(array,parentIndex,childIndex){
  var temp = array[parentIndex];
  array[parentIndex] = array[childIndex];
  array[childIndex] = temp;
};

Heap.prototype.insert = function(value){

};

Heap.prototype.max = function(){

};

Heap.prototype.extract_max = function(){

};