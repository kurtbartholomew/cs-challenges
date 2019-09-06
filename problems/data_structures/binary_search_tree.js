/*
  Construct the data structure known as a Binary Search Tree.
  This is a structure made of nodes all with the same characteristics:
   - A data attribute
   - A reference to the left and right child of the current child.

  In addition, a binary search tree is a self-sorting structure. All
  left node descendants should be less than all right node descendants.
  Example: 
                (15)                  
               /    \
            (6)      (25)
           /  \      /   
         (2)  (8)  (17)       
  
  For this implementation, assume that we do not allow duplicate values.

  Fill in the methods to add a child (leaf) to the tree and check if a tree
  contains a value.

  Note: Please instantiate in pseudoclassical style

  Example:
    var bsleafy = new Tree(10);
    bsleafy.data                     //  10
    bsleafy.right                    //  null
    bsleafy.left                     //  null
    bsleafy.insert(4)        
    bsleafy.insert(2)        
    bsleafy.insert(15)
    bsleafy.insert(12)
    bsleafy.contains(3)              //  false
    bsleafy.contains(12)              //  true

*/

var BinarySearchTree = function(value){
  if(!value){ throw new Error("Cannot start a tree with no value passed"); }

};

BinarySearchTree.prototype.insert = function(value){
  if(!value){ throw new Error("Cannot insert a node without a value"); }
  if(this.contains(value)) { throw new Error("Cannot insert a value already in the tree"); }

};

BinarySearchTree.prototype.contains = function(value){
  if(!value){ throw new Error("Cannot search for a null value"); }

};
