/*
  Given an integer n, reorder a linked list so that values
  less than n are before all values greater than or equal to n.

  Example: (8) -> (3) -> (16) -> (15) -> (32) -> (7) -> (2) -> (17), 10
  Returns (8) -> (3) -> (7) -> (2) -> (15) -> (16) -> (32) -> (17)

*/

var linkedListSectioning = function(linkedList, number){
  var smallerListHead = null;
  var smallerListTail = null;
  var largerListHead = null;
  var largerListTail = null;
  
  var currentNode = linkedList.head;
  var next;

  while(currentNode){
    next = currentNode.next;
    currentNode.next = null;
    if(currentNode.value < number){
      if(smallerListHead === null){
        smallerListHead = currentNode;
        smallerListTail = currentNode;
      } else {
        smallerListTail.next = currentNode;
        smallerListTail = currentNode;
      }
    } else if(currentNode.value >= number){
      if(largerListHead === null){
        largerListHead = currentNode;
        largerListTail = currentNode;
      } else {
        largerListTail.next = currentNode;
        largerListTail = currentNode;
      }
    }
    currentNode = next;
  }

  smallerListTail.next = largerListHead;
  var sectioned = new LinkedList();
  sectioned.head = smallerListHead;
  sectioned.tail = largerListTail;
  return sectioned;
};