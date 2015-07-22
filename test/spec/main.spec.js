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
    linky.removeFromHead();
    linky.removeFromHead();
    linky.removeFromHead();
    assert.equal(linky.removeFromHead(),8);
  });
});