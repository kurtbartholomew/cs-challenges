/*
	Augment every element in a list with a new value. 
  The elements are lists themselves.
	
	Example: [[],[3],[7]] , 5
	Returns [[5],[3,5],[7,5]]

*/

(function(CSC){

CSC.iterativeElementInsert = function(arr, element) {
  return arr.map(function(arrayElement){
    return arrayElement.concat(element);
  });
};

CSC.recursiveElementInsert = function(arr, element) {
	if(!arr.length) { return arr; }
  return CSC.recursiveElementInsert(arr.slice(0,-1),element).concat([arr[arr.length-1].concat(element)]);
};

})(CSC);