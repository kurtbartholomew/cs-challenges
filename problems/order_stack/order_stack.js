/*
  Using the Stack data structure ( containing the push, pop, peek
  and isEmpty methods), create a method that will sort the stack in descending
  order. (Smallest values on top of the stack)

  Example: (7) -> (6) -> (5) -> (4) -> (3) -> (2) -> (1) 
  Returns  (7) -> (6) -> (5) -> (4) -> (3) -> (2) -> (1)

  Example: (4) -> (8) -> (6) -> (12) -> (15) -> (2) -> (7) 
  Returns  (15) -> (12) -> (8) -> (7) -> (6) -> (4) -> (2)

*/

var orderStack = function(unorderedStack){
  var tempStack = new Stack();
  var tempVal = 0;
  if(unorderedStack.peek() === null) { return null; }
  while(!unorderedStack.isEmpty()){
    tempVal = unorderedStack.pop();
    while(!tempStack.isEmpty() && tempStack.peek() > tempVal){
      unorderedStack.push(tempStack.pop());
    }
    tempStack.push(tempVal);
  }
  while(!tempStack.isEmpty()){
    unorderedStack.push(tempStack.pop());
  }
  return unorderedStack;
};
