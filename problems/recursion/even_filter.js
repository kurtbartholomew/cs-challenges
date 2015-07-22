/*
  Return a list only containing even numbers.

  Example: [2,7,8,3,1,4]
  Returns [2,8,4]

*/

var iterativeEvenFilter = function(arr) { 
  return arr.filter(function(element) {
    return element % 2 === 0;
  });
};

var recursiveEvenFilter = function(arr) {
  if(!arr.length) { return arr; }
  return arr[arr.length-1] % 2 === 0 ? 
    recursiveEvenFilter(arr.slice(0,-1)).concat(arr[arr.length-1]) :
    recursiveEvenFilter(arr.slice(0,-1));
};