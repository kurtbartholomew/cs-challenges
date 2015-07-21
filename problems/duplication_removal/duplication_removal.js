/*
  Given a singly linked list, remove all duplicates.

  Example: (8) -> (9) -> (2) -> (6) -> (8) -> (2) -> (3)
  Returns (8) -> (9) -> (2) -> (6) -> (3)

  Example: (5) -> (3) -> (2) -> (7) -> (8) -> (1)
  Returns (5) -> (3) -> (2) -> (7) -> (8) -> (1)

*/

var DuplicationRemoval = function(linkedList) {
  if(linkedList.tail === null) { return linkedList; }
  var valueHash = {};
  var previousNode = linkedList.head;
  var currentNode = linkedList.head.next;
  valueHash[linkedList.head.value] = true;
  while(currentNode) {
    if(valueHash[currentNode.value]){
      if(currentNode.next){
        previousNode.next = currentNode.next;
        currentNode.next = null;
      } else {
        previousNode.next = null;
      }
    } else {
      valueHash[currentNode.value] = true;
      previousNode = currentNode;
    }
    currentNode = previousNode.next;
  }
  return linkedList;
};