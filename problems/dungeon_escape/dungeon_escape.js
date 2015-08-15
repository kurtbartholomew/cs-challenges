/*
  You are trying to help your friend escape from a dungeon by finding a
  route out of a dangerous dungeon. You are given an n x n matrix
  of 1's and 0's. The 1's represent a safe path while the 0's represent an
  impassable obstacle. Your friend starts at [0,0] and must progress to
  to [n-1,n-1]. Create an algorithm to help your friend find the path out.

  Example:
  [[1,1,1,0,0,0,0]
   [1,0,1,1,1,1,1]
   [1,0,1,0,0,0,0]
   [1,0,1,1,1,1,0]
   [1,0,1,0,0,1,1]
   [1,0,1,1,0,0,1]
   [1,1,0,1,1,0,1]]
  Returns [[0,0],[0,1],[0,2],[1,2],[2,2],[3,2],
           [3,3],[3,4],[3,5],[4,5],[4,6],[5,6],[6,6]]

  Example:
  [[1,1,1,0,0,0,0]
   [1,0,1,1,1,1,1]
   [1,0,1,0,0,0,0]
   [1,0,1,0,0,1,0]
   [1,0,1,0,0,1,1]
   [1,0,1,1,0,0,1]
   [1,1,0,1,1,0,1]]
  Returns []

*/

var findRoute = function(dungeon,route,row,column){
  if(row < 0 || column < 0 || !dungeon[row][column]) { return false; }
  if((row === 0 && column === 0) ||
      findRoute(dungeon,route,row-1,column) ||
      findRoute(dungeon,route,row,column-1)) {
    route.push([row,column]);
    return true;
  }
};

var dungeonEscape = function(nxnMatrix){
  var route = [];
  findRoute(nxnMatrix,route,nxnMatrix.length-1,nxnMatrix[0].length-1);
  return route;
};