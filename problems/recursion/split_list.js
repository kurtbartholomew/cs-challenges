/*
	Split a list of numbers with regard to a pivot element. All elements
	smaller than the pivot element go in the first return list, all other
	elements go into the second return list. Both return list are inside one
	list.

	Example: [2,7,8,3,1,4] , 4
	Returns [[2,3,1],[7,8,4]]

*/

(function(CSC){

CSC.iterativeListSplit = function(arr, element) {
  return arr.reduce(function(splitArray,comparisonElement){
    if(comparisonElement < element) { splitArray[0].push(comparisonElement); }
    else { splitArray[1].push(comparisonElement); }
    return splitArray;
  },[[],[]]);
};

CSC.recursiveListSplit = function(arr, element) {
  if(!arr.length) { return [[],[]]; }
  var newArr = CSC.recursiveListSplit(arr.slice(0,-1),element);
  if(arr[arr.length-1] < element) {
    newArr[0].push(arr[arr.length-1]);
  } else {
    newArr[1].push(arr[arr.length-1]);
  }
  return newArr;
};

})(CSC);