/*
  Set every list as the last item of the previous list. Return on the root list.
  
  Example: [[4,3],[5,6],[8,2]]
  Returns [4,3,[5,6,[8,2]]]

*/

var recursiveListNest = function(arr) {
  if(!arr.length) { return []; }
  return arr.length === 1 ?
    arr[0].concat(recursiveListNest(arr.slice(1))):
    arr[0].concat([recursiveListNest(arr.slice(1))]);
};