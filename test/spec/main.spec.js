describe('Recursion', function(){

  describe('Recursive Max', function() {

    it('should operate recursively',function(){
      sinon.spy(window,"recursiveMax");
      recursiveMax([2,3]);
      assert.equal(recursiveMax.callCount > 1,true);
      window.recursiveMax.restore();
    });

    it('should return the correct max from a list', function() {
      assert.equal(recursiveMax([2,7,8,3,1,4]), 8);
    });
  });

  describe('Recursive Occurrence Count', function() {
    it('should operate recursively',function(){
      sinon.spy(window,"recursiveTimes");
      recursiveTimes([2,3],2);
      assert.equal(recursiveTimes.callCount > 1,true);
      window.recursiveTimes.restore();
    });

    it('should count the correct number of 4\'s', function() {
      assert.equal(recursiveTimes([2,7,4,4,1,4],4),3);
    });
  });

  describe('Recursive List Reverse', function() {
    it('should operate recursively',function(){
      sinon.spy(window,"recursiveReverse");
      recursiveReverse([2,3]);
      assert.equal(recursiveReverse.callCount > 1,true);
      window.recursiveReverse.restore();
    });

    it('should reverse a list', function() {
      assert.deepEqual(recursiveReverse([2,7,8,3,1,4]),[4,1,3,8,7,2]);
    });
  });

  describe('Recursive Pair Swap', function() {
    it('should operate recursively',function(){
      sinon.spy(window,"recursivePairSwap");
      recursivePairSwap([2,3]);
      assert.equal(recursivePairSwap.callCount > 1,true);
      window.recursivePairSwap.restore();
    });

    it('should swap pairs for even lists', function() {
      assert.deepEqual(recursivePairSwap([2,7,8,3,1,4]),[7,2,3,8,4,1]);
    });

    it('should swap pairs for odd lists', function() {
      assert.deepEqual(recursivePairSwap([3,6,8,1,5]),[6,3,1,8,5]);
    });
  });

  describe('Recursive List Sum', function() {
    it('should operate recursively',function(){
      sinon.spy(window,"recursiveListSum");
      recursiveListSum([2,3]);
      assert.equal(recursiveListSum.callCount > 1,true);
      window.recursiveListSum.restore();
    });

    it('should return the sum of all the list\'s elements', function() {
      assert.equal(recursiveListSum([2,7,8,3,1,4]),25);
    });
  });

  describe('Recursive List Separate', function() {
    it('should operate recursively',function(){
      sinon.spy(window,"recursiveListSeparate");
      recursiveListSeparate([2,3]);
      assert.equal(recursiveListSeparate.callCount > 1,true);
      window.recursiveListSeparate.restore();
    });
    
    it('should separate each element into it\'s own list', function() {
      assert.deepEqual(recursiveListSeparate([2,7,8,3,1,4]),[[2],[7],[8],[3],[1],[4]]);
    });
  });

  describe('Recursive Pair Separate', function() {
    it('should operate recursively',function(){
      sinon.spy(window,"recursivePairSeparate");
      recursivePairSeparate([2,3]);
      assert.equal(recursivePairSeparate.callCount > 1,true);
      window.recursivePairSeparate.restore();
    });
    
    it('should separate pairs of even lists', function() {
      assert.deepEqual(recursivePairSeparate([2,7,8,3,1,4]),[[2,7],[8,3],[1,4]]);
    });

    it('should separate pairs of odd lists', function() {
      assert.deepEqual(recursivePairSeparate([3,6,8,1,5]),[[3,6],[8,1],[5,0]]);
    });
  });

  describe('Recursive List Flatten', function() {
    it('should operate recursively',function(){
      sinon.spy(window,"recursiveListFlatten");
      recursiveListFlatten([2,3]);
      assert.equal(recursiveListFlatten.callCount > 1,true);
      window.recursiveListFlatten.restore();
    });

    it('should create a flat list from several nested lists', function() {
      assert.deepEqual(recursiveListFlatten([[2,7], [8,3], [1,4]]),[2,7,8,3,1,4]);
    });
  });

  describe('Recursive List Split', function() {
    it('should operate recursively',function(){
      sinon.spy(window,"recursiveListSplit");
      recursiveListSplit([2,3]);
      assert.equal(recursiveListSplit.callCount > 1,true);
      window.recursiveListSplit.restore();
    });

    it('should produce two lists of integers: one lower than the pivot element and one higher or equal', function() {
      assert.deepEqual(recursiveListSplit([2,7,8,3,1,4],4),[[2,3,1],[7,8,4]]);
    });
  });

  describe('Recursive Evens Filter', function() {
    it('should operate recursively',function(){
      sinon.spy(window,"recursiveEvenFilter");
      recursiveEvenFilter([2,3]);
      assert.equal(recursiveEvenFilter.callCount > 1,true);
      window.recursiveEvenFilter.restore();
    });

    it('should return only a list of only even integers', function() {
      assert.deepEqual(recursiveEvenFilter([2,7,8,3,1,4]),[2,8,4]);
    });
  });

  describe('Recursive List Sign Inversion', function() {
    it('should operate recursively',function(){
      sinon.spy(window,"recursiveListInvert");
      recursiveListInvert([2,3]);
      assert.equal(recursiveListInvert.callCount > 1,true);
      window.recursiveListInvert.restore();
    });

    it('should shift every other integer negative', function() {
      assert.deepEqual(recursiveListInvert([2,7,8,3,1,4]),[2,-7,8,-3,1,-4]);
    });

    it('should also shift negatives back to positive', function() {
      assert.deepEqual(recursiveListInvert([-5,-3,7,1,-6,2]),[5,-3,7,-1,6,-2]);
    });
  });

  describe('Recursive List Zip', function() {
    it('should operate recursively',function(){
      sinon.spy(window,"recursiveListZip");
      recursiveListZip([2,3],[2,3]);
      assert.equal(recursiveListZip.callCount > 1,true);
      window.recursiveListZip.restore();
    });

    it('should zip two lists together into one', function() {
      assert.deepEqual(recursiveListZip([2,7,8,3,1,4], [9,5,1]),[2,9,7,5,8,1,3,1,4]);
    });
  });

  describe('Recursive List Creator', function() {
    it('should operate recursively',function(){
      sinon.spy(window,"recursiveListCreator");
      recursiveListCreator(2,3);
      assert.equal(recursiveListCreator.callCount > 1,true);
      window.recursiveListCreator.restore();
    });

    it('should create a list of all zeroes', function() {
      assert.deepEqual(recursiveListCreator(0, 5),[0,0,0,0,0]);
    });

    it('should create a list of three sevens', function() {
      assert.deepEqual(recursiveListCreator(7, 3),[7,7,7]);
    });
  });

  describe('Recursive Counting List', function() {
    it('should operate recursively',function(){
      sinon.spy(window,"recursiveCountingList");
      recursiveCountingList(2,3);
      assert.equal(recursiveCountingList.callCount > 1,true);
      window.recursiveCountingList.restore();
    });

    it('should create an ascending list if second integer is higher', function() {
      assert.deepEqual(recursiveCountingList(2,5),[2,3,4]);
    });

    it('should create an descending list if first integer is higher', function() {
      assert.deepEqual(recursiveCountingList(8,1),[8,7,6,5,4,3,2]);
    });

    it('should create an empty list if given the same elements', function() {
      assert.deepEqual(recursiveCountingList(3,3),[]);
    });
  });

  describe('Recursive Series Reduction', function() {
    it('should operate recursively',function(){
      sinon.spy(window,"recursiveSeriesReduce");
      recursiveSeriesReduce([2,3]);
      assert.equal(recursiveSeriesReduce.callCount > 1,true);
      window.recursiveSeriesReduce.restore();
    });

    it('should reduce a series of zeroes to one', function() {
      assert.deepEqual(recursiveSeriesReduce([2,0,0,0,1,4]),[2,0,1,4]);
    });
  });

  describe('Recursive List Mirror', function() {
    it('should operate recursively',function(){
      sinon.spy(window,"recursiveListMirror");
      recursiveListMirror([2,3]);
      assert.equal(recursiveListMirror.callCount > 1,true);
      window.recursiveListMirror.restore();
    });

    it('should insert elements to mirror the original list', function() {
      assert.deepEqual(recursiveListMirror([2,7,8,3,1,4]),[2,7,8,3,1,4,4,1,3,8,7,2]);
    });
  });

  describe('Recursive Element Insert', function() {
    it('should operate recursively',function(){
      sinon.spy(window,"recursiveElementInsert");
      recursiveElementInsert([[2],[3]]);
      assert.equal(recursiveElementInsert.callCount > 1,true);
      window.recursiveElementInsert.restore();
    });

    it('should create nested lists of each element with the passed value', function() {
      assert.deepEqual(recursiveElementInsert([[],[3],[7]],5),[[5],[3,5],[7,5]]);
    });
  });

  describe('Recursive List Nest', function() {
    it('should operate recursively',function(){
      sinon.spy(window,"recursiveListNest");
      recursiveListNest([[2],[3]]);
      assert.equal(recursiveListNest.callCount > 1,true);
      window.recursiveListNest.restore();
    });

    it('should append every nested list inside the previous list', function() {
      assert.deepEqual(recursiveListNest([[4,3],[5,6],[8,2]]),[4,3,[5,6,[8,2]]]);
    });
  });

  describe('Recursive Sublist Check', function() {
    it('should operate recursively',function(){
      sinon.spy(window,"recursiveSublistCheck");
      recursiveSublistCheck([2,3],[2,3]);
      assert.equal(recursiveSublistCheck.callCount > 1,true);
      window.recursiveSublistCheck.restore();
    });

    it('should return true if the main list starts with the passed sublist', function() {
      assert.equal(recursiveSublistCheck([2,7,8,3,1,4],[2,7]),true);
    });

    it('should return false if the main list doesn\'t start with the passed sublist', function() {
      assert.equal(recursiveSublistCheck([5,6,7,1,4,6,7,1,3],[6,7,1]),false);
    });
  });
  
  describe('Recursive Sublist Extraction', function() {
    it('should operate recursively',function(){
      sinon.spy(window,"recursiveSublistExtract");
      recursiveSublistExtract([0,1,2,3],2,3);
      assert.equal(recursiveSublistExtract.callCount > 1,true);
      window.recursiveSublistExtract.restore();
    });

    it('should extract a list from even numbered lists', function() {
      assert.deepEqual(recursiveSublistExtract([2,7,8,3,1,4],2,4),[8,3]);
    });
    it('should extract a list from odd numbered lists', function() {
      assert.deepEqual(recursiveSublistExtract([4,2,7,9,7],1,4),[2,7,9]);
    });
  });

  describe('Fibonacci Sequence', function() {
    it('should return 0 when n is zero and 1 when n is one', function() {
      assert.equal(fibonacci(0),0);
      assert.equal(fibonacci(1),1);
    });
    it('should return the nth number in a fibonacci sequence', function() {
      assert.equal(fibonacci(5),5);
      assert.equal(fibonacci(6),8);
    });
    it('should utilize memoization to run at roughly O(n) time complexity', function() {
      assert.equal(fibonacci(45),1134903170);
    });
  });

  describe('Meal Planner', function() {
    it('should return the correct number of plans for a small amount of hamburgers', function() {
      assert.equal(mealPlanner(8),171);
    });
    it('should return the correct number of plans for a large amount of hamburgers', function() {
      assert.equal(mealPlanner(22),2796203);
    });
  });

  describe('Dungeon Escape', function() {
    var possibleDungeon = [[1,1,1,0,0,0,0],
                           [1,0,1,1,1,1,1],
                           [1,0,1,1,1,1,0],
                           [1,0,1,1,1,1,0],
                           [1,0,1,0,1,1,1],
                           [1,0,1,1,0,0,1],
                           [1,1,0,1,1,0,1]];
    var impossibleDungeon = [[1,1,1,0,0,0,0],
                             [1,0,1,1,1,1,1],
                             [1,0,1,0,0,0,0],
                             [1,0,1,0,0,1,0],
                             [1,0,1,0,0,1,1],
                             [1,0,1,1,0,0,1],
                             [1,1,0,1,1,0,1]];
    it('should return an empty array when no path exists', function() {
      assert.deepEqual(dungeonEscape(impossibleDungeon),[]);
    });
    it('should return an array of array positions for the path', function() {
      assert.deepEqual(dungeonEscape(possibleDungeon),[[0,0],[0,1],[0,2],[1,2],
                                                       [1,3],[1,4],[1,5],[2,5],
                                                       [3,5],[4,5],[4,6],[5,6],
                                                       [6,6]]);
    });
  });

  describe('Power Set', function() {
    it('should throw errors if sufficient arguments are not provided', function() {
      assert.throws(function(){ powerSet(); }, Error);
    });
    it('should return null if given an empty set', function() {
      assert.deepEqual(powerSet([]),['']);
    });
    it('should return the proper subsets of any given set', function() {
      assert.deepEqual(powerSet(['5','8','3']),["", "5", "8", "58", "3", "53", "83", "583"]);
      assert.deepEqual(powerSet(['5','8','3','4']),
        ["", "5", "8", "58", "3", "53", "83", "583", "4", "54", "84", "584", "34", "534", "834", "5834"]);
    });
  });

  describe('Broken Multiply', function() {
    it('should throw errors if sufficient arguments are not provided', function() {
      assert.throws(function(){ brokenMultiply(); }, Error);
    });
    it('should return zero if either input is zero', function() {
       assert.equal(brokenMultiply(0,2),0);
       assert.equal(brokenMultiply(7,0),0);
    });
    it('should return the other argument if either input is one', function() {
       assert.equal(brokenMultiply(1,2),2);
       assert.equal(brokenMultiply(7,1),7);
    });
    it('should return the correct product', function() {
      assert.equal(brokenMultiply(2,2),4);
      assert.equal(brokenMultiply(43,62),2666);
      assert.equal(brokenMultiply(450,953),428850);
    });
  });

  describe('Coin sums', function(){
    it('should throw errors if sufficient arguments are not provided', function() {
      assert.throws(function(){ coinSums(); }, Error);
    });
    it('should return zero if input is zero', function() {
       assert.equal(coinSums(0),0);
    });
    it('should return one if input is below five', function() {
       assert.equal(coinSums(1),1);
       assert.equal(coinSums(2),2);
       assert.equal(coinSums(3),3);
       assert.equal(coinSums(4),4);
    });
    it('should return the correct number of ways', function() {
      assert.equal(coinSums(12),23);
      assert.equal(coinSums(21),67);
    });
  });
});

describe('Data Structures', function() {

  describe('Linked List', function() {
    it('should contain a head and tail reference when instantiated', function() {
      var linky = new LinkedList();
      assert.property(linky,'head');
      assert.property(linky,'tail');
    });
    it('nodes should contain a next reference and value when instantiated', function() {
      var node = new LinkedListNode();
      assert.property(node,'next');
      assert.property(node,'value');
    });
    it('should be able to add nodes', function() {
      var linky = new LinkedList();
      linky.addToTail(7);
      linky.addToTail(8);
      linky.addToTail(9);
      assert.equal(linky.head.value,7);
      assert.equal(linky.tail.value,9);
    });
    it('should be able to remove nodes', function() {
      var linky = new LinkedList();
      linky.addToTail(7);
      linky.addToTail(8);
      linky.addToTail(9);
      assert.equal(linky.removeFromHead(),7);
      assert.equal(linky.removeFromHead(),8);
    });
    it('should be able to return the size of the linked list', function() {
      var linky = new LinkedList();
      assert.equal(linky.size(),0);
      linky.addToTail(7);
      linky.addToTail(8);
      linky.addToTail(9);
      assert.equal(linky.size(),3);
    });
    it('should return null if remove is called on an empty list', function() {
      var linky = new LinkedList();
      assert.equal(linky.removeFromHead(),null);
    });
  });

  describe('Stack', function() {
    it('should return the size of a stack', function() {
      var stacky = new Stack();
      assert.equal(stacky.size(),0);
    });
    it('should be able to add new values to the stack', function() {
      var stacky = new Stack();
      stacky.push(7);
      stacky.push(8);
      assert.equal(stacky.size(),2);
    });
    it('should be able to look at the top value on the stack', function() {
      var stacky = new Stack();
      stacky.push(1);
      stacky.push(2);
      stacky.push(3);
      stacky.push(4);
      assert.equal(stacky.peek(),4);
    });
    it('should be able to remove the top value on the stack', function() {
      var stacky = new Stack();
      stacky.push(1);
      stacky.push(2);
      stacky.push(3);
      stacky.push(4);
      assert.equal(stacky.pop(),4);
    });
    it('should return null when trying to remove from an empty stack', function() {
      var stacky = new Stack();
      assert.equal(stacky.pop() === null,true);
    });
    it('should be able to tell if the stack is empty or not', function() {
      var stacky = new Stack();
      stacky.push(5);
      assert.equal(stacky.isEmpty(),false);
      stacky.pop();
      assert.equal(stacky.isEmpty(),true);
    });
  });

  describe('Queue', function() {
    it('should return the size of a stack', function() {
      var line = new Queue();
      assert.equal(line.size(),0);
    });
    it('should be able to add new values to the stack', function() {
      var line = new Queue();
      line.enqueue(7);
      line.enqueue(8);
      assert.equal(line.size(),2);
    });
    it('should be able to remove the top value on the stack', function() {
      var line = new Queue();
      line.enqueue(1);
      line.enqueue(2);
      line.enqueue(3);
      line.enqueue(4);
      assert.equal(line.dequeue(),1);
    });
    it('should return null when trying to remove from an empty stack', function() {
      var line = new Queue();
      assert.equal(line.dequeue() === null,true);
    });
    it('should be able to tell if the stack is empty or not', function() {
      var line = new Queue();
      line.enqueue(5);
      assert.equal(line.isEmpty(),false);
      line.dequeue();
      assert.equal(line.isEmpty(),true);
    });
  });
  
  describe('Tree', function() {

    it('should contain a data attribute and children array', function() {
      var leafy = new Tree();
      assert.property(leafy,'children');
      assert.property(leafy,'data');
    });
    it('that is created with no value should have a data attribute of null', function() {
      var leafy = new Tree();
      assert.equal(leafy.data === null, true);
    });
    it('should be created with no children', function() {
      var leafy = new Tree();
      assert.deepEqual(leafy.children,[]);
    });
    it('should be able to add children to the current node', function() {
      var leafy = new Tree();
      leafy.addChild(4);
      assert.equal(leafy.children.length,1);
    });
    it('should be able to remove children from the current node', function() {
      var leafy = new Tree();
      leafy.addChild(2);
      leafy.addChild(4);
      assert.equal(leafy.children.length,2);
      assert.equal(leafy.removeChild(4).data,4);
      assert.equal(leafy.children.length,1);
    });
    it('should return null if attempting to remove a node that doesn\'t exist', function() {
      var leafy = new Tree();
      assert.equal(leafy.removeChild(4) === null,true);
    });
    it('should return false if the contains method finds no children with the passed value', function() {
      var leafy = new Tree();
      assert.equal(leafy.contains(7),false);
    });
    it('should return true if the contains method finds a child with the passed value', function() {
      var leafy = new Tree();
      leafy.addChild(4);
      leafy.addChild(2);
      leafy.children[0].addChild(10);
      leafy.children[0].addChild(20);
      leafy.children[1].addChild(13);
      leafy.children[1].children[0].addChild(7);
      assert.equal(leafy.contains(7),true);
    });
  });
  
  describe('Binary Search Tree', function() {
    it('should contain a data attribute on each node', function() {
      var bsleafy = new BinarySearchTree(5);
      assert.property(bsleafy,'data');
      assert.equal(bsleafy.data,5);
    });
    it('should throw an error if instantiated with no value', function() {
      assert.throws(function(){ new BinarySearchTree(); }, Error );
    });
    it('should contain references to a left and right child tree', function() {
      var bsleafy = new BinarySearchTree(5);
      assert.property(bsleafy,'left');
      assert.property(bsleafy,'right');
    });
    it('should be able to insert a value into the tree', function() {
      var bsleafy = new BinarySearchTree(10);
      bsleafy.insert(4);
      assert.equal(bsleafy.left.data,4);
    });
    it('should throw an error in no value is passed to the insert function', function() {
      var bsleafy = new BinarySearchTree(10);
      assert.throws(function(){ bsleafy.insert() ; }, Error );
    });
    it('should properly sort inserted values', function() {
      var bsleafy = new BinarySearchTree(10);
      bsleafy.insert(4);
      bsleafy.insert(2);
      bsleafy.insert(12);
      bsleafy.insert(11);
      bsleafy.insert(14);
      bsleafy.insert(15);
      assert.equal(bsleafy.left.data,4);
      assert.equal(bsleafy.right.data,12);
      assert.equal(bsleafy.left.left.data,2);
      assert.equal(bsleafy.right.left.data,11);
      assert.equal(bsleafy.right.right.data,14);
      assert.equal(bsleafy.right.right.right.data,15);
    });
    it('should return true if the tree contains a value', function() {
      var bsleafy = new BinarySearchTree(10);
      bsleafy.insert(4);
      bsleafy.insert(2);
      bsleafy.insert(12);
      bsleafy.insert(11);
      bsleafy.insert(14);
      bsleafy.insert(15);
      assert.equal(bsleafy.contains(14),true);
    });
    it('should return false if attempting to find a value the tree doesn\'t contain', function() {
      var bsleafy = new BinarySearchTree(10);
      bsleafy.insert(4);
      bsleafy.insert(2);
      bsleafy.insert(12);
      assert.equal(bsleafy.contains(14),false);
    });
    it('should throw an error if no value is passed to the contains function', function() {
      var bsleafy = new BinarySearchTree(10);
      assert.throws(function() { bsleafy.contains(); }, Error );
    });
    it('should not allow duplicate values', function() {
      var bsleafy = new BinarySearchTree(10);
      bsleafy.insert(4);
      bsleafy.insert(2);
      bsleafy.insert(12);
      bsleafy.insert(11);
      bsleafy.insert(14);
      bsleafy.insert(15);
      assert.throws(function(){ bsleafy.insert(11); }, Error );
    });
  });

  describe('Graph (Adjacency List)', function() {
    it('should be instantiated with a list to hold nodes', function() {
      var graphy = new Graph();
      assert.property(graphy,'nodes');
      assert.deepEqual(graphy.nodes,[]);
    });
    it('should be able to be instantiated as a directed graph', function() {
      var graphy = new GraphM('D');
      assert.property(graphy,'directed');
      assert.deepEqual(graphy.directed,true);
    });
    it('nodes should be instantiated with a data property to hold its value', function() {
      var graphyNode = new GraphNode();
      assert.property(graphyNode,'data');
      assert.equal(graphyNode.data === null,true);
    });
    it('nodes should be instantiated with a list to hold edges', function() {
      var graphyNode = new GraphNode();
      assert.property(graphyNode,'edges');
      assert.deepEqual(graphyNode.edges,[]);
    });
    it('should be able to add nodes', function(){
      var graphy = new Graph();
      assert.equal(graphy.nodes.length,0);
      graphy.addNode('Z');
      assert.equal(graphy.nodes.length,1);
      graphy.addNode('Y');
      assert.equal(graphy.nodes.length,2);
    });
    it('should throw an error if a node with the same value is already in the graph', function(){
      var graphy = new Graph();
      graphy.addNode('Z');
      assert.throws(function(){ graphy.addNode('Z'); }, Error );
    });
    it('should be able to add an edge between two nodes', function() {
      var graphy = new Graph();
      graphy.addNode('Y');
      graphy.addNode('X');
      graphy.addEdge('X','Y');
      var yNode = graphy.nodes[0];
      var xNode = graphy.nodes[1];
      assert.equal(yNode.edges[0],'X');
      assert.equal(xNode.edges[0],'Y');
    });
    it('should throw an error attempting to add an already existing edge', function() {
      var graphy = new Graph();
      graphy.addNode('Y');
      graphy.addNode('X');
      graphy.addEdge('X','Y');
      assert.throws(function(){ graphy.addEdge('X','Y'); }, Error );
    });
    it('should throw an error attempting to connect the same node to itself', function() {
      var graphy = new Graph();
      graphy.addNode('X');
      assert.throws(function(){ graphy.addEdge('X','X'); }, Error );
    });
    it('should be able to remove an edge between two nodes', function() {
      var graphy = new Graph();
      graphy.addNode('Z');
      graphy.addNode('Y');
      graphy.addNode('X');
      graphy.addEdge('X','Y');
      graphy.addEdge('Z','Y');
      var yNode = graphy.nodes[1];
      var zNode = graphy.nodes[0];
      graphy.removeEdge('Z','Y');
      assert.equal(yNode.edges.indexOf('Z'),-1);
      assert.equal(zNode.edges.indexOf('Y'),-1);
    });
    it('should throw an error attempting to remove a non-existent edge', function() {
      var graphy = new Graph();
      graphy.addNode('Z');
      graphy.addNode('Y');
      graphy.addEdge('Z','Y');
      graphy.removeEdge('Z','Y');
      assert.throws(function(){ graphy.removeEdge('Z','Y'); }, Error );
    });
    it('should be able to remove nodes and return the removed node', function(){
      var graphy = new Graph();
      graphy.addNode('Z');
      graphy.addNode('Y');
      graphy.addNode('X');
      var oldYNode = graphy.removeNode('Y');
      assert.equal(graphy.nodes.length,2);
      assert.equal(oldYNode.data,'Y');
    });
    it('should also remove a node\'s references in other node\'s edge lists on removal', function(){
      var graphy = new Graph();
      graphy.addNode('Z');
      graphy.addNode('Y');
      graphy.addNode('X');
      graphy.addEdge('X','Y');
      var oldYNode = graphy.removeNode('Y');
      graphy.nodes.forEach(function(node){
        assert.equal(node.edges.indexOf('Y'),-1);
      });
    });
    it('should throw an error attempting to remove a node not in the graph', function(){
      var graphy = new Graph();
      graphy.addNode('Z');
      graphy.addNode('Y');
      assert.throws(function(){ graphy.removeNode('X'); }, Error );
    });
    it('should return true from an adjacency check if an edge exists between two nodes', function(){
      var graphy = new Graph();
      graphy.addNode('U');
      graphy.addNode('X');
      graphy.addEdge('U','X');
      assert.equal(graphy.checkAdjacency('X','U'),true);
    });
    it('should return false from an adjacency check if no edge exists between two nodes', function(){
      var graphy = new Graph();
      graphy.addNode('U');
      graphy.addNode('X');
      assert.equal(graphy.checkAdjacency('X','U'),false);
    });
    it('should throw an error from an adjacency check if either node does not exist in the graph', function(){
      var graphy = new Graph();
      assert.throws(function(){ graphy.checkAdjacency('X','U'); }, Error);
    });
    it('should throw an error from an adjacency check if the nodes passed are the same', function(){
      var graphy = new Graph();
      assert.throws(function(){ graphy.checkAdjacency('X','X'); }, Error);
    });
    it('should be able to list adjacent nodes from a node on the graph', function() {
      var graphy = new Graph();
      graphy.addNode('W');
      graphy.addNode('N');
      graphy.addNode('O');
      graphy.addEdge('O','W');
      graphy.addEdge('O','N');
      assert.equal(graphy.findAdjacentNodes('O'),graphy.nodes[2].edges);
    });
    it('should return an empty array when attempting to list adjacent nodes for a node with no edges', function() {
      var graphy = new Graph();
      graphy.addNode('W');
      graphy.addNode('N');
      graphy.addNode('O');
      assert.deepEqual(graphy.findAdjacentNodes('O'),[]);
    });
    it('should throw an error when attempting to list adjacent nodes for a non-existent node', function() {
      var graphy = new Graph();
      assert.throws(function(){ graphy.findAdjacentNodes('O'); }, Error);
    });
  });

  describe('Graph (Adjacency Matrix)', function() {
    it('should be instantiated with a list to hold nodes', function() {
      var graphy = new GraphM();
      assert.property(graphy,'nodes');
      assert.deepEqual(graphy.nodes,[]);
    });
    it('should be instantiated with an empty matrix to hold edges', function() {
      var graphy = new GraphM();
      assert.property(graphy,'edges');
      assert.deepEqual(graphy.edges,[]);
    });
    it('should be able to be instantiated as a directed graph', function() {
      var graphy = new GraphM('D');
      assert.property(graphy,'directed');
      assert.deepEqual(graphy.directed,true);
    });
    it('nodes should be instantiated with a data property to hold its value', function() {
      var graphyNode = new GraphNodeM();
      assert.property(graphyNode,'data');
      assert.equal(graphyNode.data === null,true);
    });
    it('should be able to add nodes', function(){
      var graphy = new GraphM();
      assert.equal(graphy.nodes.length,0);
      graphy.addNode('Z');
      assert.equal(graphy.nodes.length,1);
      graphy.addNode('Y');
      assert.equal(graphy.nodes.length,2);
    });
    it('should place nodes in the edges matrix when added', function(){
      var graphy = new GraphM();
      graphy.addNode('Z');
      graphy.addNode('Y');
      assert.equal(graphy.edges.length,2);
      assert.equal(graphy.edges[0][1] === 0, true);
    });
    it('should throw an error if a node with the same value is already in the graph', function(){
      var graphy = new GraphM();
      graphy.addNode('Z');
      assert.throws(function(){ graphy.addNode('Z'); }, Error );
    });
    it('should be able to add an edge between two nodes', function() {
      var graphy = new GraphM();
      graphy.addNode('Y');
      graphy.addNode('X');
      graphy.addEdge('X','Y');
      assert.equal(graphy.edges[0][1] !== undefined,true);
      assert.equal(graphy.edges[1][0] !== undefined,true);
    });
    it('should be able to add an edge between two nodes with a weight', function() {
      var graphy = new GraphM();
      graphy.addNode('Y');
      graphy.addNode('X');
      graphy.addEdge('X','Y',6);
      assert.equal(graphy.edges[0][1] === 6,true);
      assert.equal(graphy.edges[1][0] === 6,true);
    });
    it('should be able to add an edge with a weight only one way if graph is directed', function() {
      var graphy = new GraphM('D');
      graphy.addNode('Y');
      graphy.addNode('X');
      graphy.addEdge('X','Y',6);
      assert.equal(graphy.edges[0][1] === 0,true);
      assert.equal(graphy.edges[1][0] === 6,true);
    });
    it('should throw an error attempting to add an already existing edge', function() {
      var graphy = new GraphM();
      graphy.addNode('Y');
      graphy.addNode('X');
      graphy.addEdge('X','Y');
      assert.throws(function(){ graphy.addEdge('X','Y'); }, Error );
    });
    it('should throw an error attempting to connect the same node to itself', function() {
      var graphy = new GraphM();
      graphy.addNode('X');
      assert.throws(function(){ graphy.addEdge('X','X'); }, Error );
    });
    it('should be able to remove an edge between two nodes', function() {
      var graphy = new GraphM();
      graphy.addNode('Z');
      graphy.addNode('Y');
      graphy.addNode('X');
      graphy.addEdge('X','Y');
      graphy.addEdge('Z','Y');
      graphy.removeEdge('Z','Y');
      var zIndex,yIndex;
      for(var i = 0; i < graphy.nodes.length; i++) {
        if(graphy.nodes[i].data === 'Z') { zIndex = i; }
        if(graphy.nodes[i].data === 'Y') { yIndex = i; }
      }
      assert.equal(graphy.edges[zIndex][yIndex],0);
      assert.equal(graphy.edges[yIndex][zIndex],0);
    });
    it('should throw an error attempting to remove a non-existent edge', function() {
      var graphy = new GraphM();
      graphy.addNode('Z');
      graphy.addNode('Y');
      graphy.addEdge('Z','Y');
      graphy.removeEdge('Z','Y');
      assert.throws(function(){ graphy.removeEdge('Z','Y'); }, Error );
    });
    it('should be able to remove nodes and return the removed node', function(){
      var graphy = new GraphM();
      graphy.addNode('Z');
      graphy.addNode('Y');
      graphy.addNode('X');
      var oldYNode = graphy.removeNode('Y');
      assert.equal(graphy.nodes.length,2);
      assert.equal(oldYNode.data,'Y');
    });
    it('should also remove a node\'s references the adjacency matrix on removal', function(){
      var graphy = new GraphM();
      graphy.addNode('Z');
      graphy.addNode('Y');
      graphy.addNode('X');
      graphy.addEdge('X','Y');
      var ylength = graphy.edges.length;
      var xlength = graphy.edges[0].length;
      var oldYNode = graphy.removeNode('Y');
      assert.equal(graphy.edges.length,ylength-1);
      assert.equal(graphy.edges[0].length,xlength-1);
    });
    it('should throw an error attempting to remove a node not in the graph', function(){
      var graphy = new GraphM();
      graphy.addNode('Z');
      graphy.addNode('Y');
      assert.throws(function(){ graphy.removeNode('X'); }, Error );
    });
    it('should return true from an adjacency check if an edge exists between two nodes', function(){
      var graphy = new GraphM();
      graphy.addNode('U');
      graphy.addNode('X');
      graphy.addEdge('U','X');
      assert.equal(graphy.checkAdjacency('X','U'),true);
    });
    it('should return false from an adjacency check if no edge exists between two nodes', function(){
      var graphy = new GraphM();
      graphy.addNode('U');
      graphy.addNode('X');
      assert.equal(graphy.checkAdjacency('X','U'),false);
    });
    it('should throw an error from an adjacency check if either node does not exist in the graph', function(){
      var graphy = new GraphM();
      assert.throws(function(){ graphy.checkAdjacency('X','U'); }, Error);
    });
    it('should throw an error from an adjacency check if the nodes passed are the same', function(){
      var graphy = new GraphM();
      assert.throws(function(){ graphy.checkAdjacency('X','X'); }, Error);
    });
    it('should be able to list adjacent nodes from a node on the graph', function() {
      var graphy = new GraphM();
      graphy.addNode('W');
      graphy.addNode('N');
      graphy.addNode('O');
      graphy.addEdge('O','W');
      graphy.addEdge('O','N');
      assert.deepEqual(graphy.findAdjacentNodes('O'),['W','N']);
    });
    it('should return an empty array when attempting to list adjacent nodes for a node with no edges', function() {
      var graphy = new GraphM();
      graphy.addNode('W');
      graphy.addNode('N');
      graphy.addNode('O');
      assert.deepEqual(graphy.findAdjacentNodes('O'),[]);
    });
    it('should throw an error when attempting to list adjacent nodes for a non-existent node', function() {
      var graphy = new GraphM();
      assert.throws(function(){ graphy.findAdjacentNodes('O'); }, Error);
    });
  });
});

describe('List of Primes', function() {
  it('should return null if integer is less than 2', function() {
    assert.equal(listOfPrimes(1) === null,true);
  });
  it('should return a list of type array', function() {
    assert.equal(listOfPrimes(5).constructor,Array);
  });
  it('should return a list of primes if given an integer', function() {
    assert.deepEqual(listOfPrimes(17),[ 2, 3, 5, 7, 11, 13, 17 ]);
    assert.deepEqual(listOfPrimes(67),[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67]);
  });
});

describe('Knapsack (greedy solution)', function() {
  it('should choose one item correctly', function() {
    assert.equal("["+knapsack(100, [[1, 1]]).join(", ")+"]", "["+[100].join(", ")+"]");
    assert.equal("["+knapsack(100, [[100, 1]]).join(", ")+"]", "["+[1].join(", ")+"]");
  });

  it('should choose two items correctly', function() {
    assert.equal("["+knapsack(100, [[1, 1],[3, 4]]).join(", ")+"]", "["+[1, 33].join(", ")+"]");
    assert.equal("["+knapsack(100, [[60, 80],[50, 50]]).join(", ")+"]", "["+[1, 0].join(", ")+"]");
  });

  it('should choose two items correctly', function() {
    assert.equal("["+knapsack(100, [[10, 10],[30, 40],[56, 78]]).join(", ")+"]", "["+[1, 1, 1].join(", ")+"]");
    assert.equal("["+knapsack(100, [[11.2,  7.4],[25.6, 17.8],[51.0, 41.2],[23.9, 15.6],[27.8, 19.0]]).join(", ")+"]",
             "["+[2, 1, 1, 0, 0].join(", ")+"]");
  });
});

describe('Sorting Algorithms', function(){
  describe('Merge Sort', function(){
    it('sort properly', function(){
      assert.deepEqual(mergeSort([7,5,9,12,15,2,4,10]),[2,4,5,7,9,10,12,15]);
    });
  });
  describe('Quick Sort', function(){
    it('sort properly', function(){
      var arr = [7,5,9,12,15,2,4,10];
      quickSort(arr);
      assert.deepEqual(arr,[2,4,5,7,9,10,12,15]);
    });
  });
});

describe('Square Matrix Multiplication', function() {
  it('should work for a 2x2 matrix', function() {
    assert.equal(JSON.stringify(matrixMultiplication([[1, 2], [3, 2]], [[3, 2], [1, 1]])),JSON.stringify([[5, 4], [11, 8]]));
  });
});

describe('Primes in Numbers', function() {
  it('should display the proper factors for 7775460', function() {
    assert.equal(primeFactors(7775460),"(2**2)(3**3)(5)(7)(11**2)(17)");
  });

  it('should display the proper factors for 86240', function() {
    assert.equal(primeFactors(86240),"(2**5)(5)(7**2)(11)");
  });
});

describe('Sierpinski\'s Gasket', function(){
  it('should have a single L for an input of 0', function() {
    var inputOf0 = 'L';
    assert.equal(sierpinski(0),inputOf0);
  });

  it('should have 4 layers of L\'s for 1', function() {
    var inputOf1 = [
      'L',
      'L L'
    ].join('\n');
    assert.equal(sierpinski(1),inputOf1);
  });

  it('should have 4 layers of L\'s for 2', function() {
    var inputOf2 = [
      'L',
      'L L',
      'L   L',
      'L L L L'
    ].join('\n');
    assert.equal(sierpinski(2),inputOf2);
  });
  it('should have 8 layers of L\'s for 3', function() {
    var inputOf3 = [
      'L',
      'L L',
      'L   L',
      'L L L L',
      'L       L',
      'L L     L L',
      'L   L   L   L',
      'L L L L L L L L'
    ].join('\n');
    assert.equal(sierpinski(3),inputOf3);
  });
});

describe('ASCII Hex Converter', function() {
  it('should convert ASCII text to hexidecimal', function() {
    assert.equal(Converter.toHex("Look mom, no hands"),"4c6f6f6b206d6f6d2c206e6f2068616e6473");
  });

  it('should convert hexidecimal to ASCII text', function() {
    assert.equal(Converter.toAscii("4c6f6f6b206d6f6d2c206e6f2068616e6473"),"Look mom, no hands");
  });

});

describe('Least Common Multiple', function() {
  it('should find the smallest multiple of 2 and 5', function() {
    assert.equal(leastCommonMultiples(2,5),10);
  });
  
  it('should find the smallest multiple of 2, 3, and 4', function() {
    assert.equal(leastCommonMultiples(2,3,4),12);
  });
  
  it('should find the smallest multiple of 9', function() {
    assert.equal(leastCommonMultiples(9),9);
  });
});

describe('Josephus Survivor', function() {
  it('should correctly return the last survivor ', function() {
    assert.equal(josephusSurvivor(7,3),4);
    assert.equal(josephusSurvivor(11,19),10);
    assert.equal(josephusSurvivor(1,300),1);
    assert.equal(josephusSurvivor(14,2),1);
    assert.equal(josephusSurvivor(100,1),100);
  });
});

describe('32 bit integer to IPv4', function() {
  it('should translate a 32 bit integer to ipv4 address', function() {
    assert.equal(int32ToIp(2149583361),"128.32.10.1");
  });
  it('should translate a ipv4 address to 32 bit integer', function() {
    assert.equal(ipToInt32("128.32.10.1"),2149583361);
  });
});

describe('Unique Character Checker', function() {
  it('should return true if there are no repeated characters', function(){
    assert.equal(uniqueChecker('nodachi'),true);
  });

  it('should return false if characters are repeated', function(){
    assert.equal(uniqueChecker('flamberge'),false);
  });
});

describe('String Permutation Finder', function() {
  it('should return true if the second string is a permutation', function(){
    assert.equal(stringPermuteFinder('supreme','presume'),true);
  });

  it('should return false if letters are used more than once', function() {
    assert.equal(stringPermuteFinder('macguffin','macmuffin'),false);
  });

  it('should return false because of extra whitespace', function() {
    assert.equal(stringPermuteFinder('taco','   coat     '),false);
  });
  
  it('should return false if letter case is changed', function() {
    assert.equal(stringPermuteFinder('grandiose','Organised'),false);
  });
});

describe('String to URL Changer', function() {
  it('should return the same string if it contains no spaces', function() {
    assert.equal(stringToURL('antidisestablishmentarianism'),'antidisestablishmentarianism');
  });
  it('should fill spaces with %20', function() {
    assert.equal(stringToURL('The woman had a refined palate'),'The%20woman%20had%20a%20refined%20palate');
  });
});

describe('Palindrome Permutation Finder', function() {
  it('should find palindromes when they exist in the provided characters', function(){
    assert.equal(palindromicPermuter("ceararc"),true);
  });
  
  it('should return nothing if no palindromes can be made', function(){
    assert.equal(palindromicPermuter("helicop"),false);
  });  
});

describe('One Change Away Check', function() {
  it('should return true if the two strings provided are the same word', function(){
    assert.equal(oneChangeAwayCheck("monkey","monkey"),true);
  });
  it('should return false if the first word is more than one change away from the second', function(){
    assert.equal(oneChangeAwayCheck("monkey","mooney"),false);
  });
  it('should return true if the first word is one changed character away from the second', function(){
    assert.equal(oneChangeAwayCheck("monkey","money"),true);
  });
});

describe('String Compression', function() {
  it('should compress strings with multiple instances of characters', function() {
    assert.equal(stringCompress('bbbbaaaannnnaaaannnnaaa'),'b4a4n4a4n4a3');
  });

  it('should not compress strings with no repeat characters', function() {
    assert.equal(stringCompress('banana'),'banana');
  });
});

describe('Rotating a Matrix', function() {
  it('should return a matrix rotated 90 degrees', function() {
    assert.deepEqual(matrixRotate([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]),
      [[13,9,5,1],[14,10,6,2],[15,11,7,3],[16,12,8,4]]);
  });
});

describe('Matrix Bomberman', function() {
  it('should replace all values perpendicular to zero with zero', function() {
    assert.deepEqual(matrixBomberman([[5,3,8],[2,7,1],[0,9,4]]),[[0,3,8],[0,7,1],[0,0,0]]);
  });
});

describe('Incrementing an Integer Array', function() {
  it('should increment only the last integer if it is not a 9', function() {
    assert.deepEqual(integerArrayIncrement([1,2,3,4]),[1,2,3,5]);
  });
  it('should increment the index before it if the last integer is a 9', function() {
    assert.deepEqual(integerArrayIncrement([2,0,9,0,9]),[2,0,9,1,0]);
  });
  it('should add an additional array index and start with 1 if values are all 9\'s', function() {
    assert.deepEqual(integerArrayIncrement([9,9,9,9,9]),[1,0,0,0,0,0]);
  });
});

describe('Rotated String Finder', function() {
  it('should return true if second string is rotated version of first', function() {
    assert.equal(rotatedStringLocator('anthropomorphic','phicanthropomor'),true);
  });

  it('should return false if string is reversed instead of rotated', function() {
    assert.equal(rotatedStringLocator('geriatric','cirtaireg'),false);
  });
});

describe('Duplication Removal', function() {
  it('should remove duplicates from a linked list if they exist', function() {
    var linky = new LinkedList();
    var vals = [8,9,2,6,8,2,3];
    while(vals.length) {
      linky.addToTail(vals.shift());
    }
    var noDupsList = DuplicationRemoval(linky);
    while(noDupsList.size() > 0){
      vals.push(noDupsList.removeFromHead());
    }
    assert.deepEqual(vals,[8,9,2,6,3]);
  });
  it('should return the same linked list if no duplicates exist', function() {
    var linky = new LinkedList();
    var vals = [5,3,2,7,8,1];
    while(vals.length) {
      linky.addToTail(vals.shift());
    }
    var noDupsList = DuplicationRemoval(linky);
    while(noDupsList.size() > 0){
      vals.push(noDupsList.removeFromHead());
    }
    assert.deepEqual(vals,[5,3,2,7,8,1]);
  });
});

describe('Nth From The End', function() {
  it('returns the value of the nth node from the end of a linked list', function() {
    var linky = new LinkedList();
    var vals = [8,9,2,6,8,2,3];
    while(vals.length) {
      linky.addToTail(vals.shift());
    }
    assert.equal(nthFromLast(linky,4),6);
  });
  it('returns null if the list is empty or n is out of bounds', function() {
    var linky = new LinkedList();
    assert.equal(nthFromLast(linky,5) === null,true);
    var vals = [5,3,2,7,8,1];
    while(vals.length) {
      linky.addToTail(vals.shift());
    }
    assert.equal(nthFromLast(linky,8) === null,true);
  });
});

describe('Center Node Removal', function() {
  it('does not mutate a list if it has an even number of nodes', function() {
    var linky = new LinkedList();
    var vals = [3,4,5,6,7,8];
    while(vals.length) {
      linky.addToTail(vals.shift());
    }
    centerNodeRemoval(linky);
    assert.equal(linky.size() % 2,0);
  });
  it('the original list to remove it\'s center node', function() {
    var linky = new LinkedList();
    var vals = [5,3,2,7,8,1,4];
    while(vals.length) {
      linky.addToTail(vals.shift());
    }
    centerNodeRemoval(linky);
    linky.removeFromHead();
    linky.removeFromHead();
    linky.removeFromHead();
    assert.equal(linky.removeFromHead(),8);
  });
});

describe('Linked List Sectioning', function() {
  it('returns a linked list that is already in proper order unchanged', function() {
    var linky = new LinkedList();
    var vals = [1,2,3,4,5,6,7,8];
    while(vals.length) {
      linky.addToTail(vals.shift());
    }
    var sectioned = linkedListSectioning(linky,5);
    while(sectioned.size() > 0){
      vals.push(sectioned.removeFromHead());
    }
    assert.deepEqual(vals,[1,2,3,4,5,6,7,8]);
  });
  it('returns a sectioned list', function() {
    var linky = new LinkedList();
    var vals = [8,3,16,15,32,7,2,17];
    while(vals.length) {
      linky.addToTail(vals.shift());
    }
    var sectioned = linkedListSectioning(linky,5);
    while(sectioned.size() > 0){
      vals.push(sectioned.removeFromHead());
    }
    assert.deepEqual(vals,[3,2,8,16,15,32,7,17]);
  });
});

describe('Linked List Addition', function() {
  it('returns an added list from a backwards list', function() {
    var linky1 = new LinkedList();
    var linky2 = new LinkedList();
    var vals1 = [6,5,4,9];
    var vals2 = [1,7,2,3];
    while(vals1.length) {
      linky1.addToTail(vals1.shift());
      linky2.addToTail(vals2.shift());
    }
    var addedList = backwardListAddition(linky1,linky2);
    while(addedList.size() > 0){
      vals1.push(addedList.removeFromHead());
    }
    assert.deepEqual(vals1,[7,2,7,2,1]);
  });
  xit('returns an added list from a forwards list', function() {
    var linky1 = new LinkedList();
    var linky2 = new LinkedList();
    var vals1 = [9,4,5,6];
    var vals2 = [3,2,7,1];
    while(vals1.length) {
      linky1.addToTail(vals1.shift());
      linky2.addToTail(vals2.shift());
    }
    var addedList = forwardListAddition(linky1,linky2);
    while(addedList.size() > 0){
      vals1.push(addedList.removeFromHead());
    }
    assert.deepEqual(vals1,[1,2,7,2,7]);
  });
});

describe('Linked List Palindrome Finder', function() {
  it('returns true if an odd-lettered palindrome exists in the linked list', function() {
    var linky = new LinkedList();
    var vals = ['r','a','c','e','c','a','r'];
    while(vals.length) {
      linky.addToTail(vals.shift());
    }
    assert.equal(linkedListPalindromeFinder(linky),true);
  });
  it('returns true if an even-lettered palindrome exists in the linked list', function() {
    var linky = new LinkedList();
    var vals = ['r','e','d','d','e','r'];
    while(vals.length) {
      linky.addToTail(vals.shift());
    }
    assert.equal(linkedListPalindromeFinder(linky),true);
  });
  it('returns false if no palindrome exists', function() {
    var linky = new LinkedList();
    var vals = [1,2,3,4,5,6,7,8];
    while(vals.length) {
      linky.addToTail(vals.shift());
    }
    assert.equal(linkedListPalindromeFinder(linky),false);
  });
});

describe('Common Node Detector', function() {
  it('should return null if no common nodes exist between two lists', function() {
    var linky1 = new LinkedList();
    var linky2 = new LinkedList();
    var vals1 = [10,11,12,13,14];
    var vals2 = [14,13,12,11,10];
    while(vals1.length) {
        linky1.addToTail(vals1.shift());
        linky2.addToTail(vals2.shift());
    }
    assert.equal(commonNodeDetector(linky1,linky2),null);
  });
  it('should return the first shared node two linked lists connect', function() {
    var linky1 = new LinkedList();
    var linky2 = new LinkedList();
    var vals1 = [3,4,5,6,5];
    var vals2 = [9,8,7,6,5];
    var commonNode;
    var commonFirstNode;
    while(vals1.length) {
      if(vals1[0] === 6){
        commonFirstNode = new LinkedListNode(vals1.shift());
        linky1.tail.next = commonFirstNode;
        linky1.tail = commonFirstNode;
        linky2.tail.next = commonFirstNode;
        linky2.tail = commonFirstNode;
        vals2.shift();
      } else if(vals1.length < 2){
        commonNode = new LinkedListNode(vals1.shift());
        linky1.tail.next = commonNode;
        linky1.tail = commonNode;
        linky2.tail.next = commonNode;
        linky2.tail = commonNode;
        vals2.shift();
      } else {
        linky1.addToTail(vals1.shift());
        linky2.addToTail(vals2.shift());
      }
    }
    assert.equal(commonNodeDetector(linky1,linky2),commonFirstNode);
  });
});

describe('Linked Loop Finder', function() {
  it('should return false if no loop of nodes exists', function() {
    var linky = new LinkedList();
    var vals = [2,3,4,5,6,7];
    while(vals.length) {
      linky.addToTail(vals.shift());
    }
    assert.equal(linkedLoopFinder(linky),false);
  });
  it('should return true if a loop exists', function() {
    var linky = new LinkedList();
    linky.addToTail(9);
    linky.addToTail(35);
    var nodeToLoopTo = new LinkedListNode(29);
    linky.tail.next = nodeToLoopTo;
    linky.tail = nodeToLoopTo;
    linky.addToTail(42);
    linky.addToTail(75);
    linky.addToTail(64);
    linky.tail.next = nodeToLoopTo;
    assert.equal(linkedLoopFinder(linky),true);
  });
});

describe('Stack Method to Find Minimum', function() {
  it('should return null if the stack is empty', function() {
    var altStacky = new AltStack();
    assert.equal(altStacky.minimum() === null,true);
  });
  it('should return the minimum of a stack', function() {
    var altStacky = new AltStack();
    var values = [105,71,33,83,45,39,54,90];
    values.forEach(function(value){ altStacky.push(value); });
    assert.equal(altStacky.minimum(),33);
  });
});

describe('Stack Collection', function() {
  it('should return the same values from the collection as a normal stack', function() {
    var multiStacky = new multiStackCollection(3);
    var values = [2,4,6,8,10,12,14];
    values.forEach(function(value){ multiStacky.push(value); });
    assert.equal(multiStacky.pop(),14);
    assert.equal(multiStacky.pop(),12);
    assert.equal(multiStacky.pop(),10);
    assert.equal(multiStacky.pop(),8);
  });
  it('should possess a popFrom function that targets a specific stack in the colleciton', function() {
    var multiStacky = new multiStackCollection(2);
    var values = [5,6,7,8,9,10,11];
    values.forEach(function(value){ multiStacky.push(value); });
    assert.equal(multiStacky.popAt(2),8);
  });
});

describe('Stack Queue', function() {
  it('should provide a size function that returns the number of elements stored', function() {
    var stackyQueue = new StackQueue();
    assert.equal(stackyQueue.size(),0);
  });
  it('should provide a enqueue function that stores values', function() {
    var stackyQueue = new StackQueue();
    stackyQueue.enqueue(3);
    stackyQueue.enqueue(8);
    stackyQueue.enqueue(9);
    assert.equal(stackyQueue.size(),3);
  });
  it('should provide a dequeue function that removes and returns values from the queue', function() {
    var stackyQueue = new StackQueue();
    assert.equal(stackyQueue.dequeue(),null);
    stackyQueue.enqueue(7);
    stackyQueue.enqueue(3);
    stackyQueue.enqueue(5);
    assert.equal(stackyQueue.dequeue(),7);
    assert.equal(stackyQueue.dequeue(),3);
  });
});

describe('Order Stack', function() {
  it('should return an ordered stack unchanged', function() {
    var stacky = new Stack();
    var values = [7,6,5,4,3,2,1];
    values.forEach(function(value){ stacky.push(value); });
    var orderedStacky = orderStack(stacky);
    var orderedVals = [];
    while(orderedStacky.peek() !== null){ orderedVals.push(orderedStacky.pop()); }
    assert.deepEqual(orderedVals,[1,2,3,4,5,6,7]);
  });
  it('should return ordered descending stack from an unordered stack', function() {
    var stacky = new Stack();
    var values = [4,8,6,12,15,2,7];
    values.forEach(function(value){ stacky.push(value); });
    var orderedStacky = orderStack(stacky);
    var orderedVals = [];
    while(orderedStacky.peek() !== null){ orderedVals.push(orderedStacky.pop()); }
    assert.deepEqual(orderedVals,[2,4,6,7,8,12,15]);
  });
});

describe('Park Ride Queue', function() {
  it('should return null when attempting to dequeue an empty queue', function() {
    var parkyQueue = new parkRideQueue();
    assert.equal(parkyQueue.dequeueEither() === null, true);
    assert.equal(parkyQueue.dequeueRed() === null, true);
    assert.equal(parkyQueue.dequeueBlue() === null, true);
  });
  it('should be able to enqueue and dequeue a Red queue passenger', function() {
    var parkyQueue = new parkRideQueue();
    parkyQueue.enqueue("Red","Jim");
    parkyQueue.enqueue("Blue","Manny");
    parkyQueue.enqueue("Red","Sara");
    assert.equal(parkyQueue.dequeueRed(), "Jim");
    assert.equal(parkyQueue.dequeueRed(), "Sara");
  });
  it('should be able to enqueue and dequeue a Blue queue passenger', function() {
    var parkyQueue = new parkRideQueue();
    parkyQueue.enqueue("Blue","Manny");
    parkyQueue.enqueue("Red","Jim");
    parkyQueue.enqueue("Blue","Jenna");
    assert.equal(parkyQueue.dequeueBlue(), "Manny");
    assert.equal(parkyQueue.dequeueBlue(), "Jenna");
  });
  it('should be able to enqueue multiple passengers and dequeue the earliest queued passenger', function() {
    var parkyQueue = new parkRideQueue();
    parkyQueue.enqueue("Blue","Manny");
    parkyQueue.enqueue("Red","Jim");
    parkyQueue.enqueue("Red","Sara");
    assert.equal(parkyQueue.dequeueEither(), "Manny");
    assert.equal(parkyQueue.dequeueEither(), "Jim");
  });
});

describe('Connection Existence', function() {
  it('should return true if there is a path between nodes in a graph', function() {
    var graphy = new Graph('D');
    graphy.addNode('A');
    graphy.addNode('B');
    graphy.addNode('C');
    graphy.addNode('D');
    graphy.addNode('E');
    graphy.addNode('F');
    graphy.addEdge('B','C');
    graphy.addEdge('D','B');
    graphy.addEdge('E','F');
    graphy.addEdge('F','D');
    assert.equal(findConnectionExistence(graphy,'F','C'),true);
  });
  it('should return false if there is no path between nodes in a graph', function() {
    var graphy = new Graph('D');
    graphy.addNode('A');
    graphy.addNode('B');
    graphy.addNode('C');
    graphy.addNode('D');
    graphy.addNode('E');
    graphy.addNode('F');
    graphy.addEdge('A','F');
    graphy.addEdge('B','C');
    graphy.addEdge('C','F');
    graphy.addEdge('E','F');
    graphy.addEdge('F','D');
    assert.equal(findConnectionExistence(graphy,'F','C'),false);
  });
});

describe('Smallest Binary Search Tree', function() {
  
  function maxHeight(bst) {
    if (bst === null) return 0;
    var left_height = maxHeight(bst.left);
    var right_height = maxHeight(bst.right);
    return (left_height > right_height) ? left_height + 1 : right_height + 1;
  }

  it('should return a tree with minimal height for odd lists', function() {
    var bst = smallestBST([1,2,3,4,5,6,7,8,9,10,11]);
    assert.equal(maxHeight(bst),4);
  });
  it('should return a tree with minimal height for even lists', function() {
    var bst = smallestBST([5,6,7,8,9,10]);
    assert.equal(maxHeight(bst),3);
  });
});

describe('Tree Level Store', function() {

  function binTree(data){
    this.data = data || null;
    this.left = null;
    this.right = null;
  }

  it('should throw an error if no tree is provided', function() {
    assert.throws(function(){ treeLevelStore(); }, Error);
  });
  it('should return an array if a tree is provided', function() {
    var bTreeNode = new binTree(5);
    assert.equal(treeLevelStore(bTreeNode).constructor, Array);
  });
  it('should return an array of linked lists if given a binary tree', function() {
    var bTreeNode = new binTree(5);
    bTreeNode.left = new binTree(6);
    bTreeNode.right = new binTree(14);
    bTreeNode.left.left = new binTree(9);
    bTreeNode.left.right = new binTree(12);
    bTreeNode.right.left = new binTree(7);
    bTreeNode.right.right = new binTree(19);
    var list = treeLevelStore(bTreeNode);
    assert.equal(list[0].head.value,5);
    assert.equal(list[1].head.value,6);
    assert.equal(list[1].tail.value,14);
    assert.equal(list[2].head.value,9);
    assert.equal(list[2].tail.value,19);
  });
});

describe('Balanced Tree Check', function() {

  function binTree(data){
    this.data = data || null;
    this.left = null;
    this.right = null;
  }

  it('should throw an error if no tree is provided', function() {
    assert.throws(function(){ balancedTreeCheck(); }, Error );
  });
  it('should return true if the tree is balanced', function() {
    var bTreeNode = new binTree(5);
    bTreeNode.left = new binTree(6);
    bTreeNode.right = new binTree(14);
    bTreeNode.left.left = new binTree(9);
    bTreeNode.left.right = new binTree(12);
    bTreeNode.right.left = new binTree(7);
    bTreeNode.right.right = new binTree(19);
    assert.equal(balancedTreeCheck(bTreeNode),true);
  });
  it('should return false if the tree is not balanced', function() {
    var bTreeNode = new binTree(5);
    bTreeNode.left = new binTree(6);
    bTreeNode.right = new binTree(14);
    bTreeNode.right.right = new binTree(19);
    bTreeNode.right.right.left = new binTree(15);
    bTreeNode.right.right.right = new binTree(24);
    assert.equal(balancedTreeCheck(bTreeNode),false);
  });
});
describe('Binary Search Tree Validator', function() {

  function binTree(data){
    this.data = data || null;
    this.left = null;
    this.right = null;
  }

  it('should throw an error if no tree is provided', function() {
    assert.throws(function(){ BSTValidator(); }, Error );
  });
  it('should return true if the tree is balanced', function() {
    var bTreeNode = new binTree(9);
    bTreeNode.left = new binTree(5);
    bTreeNode.right = new binTree(15);
    bTreeNode.left.left = new binTree(3);
    bTreeNode.left.right = new binTree(7);
    bTreeNode.right.left = new binTree(12);
    bTreeNode.right.right = new binTree(17);
    assert.equal(BSTValidator(bTreeNode),true);
  });
  it('should return false if the tree is not balanced', function() {
    var bTreeNode = new binTree(9);
    bTreeNode.left = new binTree(5);
    bTreeNode.right = new binTree(25);
    bTreeNode.left.left = new binTree(3);
    bTreeNode.left.right = new binTree(7);
    bTreeNode.right.left = new binTree(12);
    bTreeNode.right.right = new binTree(17);
    assert.equal(BSTValidator(bTreeNode),false);
  });
  it('should return false if duplicate values exist in right branches', function() {
    var bTreeNode = new binTree(9);
    bTreeNode.left = new binTree(5);
    bTreeNode.right = new binTree(15);
    bTreeNode.left.left = new binTree(3);
    bTreeNode.left.right = new binTree(7);
    bTreeNode.right.left = new binTree(12);
    bTreeNode.right.right = new binTree(15);
    assert.equal(BSTValidator(bTreeNode),false);
  });
});

describe('LRU (least-recently-used) Cache ', function() {

  var data1 = 'monkey';
  var data2 = 'spinach';
  var data3 = 'pants';
  var data4 = 'towel';
  var data5 = 'waffle';

  it('should throw an error attempting to initialize the cache without a size', function() {
    assert.throws(function(){ new lruCache(); }, Error );
  });
  it('should contain a limit property', function() {
    assert.property(new lruCache(4),'limit');
  });
  it('should contain a set method', function() {
    var cachey = new lruCache(4);
    assert.isFunction(cachey.set,true);
  });
  it('should contain a storage list', function() {
    var cachey = new lruCache(4);
    assert.property(cachey,'storage');
    assert.property(cachey.storage,'head');
    assert.property(cachey.storage,'tail');
  });
  it('should be able to add data to the cache', function() {
    var cachey = new lruCache(4);
    cachey.set('data1',data1);
    assert.equal(cachey.storage.head.value,data1);
  });
  it('should contain a get method', function() {
    var cachey = new lruCache(4);
    assert.isFunction(cachey.get,true);
  });
  it('should be able to retrieve data from the cache', function() {
    var cachey = new lruCache(4);
    cachey.set('data1',data1);
    assert.equal(cachey.get('data1').value,data1);
  });
  it('should place the latest used data furthest from removal point', function() {
    var cachey = new lruCache(4);
    cachey.set('data1',data1);
    cachey.set('data2',data2);
    cachey.set('data3',data3);
    cachey.get('data1');
    assert.equal(cachey.storage.tail.value,data1);
  });
  it('should return null if data is not present in cache', function() {
    var cachey = new lruCache(4);
    assert.equal(cachey.get('data2'),null);
  });
});

describe('First Shared Node', function() {

  function binTree(data){
    this.data = data || null;
    this.left = null;
    this.right = null;
  }

  var bTreeNode = new binTree(9);
  bTreeNode.left = new binTree(5);
  bTreeNode.right = new binTree(24);
  bTreeNode.left.left = new binTree(3);
  bTreeNode.left.right = new binTree(7);
  bTreeNode.right.left = new binTree(18);
  bTreeNode.right.right = new binTree(29);
  bTreeNode.left.left.left = new binTree(2);
  bTreeNode.left.left.right = new binTree(4);
  bTreeNode.left.right.left = new binTree(6);
  bTreeNode.left.right.left = new binTree(8);
  bTreeNode.right.left.left = new binTree(15);
  bTreeNode.right.left.right = new binTree(21);
  bTreeNode.right.right.left = new binTree(25);
  bTreeNode.right.right.right = new binTree(36);

  it('should throw an error if no nodes are provided', function() {
    assert.throws(function(){ firstSharedNode(); }, Error );
  });
  it('should return null if the root node is ever passed as the second or third argument', function() {
    assert.equal(firstSharedNode(bTreeNode,bTreeNode.right.right,bTreeNode),null);
  });
  it('should return the first node that is shared by the two nodes passed', function() {
    assert.equal(firstSharedNode(bTreeNode,bTreeNode.left.left.right,bTreeNode.right.left),bTreeNode);
  });
  it('should return the root node if they are immmediately in two seperate trees', function() {
    assert.equal(firstSharedNode(bTreeNode,bTreeNode.right.left.left,bTreeNode.right.right),bTreeNode.right);
  });
});