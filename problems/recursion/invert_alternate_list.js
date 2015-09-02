/*
  Alternate the numbers sign regardless of their original sign.
  Start with +.

  Example: [2,7,8,3,1,4]
  Returns [2,-7,8,-3,1,-4]

  Example: [-5,-3,7,1,-6,2]
  Returns [5,-3,7,-1,6,-2]

*/

(function(CSC){

CSC.iterativeListInvert = function(arr) {
  return arr.map(function(element,index) {
    if(index % 2 === 0) {
      return element < 0 ? -element : element;
    } else {
      return element < 0 ? element : -element;
    }
  });
};

CSC.recursiveListInvert = function(arr) {
  if(!arr.length) { return arr; }
  return arr.length % 2 === 0 ?
    arr[arr.length-1] < 0 ? 
      CSC.recursiveListInvert(arr.slice(0,-1)).concat(arr[arr.length-1])
      : CSC.recursiveListInvert(arr.slice(0,-1)).concat(-arr[arr.length-1])
    : arr[arr.length-1] < 0 ?
      CSC.recursiveListInvert(arr.slice(0,-1)).concat(-arr[arr.length-1])
      : CSC.recursiveListInvert(arr.slice(0,-1)).concat(arr[arr.length-1]);
};
})(CSC);