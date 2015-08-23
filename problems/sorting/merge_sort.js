/*
  Given an array of n unsorted and potentially duplicate
  integers, create an algorithm to sort these integers
  from smallest to biggest recursively with two steps:
  
  1 -- Divide the array's contents --
  2 -- Merge and sort the contents back together --

  Example: [7,5,9,12,15,2,4,10]
  Returns [2,4,5,7,9,10,12,15]

*/

var merge = function(left,right){
  var combinedArray = [];
  var leftIndex = 0;
  var rightIndex = 0;


  while(leftIndex < left.length && rightIndex < right.length){
    if(left[leftIndex] < right[rightIndex]){
      combinedArray.push(left[leftIndex++]);
    } else {
      combinedArray.push(right[rightIndex++]);
    }
  }
  while(rightIndex < right.length){ 
    combinedArray.push(right[rightIndex++]);
  }
  while(leftIndex < left.length){ 
    combinedArray.push(left[leftIndex++]);
  }
  return combinedArray;
};

var mergeSort = function(currentArray){
  var arrayLength = currentArray.length;
  if(arrayLength < 2){
    return currentArray;
  }

  var middle = Math.floor(arrayLength / 2);

  var firstHalf = mergeSort(currentArray.slice(0,middle));
  var secondHalf = mergeSort(currentArray.slice(middle));
  return merge(firstHalf,secondHalf);
};