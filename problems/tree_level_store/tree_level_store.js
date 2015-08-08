/*
  Given a binary tree with references to left and right children,
  return an array of linked lists containing the nodes at each level
  of the tree.
  (Note: Please use the linked list structure you created previously.)

  Example:     (5)
              /   \
           (6)     (14)
          /  \     /   \
        (9) (12)  (7)  (19)
  Returns [(5)->,(6)->(14)->,(9)->(12)->(7)->(19)->]

*/

var treeLevelStore = function(rootTreeNode){
  if(!rootTreeNode) { throw new Error("You must provide a binary tree."); }
  var result = [];
  traverseLevels(rootTreeNode,0,result);
  return result;
};

var traverseLevels = function(currentNode,depth,depthArray){
  if(currentNode === null) { return ;}
  if(currentNode.data !== null){
    if(!depthArray[depth]) { depthArray[depth] = new LinkedList(); }
    depthArray[depth].addToTail(currentNode.data);
  }
  traverseLevels(currentNode.left,depth+1,depthArray);
  traverseLevels(currentNode.right,depth+1,depthArray);
};