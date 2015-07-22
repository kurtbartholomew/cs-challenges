/*
  Given a singly linked list, find the value of the node
  n nodes from the end of the list.

  Example: (4) -> (3) -> (9) -> (7) -> (4) -> (1) -> (12) , 3
  Returns 4

*/

var nthFromLast = function(lList,numberOfNodes) {
  if(lList.size() < numberOfNodes) { return null; }
  var first = lList.head;
  var second = lList.head;
  var startCounter = 0;
  while(first){
    if(startCounter>=numberOfNodes){
      second = second.next;
    }
    first = first.next;
    startCounter++;
  }
  return second.value;
};