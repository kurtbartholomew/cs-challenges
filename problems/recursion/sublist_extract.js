/*
  Return a sublist of a given list, provided the starting Index (including)
  and an end Index (excluding).
  
  Example: [2,7,8,3,1,4] , 2, 4
  Returns [8,3]
  
  Example: [4,2,7,9,7] , 1, 4
  Returns [2,7,9]

*/

(function(CSC){

CSC.iterativeSublistExtract = function(arr, startIndex, endIndex) {
  return arr.slice(startIndex,endIndex);
};

CSC.recursiveSublistExtract = function(arr, startIndex, endIndex) {
  if(arr.length === (startIndex+1)) { return [arr[startIndex]]; }
  var newArr = CSC.recursiveSublistExtract(arr.slice(0,-1),startIndex,endIndex);
  if(arr.length < (endIndex+1)){
    newArr.push(arr[arr.length-1]);
  }
  return newArr;
};

})(CSC);