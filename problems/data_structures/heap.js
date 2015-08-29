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
  var index = this.storage.push(value) - 1;
  if(index === 0){ return ; }
  var parentIndex = index % 2 !== 0 ? ((index-1)/2) : ((index-2)/2);
  var parentVal = this.storage[parentIndex];
  while(value > parentVal && index !== 0){
    hSwap(this.storage,parentIndex,index);
    index = parentIndex;
    parentIndex = parentIndex = index % 2 !== 0 ? ((index-1)/2) : ((index-2)/2);
    parentVal = this.storage[parentIndex];
  }
};

Heap.prototype.max = function(){
  if(!this.storage.length) { return null; }
  return this.storage[0];
};

Heap.prototype.extract_max = function(){
  if(!this.storage.length) { return null; }
  if(this.storage.length === 1) { return this.storage.pop();}

  hSwap(this.storage,0,this.storage.length-1);
  var max = this.storage.pop();

  var currentIndex = 0;
  var leftChildIndex = (currentIndex * 2 + 1);
  var rightChildIndex = (currentIndex * 2 + 2);

  while(true){
    if(this.storage[leftChildIndex] !== undefined &&
       this.storage[leftChildIndex] > this.storage[currentIndex]){
      hSwap(this.storage,currentIndex,leftChildIndex);
      currentIndex = leftChildIndex;
    } else if(this.storage[rightChildIndex] !== undefined &&
              this.storage[rightChildIndex] > this.storage[currentIndex]){
      hSwap(this.storage,currentIndex,rightChildIndex);
      currentIndex = leftChildIndex;
    } else {
      break;
    }
  }
  return max;
};