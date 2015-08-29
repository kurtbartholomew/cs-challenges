/*
  Find the maximum value in a list like the one below.
  Example: [2,7,8,3,1,4]
  Returns 8

*/

(function(CSC){

  CSC.iterativeMax = function(arr) {
    return arr.reduce(function(max,current){
      return max < current ? current : max;
    },-Infinity);
  };

  CSC.recursiveMax = function(arr) {
    if(!arr.length) { return -Infinity; }
    return Math.max(arr[0],this.recursiveMax(arr.slice(1)));
  };
})(CSC);