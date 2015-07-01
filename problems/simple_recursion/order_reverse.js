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
  var index = arguments[1] === undefined ? arr.length-1 : arguments[1];
  var newList = arguments[2] || [];
  if(index === 0) {
    newList.push(arr[index]);
    return newList;
  }
  newList.push(arr[index]);
  return recursiveReverse(arr,index-1,newList);
};