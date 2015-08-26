/*
  Given an array of distinct sorted integers, if an integer in the array matches
   it's index in the array, return it. Otherwise return null.

  Example: [-4,-1,2,4,6,9]
  Returns true

  Example: [1,2,3,4,5,6,7]
  Returns false

*/



var identityBSearch = function(array,begin,end){
  if(end < begin) { return null;}
  var mid = Math.floor((begin+end)/2);
  if(array[mid] < mid){
    identityBSearch(array,mid+1,end);
  } else if(array[mid] > mid) {
    identityBSearch(array,begin,mid-1);
  } else {
    return array[mid];
  }

};

var identityIndex = function(sortedIntArray){
  if(sortedIntArray === undefined || sortedIntArray.constructor !== Array){
    throw new Error("Incorrect argument passed");
  }
  identityBSearch(sortedIntArray,0,sortedIntArray.length-1);
  return identityBSearch(sortedIntArray,0,sortedIntArray.length-1);
};



// ---------------- Binary Search Method ---------------

// var identityBSearch = function(array,begin,end){
//   if(end < begin) { return null;}
//   var mid = Math.floor((begin+end)/2);
//   if(array[mid] < mid){
//     identityBSearch(array,mid+1,end);
//   } else if(array[mid] > mid) {
//     identityBSearch(array,begin,mid-1);
//   } else {
//     return array[mid];
//   }

// };

// var identityIndex = function(sortedIntArray){
//   if(sortedIntArray === undefined || sortedIntArray.constructor !== Array){
//     throw new Error("Incorrect argument passed");
//   }
//   identityBSearch(sortedIntArray,0,sortedIntArray.length-1);
//   return identityBSearch(sortedIntArray,0,sortedIntArray.length-1);
// };


// ----------- BRUTE FORCE ALGORITHM ----------------

// var identityIndex = function(sortedIntArray){
//   if(sortedIntArray === undefined || sortedIntArray.constructor !== Array){
//     throw new Error("Incorrect argument passed");
//   }
//   var result = [];
//   for(var i = 0; i < sortedIntArray.length; i++){
//     if(sortedIntArray[i] > i){ break; }
//     if(sortedIntArray[i] === i){ return sortedIntArray[i]; }
//   }
//   return null;
// };

