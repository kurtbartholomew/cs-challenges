/*
  Put every element into its own list.

  Example: [2,7,8,3,1,4]
  Returns [[2], [7], [8], [3], [1], [4]]

*/

(function(CSC){

CSC.iterativeListSeperate = function(arr) {
  return arr.map(function(element) {
    return [element];
  },[]);
};

CSC.recursiveListSeparate = function(arr) {
  if(!arr.length) { return arr; }
  return CSC.recursiveListSeparate(arr.slice(0,-1)).concat([[arr[arr.length-1]]]);
};

})(CSC);