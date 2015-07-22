/*
  Given a list of lists of numbers, return a flat list of all numbers.
  
  Example: [[2,7], [8,3], [1,4]]
  Returns [2,7,8,3,1,4]

*/

var iterativeListFlatten = function(arr) {
  return [].concat.apply([],arr);
};

var recursiveListFlatten = function(arr) {
  if(!arr.length) { return arr; }
  return recursiveListFlatten(arr.slice(0,-1)).concat(arr[arr.length-1]);
};