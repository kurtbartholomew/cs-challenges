/*
  Zip two lists of numbers. If one list is shorter, just append the rest of
  the other list. First element comes from the first list.

  Example: [2,7,8,3,1,4], [9,5,1]
  Returns [2,9,7,5,8,1,3,1,4]

*/

var iterativeListZip = function(arr1, arr2) {
  var zipped = [];
  var smallestLength = Math.min(arr1.length,arr2.length);
  for(var i = 0; i < smallestLength; i++) {
    zipped.push(arr1[i],arr2[i]);
  }
  return arr1.length === smallestLength ? 
    zipped.concat(arr2.slice(smallestLength)):
    zipped.concat(arr1.slice(smallestLength));
};

var recursiveListZip = function(arr1, arr2) {
  if(!arr1.length || !arr2.length) { 
    return arr1.concat(arr2);
  }
  return [arr1[0],arr2[0]].concat(recursiveListZip(arr1.slice(1),arr2.slice(1)));
};