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
  var node = value.constructor === DoublyLinkedListNode ?
             value : new DoublyLinkedListNode(value);
  if(this.head === null) {
    this.head = node;
    this.tail = node;
  } else {
    node.previous = this.tail;
    this.tail.next = node;
    this.tail = node;
  }
};

DoublyLinkedList.prototype.removeFromHead = function() {
  if(this.head === null) { return null; }
  var oldHead = this.head;
  this.head = oldHead.next;
  this.head.previous = null;
  oldHead.next = null;
  return oldHead.value;
};

DoublyLinkedList.prototype.size = function() {
  if(this.head === null) { return 0; }
  var length = 1;
  var currentNode = this.head;
  while(currentNode.next !== null) {
    length++;
    currentNode = currentNode.next;
  }
  return length;
};