/*
  Put every element into its own list.

  Example: [2,7,8,3,1,4]
  Returns [[2], [7], [8], [3], [1], [4]]

*/

var iterativeListSeperate = function(arr) {
  return arr.map(function(element) {
    return [].concat(element);
  },[]);
};

var recursiveListSeparate = function(arr) {
  if(!arr.length) { return arr; }
  return recursiveListSeparate(arr.slice(0,-1)).concat([[arr[arr.length-1]]]);
};

