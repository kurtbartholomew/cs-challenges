/*
  Reverse the order of the list.
  Example: [2,7,8,3,1,4]
  Returns [4,1,3,8,7,2]

*/

var iterativeReverse = function(arr) {
  return arr.reduce(function(newList,currentElement){
    newList.unshift(currentElement);
    return newList;
  },[]);
};

var recursiveReverse = function(arr) {
  if(!arr.length) { return arr; }
  return recursiveReverse(arr.slice(1)).concat(arr[0]);
};