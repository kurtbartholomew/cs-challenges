/*
  Given two linked lists, find if the lists share a common node.
  If yes, return the first common node. If no, return null.
  Equal values should not cause the method to return a node.

  Example: (3) -> (4) -> (5) -> (6) -> (5)
                                 *      *
           (9) -> (8) -> (7) -> (6) -> (5)
  Returns reference to linkedListNode(6)

  Example: (10) -> (11) -> (12) -> (13) -> (14),
           (14) -> (13) -> (12) -> (11) -> (10)
  Return null

*/

var commonNodeDetector = function(linkedList1, linkedList2){
  var recurseThroughList = function(node1,node2) {
    if(node1 === null && node2 === null) {
      return null;
    }
    node1 = node1 === null ? null : node1.next;
    node2 = node2 === null ? null : node2.next;
    var result = recurseThroughList(node1,node2);
    if(node1 === node2){
      result = node1;
    }
    return result;
  };
  return recurseThroughList(linkedList1.head,linkedList2.head);
};