/*
  Find the maximum value in a list like the one below.
  Example: [2,7,8,3,1,4]
  Returns 8

*/

var iterativeMax = function(arr) {
  return arr.reduce(function(max,current){
    return max < current ? current : max;
  },-Infinity);
};

var recursiveMax = function(arr) {
  var max = arguments[1] || 0;
  if(!arr.length) { return max; }
  max = arr[0] > max ? arr[0] : max;
  return recursiveMax(arr.slice(1),max);
};