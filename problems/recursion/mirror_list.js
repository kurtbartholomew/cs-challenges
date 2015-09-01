/*
	Mirror the elements of a list and append them.

	Example: [2,7,8,3,1,4]
	Returns [2,7,8,3,1,4,4,1,3,8,7,2]

*/

(function(CSC){

CSC.iterativeListMirror = function(arr) {
  var result = arr.slice();
  var length = result.length;
  for(var i = (length-1); i >= 0; i--) {
    result[length] = result[i];
    length++;
  }
  return result;
};

CSC.recursiveListMirror = function(arr) {
	if(!arr.length) { return arr; }
  return [arr[0]].concat(recursiveListMirror(arr.slice(1)).concat(arr[0]));
};

})(CSC);