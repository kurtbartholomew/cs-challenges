/*
  Given a list of sorted ascending integers with no duplicates, create
  a binary search tree with the shortest height possible.

  Example: [1,2,3,4,5,6,7,8,9,10,11]
  Returns (binary tree with height 4)

  Example: [5,6,7,8,9,10]
  Returns (binary tree with height 3)

*/

var smallestBST = function(array) {
  return createNewTree(array,0,array.length-1);
};

var createNewTree = function(array,start,end){
  if(end < start) { return null; }
  var midpoint = Math.floor((end + start)/2);
  var bst = { data: array[midpoint] };
  bst.left = createNewTree(array,start,midpoint-1);
  bst.right = createNewTree(array,midpoint+1,end);
  return bst;
};
