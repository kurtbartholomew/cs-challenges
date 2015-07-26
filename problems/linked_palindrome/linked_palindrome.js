/*
  Given a linked list filled with ASCII characters, find out
  if the contained characters (in their respective order) is a palindrome.

  Example: (r) -> (a) -> (c) -> (e) -> (c) -> (a) -> (r)
  Returns true

  Example: (a) -> (l) -> (b) -> (u) -> (m)
  Returns false

*/

var linkedListPalindromeFinder = function(linkedList) {
  if(linkedList.head === null) { return null; }
  var fastPointer = linkedList.head;
  var slowPointer = linkedList.head;
  var stacky = new Stack();

  while(fastPointer !== null && fastPointer.next !== null){
    stacky.push(slowPointer.value);
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  if(fastPointer !== null) {
    slowPointer = slowPointer.next;
  }

  while(slowPointer !== null){
    if(slowPointer.value !== stacky.pop()){
      return false;
    }
    slowPointer = slowPointer.next;
  }

  return true;
};