/*
  Construct the data structure known as a doubly linked list.
  The linked list itself should contain a reference to a head and tail Node.
  
  This structure should also contain additional connected Nodes.
  These nodes should not be in an array or object(hash).
  Instead, they should be connected by two points of reference.

  In addition, fill in the methods to add and remove from the list
  as well as return the size of the linked list.

  Note: Please instantiate in pseudoclassical style

  Example:
    var linky = new LinkedList();
    linky.addToTail(5)            // (5)
    linky.addToTail(6)            // (5) -> (6)
    linky.addToTail(2)            // (5) -> (6) -> (2)
    linky.size()                  //  3
    linky.removeFromHead()        // (6) -> (2)

*/

function DoublyLinkedList() {
  this.head = null;
  this.tail = null;
}

function DoublyLinkedListNode(value) {
  this.previous = null;
  this.next = null;
  this.value = value;
}

DoublyLinkedList.prototype.addToTail = function(value) {

};

DoublyLinkedList.prototype.removeFromHead = function() {

};

DoublyLinkedList.prototype.size = function() {
  
};