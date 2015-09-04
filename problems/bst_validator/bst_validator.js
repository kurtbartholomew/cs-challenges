/*
  Given a binary tree, check if the binary tree is valid (that is,
  the values of all left descendant nodes are less than the values of all
  right descendant nodes)

  Example:  (9)
          /     \
        (5)     (15)
       /  \     /   \
     (3)  (7) (12) (17)
  Returns true

  Example:  (9)
          /     \
        (5)     (15)
       /  \     /   \
     (3)  (25) (12) (17)
  Returns false
  
*/

(function(CSC){

CSC.BSTValidator = function(treeNode){
  if(!treeNode) { throw new Error('You must pass a valid binary tree node'); }
  return CSC.bstTraverseAndCheck(treeNode,null,null);
};

CSC.bstTraverseAndCheck = function(currentNode,minValue,maxValue){
  if(currentNode === null){ return true; }

  if((minValue !== null && currentNode.data <= minValue) ||
     (maxValue !== null && currentNode.data > maxValue)) {
    return false;
  }

  if(CSC.bstTraverseAndCheck(currentNode.left,minValue,currentNode.data) &&
     CSC.bstTraverseAndCheck(currentNode.right,currentNode.data,maxValue)){
    return true;
  } else {
    return false;
  }
};

})(CSC);