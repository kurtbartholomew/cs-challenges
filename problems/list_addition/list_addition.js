/*
  Given two lists representing integers, add the
  integers together and create another list.
  Each list node represents a single digit in the respective
  number. Write two functions, one to add the lists
  together if they are forward and one if they are backwards.

  Example (Backward): (6) -> (5) -> (4) -> (9),
                      (1) -> (7) -> (2) -> (3)
  Returns             (7) -> (2) -> (7) -> (2) -> (1)

  Example (Forward): (9) -> (4) -> (5) -> (6),
                     (3) -> (2) -> (7) -> (1)
  Returns     (1) -> (2) -> (7) -> (2) -> (7)

  Constraints: Assume all inputs will be the same length.
               All inputs are 9 or under.

*/

var backwardListAddition = function(lList1,lList2) {
  currentNode1 = lList1.head;
  currentNode2 = lList2.head;

  var newLinkedList = new LinkedList();
  var carryOver = false;
  var sum = 0;
  var summedNode;

  while(currentNode1 !== null || currentNode2 !== null || carryOver) {
    if(currentNode1 !== null) { sum += currentNode1.value; }
    if(currentNode1 !== null) { sum += currentNode2.value; }
    if(carryOver) { 
      sum++;
      carryOver = false;
    }
    if(sum > 9) { 
      sum = sum % 10;
      carryOver = true;
    }
    summedNode = new LinkedListNode(sum);
    if(newLinkedList.head === null) {
      newLinkedList.head = summedNode;
      newLinkedList.tail = summedNode;
    } else {
      newLinkedList.tail.next = summedNode;
      newLinkedList.tail = summedNode;
    }
    sum = 0;
    currentNode1 = currentNode1 !== null ? currentNode1.next : null;
    currentNode2 = currentNode2 !== null ? currentNode2.next : null;
  }  
  return newLinkedList;
};

// var forwardListAddition = function(lList1,lList2) {
  

//   var recurseThroughNodes = function(listNode1,listNode2){
//     if(listNode1 === null && listNode2 === null){
//       return new sumLinkedList();
//     }
    
//     listNode1 = listNode1 !== null ? listNode1.next : null;
//     listNode2 = listNode2 !== null ? listNode2.next : null;
    

//     return recurseThroughNodes(listNode1,listNode2);

//   };

//   recurseThroughNodes(lList1.head,lList2.head);


// };
