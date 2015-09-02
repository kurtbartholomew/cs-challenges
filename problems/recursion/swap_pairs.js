/*
  Swap all elements in pairs. If the length of the list is odd, the last
  element stays in place.

  Example: [2,7,8,3,1,4]
  Returns [7,2,3,8,4,1]

  Example: [3,6,8,1,5]
  Returns [6,3,1,8,5]

*/

(function(CSC){

CSC.iterativePairSwap = function(arr) {
  var temp = 0;
  for(var i = 0; i < arr.length; i++) {
    if(i % 2 !== 0) {
      temp = arr[i];
      arr[i] = arr[i-1];
      arr[i-1] = temp;
    }
  }
  return arr;
};

CSC.recursivePairSwap = function(arr) {
  if(!arr.length) { return arr; }
  return arr.length % 2 === 0 ? 
    CSC.recursivePairSwap(arr.slice(0,-2)).concat(arr[arr.length-1],arr[arr.length-2]) : 
    CSC.recursivePairSwap(arr.slice(0,-1)).concat(arr[arr.length-1]);
};

})(CSC);