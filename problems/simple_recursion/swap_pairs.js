/*
  Swap all elements in pairs. If the length of the list is odd, the last
  element stays in place.

  Example: [2,7,8,3,1,4]
  Returns [7,2,3,8,4,1]

  Example: [3,6,8,1,5]
  Returns [6,3,1,8,5]

*/

var iterativePairSwap = function(arr) {
  var temp = 0;
  for(var i = 0; i < arr.length; i++) {
    if(i % 2 !== 0) {
      temp = arr[i];
      arr[i] = arr[i-1];
      arr[i-1] = temp;
    }
  }
  return arr;
};

var recursivePairSwap = function(arr) {
  var index = arguments[1] !== undefined ? arguments[1] : 0;
  var newList = arguments[2] || [];
  if(index === arr.length) { return newList; }
  if(index % 2 !== 0){
    newList[index] = arr[(index-1)];
  } else {
    newList[index] = arr[(index+1)] !== undefined ? arr[(index+1)] : arr[index];
  }
  return recursivePairSwap(arr,index+1,newList);
};