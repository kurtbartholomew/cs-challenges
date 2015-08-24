/*
  Given an array of n unsorted and potentially duplicate
  integers, create an algorithm to sort these integers
  from smallest to biggest recursively with two steps:
  
  1 -- Choose a value from the array. That is the pivot value --
  2 -- Divide the array into subarrays based on the pivot value --
  3 -- Merge back together --

  Example: [7,5,9,12,15,2,4,10]
  Returns [2,4,5,7,9,10,12,15]

*/

var qSwap = function(array,indexA,indexB){
  var temp = array[indexA];
  array[indexA] = array[indexB];
  array[indexB] = temp;
};

var qDivide = function(currentArray,left,right){
  var pivotValue = currentArray[((left+right)/2)];

  while(left <= right){

    while(currentArray[left] < pivotValue){
      left++;
    }
    while(currentArray[right] > pivotValue){
      right--;
    }

    if(left <= right){
      qSwap(currentArray,left,right);
      left++;
      right--;
    }

  }

  return left;
};

var quickSort = function(currentArray,left,right){
  if(left === undefined || right === undefined){
    left = 0;
    right = currentArray.length-1;
  }
  var starting = qDivide(currentArray,left,right);
  
  if(left < (starting-1)){
    quickSort(currentArray,left,starting-1);
  }
  if(starting < right){
    quickSort(currentArray,starting,right);
  }
};
