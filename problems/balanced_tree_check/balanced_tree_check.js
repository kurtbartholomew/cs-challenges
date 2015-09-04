/*
  Given a binary tree, check if the tree is balanced ( the difference in
  the depth of two subtrees is no greater than 1).

  Example:     (5)
              /   \
           (6)     (14)
          /  \     /   \
        (9) (12)  (7)  (19)
  Returns true

  Example:     (5)
              /   \
           (6)     (14)
                      \
                      (19)
                      /   \
                    (15)  (24)
  Returns false

*/

(function(CSC){

CSC.balancedTreeCheck = function(treeNode){
  if(!treeNode){ throw new Error("Please supply a tree."); }
  if(CSC.treeBranchDepth(treeNode) === -1){
    return false;
  } else {
    return true;
  }
};

CSC.treeBranchDepth = function(treeNode) {
  if(treeNode === null) { return 0; }
  var leftDepth = CSC.treeBranchDepth(treeNode.left) + 1;
  if(leftDepth === -1) { return -1; }
  var rightDepth = CSC.treeBranchDepth(treeNode.right) + 1;
  if(Math.abs(leftDepth - rightDepth) > 1) { return -1; }
  return Math.max(leftDepth,rightDepth);
};

})(CSC);