/*
  Return true or false, if a given list starts with a sublist.

  Example: [2,7,8,3,1,4] , [2,7]
  Returns true

  Example: [5,6,7,1,4,6,7,1,3] , [6,7,1]
  Returns false

*/

(function(CSC){

CSC.iterativeSublistCheck = function(arr, subarr) {
  return subarr.reduce(function(startsWith,element,index){
    return element === arr[index];
  },false);
};

CSC.recursiveSublistCheck = function(arr, subarr) {
  if(subarr.length === 1) { return arr[0] === subarr[0]; }
  var starting = subarr.length === 1 ? 
    CSC.recursiveSublistCheck(arr, subarr.slice(1)):
    CSC.recursiveSublistCheck(arr.slice(1), subarr.slice(1));
  return starting && (arr[0] === subarr[0]);
};

})(CSC);