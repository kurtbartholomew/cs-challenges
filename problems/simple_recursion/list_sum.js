/*
  Add up all numbers in the list.

  Example: [2,7,8,3,1,4]
  Returns 25

*/

var iterativeListSum = function(arr) {
  return arr.reduce(function(sum, nextInt) {
    return sum + nextInt;
  });
};

var recursiveListSum = function(arr) {
  if(arr.length === 1) { return arr[0]; }
  return recursiveListSum(arr.slice(1)) + arr[0];
};