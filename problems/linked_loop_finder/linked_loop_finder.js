/*
  Given a linked list, find if the list's nodes create a loop
  with its references.

  Example: (2) -> (3) -> (4) -> (5) -> (6) -> (7)
  Return false

  Example: (9) -> (35) -> (29) <- (64)
                           |       ^
                           v       |
                          (42) -> (75)
  Return true

*/

var linkedLoopFinder = function(linkedList){
  var slowPointer = linkedList.head;
  var fastPointer = linkedList.head;

  while(fastPointer !== null && fastPointer.next !== null) {
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;

    if(slowPointer === fastPointer) {
      return true;
    }
  }
  return false;
};