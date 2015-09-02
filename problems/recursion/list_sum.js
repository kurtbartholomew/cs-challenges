/*
  Add up all numbers in the list.

  Example: [2,7,8,3,1,4]
  Returns 25

*/

(function(CSC){

CSC.iterativeListSum = function(arr) {
  return arr.reduce(function(sum, nextInt) {
    return sum + nextInt;
  });
};

CSC.recursiveListSum = function(arr) {
  if(arr.length === 1) { return arr[0]; }
  return CSC.recursiveListSum(arr.slice(1)) + arr[0];
};
})(CSC);