/*
  Given a linked list, mutate the original list by removing the
  'center' node.

  Example: (3) -> (4) -> (5) -> (6) -> (7) -> (8) -> (9)
  Returns: undefined
  Original array should now be: (3) -> (4) -> (5) -> (7) -> (8) -> (9)

  Constraint: No mutation will occur if
              used on lists with an even number of nodes

 */

(function(CSC){

CSC.centerNodeRemoval = function(linkedList){
  var fastPointer = linkedList.head;
  var normalPointer = linkedList.head;
  var previousNode;
  while(fastPointer.next) {
    if(!fastPointer.next.next) { return undefined; }
    fastPointer = fastPointer.next.next;
    previousNode = normalPointer;
    normalPointer = normalPointer.next;
  }
  previousNode.next = normalPointer.next;
  normalPointer.next = null;
};

})(CSC);