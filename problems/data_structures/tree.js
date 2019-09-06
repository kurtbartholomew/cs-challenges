/*
  Construct the data structure known as a Tree.
  This is a structure made of Nodes all with the same characteristics:
   - A data attribute
   - A collection of children or (in the case of a binary tree) a reference
     to the left and right child.

  Fill in the methods to add a child (leaf) to the tree, remove a child
  from the tree, check if a tree contains a value.

  Note: Please instantiate in pseudoclassical style

  Example:
    var leafy = new Tree();
    leafy.data                     //  null
    leafy.children                 //  []
    leafy.addChild(2)        
    leafy.addChild(4)
    leafy.removeChild(7)           //  null
    leafy.children                 //  [childNode1,childNode2]
    leafy.children[0].addChild(7)  
    leafy.children[1].addChild(9)
    leafy.children[1].addChild(11)
    leafy.children[1].data         //  4
    leafy.contains(3)              //  false
    leafy.contains(7)              //  true
    leafy.removeChild(7)           //  childNode3 reference

*/

function Tree(dataValue) {
  this.data = dataValue || null;
  this.children = [];
}

Tree.prototype.addChild = function(dataValue){
  
};

Tree.prototype.removeChild = function(dataValue){

};

Tree.prototype.contains = function(dataValue){

};

