/*
  Given a binary tree, find the first shared node between two
  provided nodes.

  Example: (4),(18)
                   (9)
                /       \
              /           \
          (5)                (24)
        /     \            /     \
      (3)     (7)       (18)     (29)
     /  \     /  \     /  \     /   \
   (2)  (4) (6)  (8) (15)  (21) (25) (36)

  Returns (9)

  Example: (15),(29)
                   (9)
                /       \
              /           \
          (5)                (24)
        /     \            /     \
      (3)     (7)       (18)     (29)
     /  \     /  \     /  \     /   \
   (2)  (4) (6)  (8) (15)  (21) (25) (36)

  Returns (24)

*/

var checkPath = function(currentNode,firstNode,secondNode){
  if(firstNode.data < currentNode.data && secondNode.data < currentNode.data) {
    return checkPath(currentNode.left,firstNode,secondNode);
  } else if(firstNode.data > currentNode.data && secondNode.data > currentNode.data) {
    return checkPath(currentNode.right,firstNode,secondNode);
  } else {
    return currentNode;
  }
};

var firstSharedNode = function(root,firstNode,secondNode){
  if(!firstNode || !secondNode){ throw new Error("Please provide 2 tree nodes"); }
  if(firstNode === root || secondNode === root) { return null; }
  return checkPath(root,firstNode,secondNode);
};
