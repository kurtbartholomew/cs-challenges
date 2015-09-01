/*
  Reduce series of 0s to a single 0.

  Example: [2,0,0,0,1,4]
  Returns [2,0,1,4]

*/

(function(CSC){

CSC.iterativeSeriesReduce = function(arr) {
  return arr.filter(function(element,index,array){
    if(index === 0) { return true; }
    return (arr[index-1] !== element);
  });
};

CSC.recursiveSeriesReduce = function(arr) {
  if(arr.length === 1) { return arr; }
  var newArr = recursiveSeriesReduce(arr.slice(0,-1));
  if(newArr[newArr.length-1] !== arr[arr.length-1]) {
    newArr.push(arr[arr.length-1]);
  }
  return newArr;
};

})(CSC);