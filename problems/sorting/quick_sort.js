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
  array[indexB] = array[indexA];
};

var qRandom = function(length){
  return Math.floor(Math.random() * length);
};

var medianOfThreePivot = function(len){
  var first = qRandom(len);
  var second = qRandom(len);
  var third = qRandom(len);
  var large,small;

  if(first > second){
    large = first;
    small = second;
  } else {
    large = second;
    small = first;
  }

  if(third > large){ 
    return large;
  } else if(third < small){
    return small;
  } else {
    return third;
  }
};

var quickSort = function(currentArray){

  var pivotIndex = medianOfThreePivot(currentArray.length);
  var pivotValue = currentArray[pivotIndex];

  
  return ;
};