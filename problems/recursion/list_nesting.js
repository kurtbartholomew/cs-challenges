/*
  Set every list as the last item of the previous list. Return on the root list.
  
  Example: [[4,3],[5,6],[8,2]]
  Returns [4,3,[5,6,[8,2]]]

*/

(function(CSC){

CSC.iterativeListNest = function(arr) {
  return arr.reduceRight(function(nestedList,element){
    return element.concat([nestedList]);
  });
};

CSC.recursiveListNest = function(arr) {
  if(!arr.length) { return []; }
  return arr.length === 1 ?
    arr[0].concat(CSC.recursiveListNest(arr.slice(1))):
    arr[0].concat([CSC.recursiveListNest(arr.slice(1))]);
};
})(CSC);