describe('Simple Recursion', function(){

  describe('Recursive Max', function() {
    it('should return the correct max from a list', function() {
      assert.equal(recursiveMax([2,7,8,3,1,4]), 8);
    });
  });

  describe('Recursive Occurrence Count', function() {
    it('should count the correct number of 4\'s', function() {
      assert.equal(recursiveTimes([2,7,4,4,1,4],4),3);
    });
  });

  describe('Recursive List Reverse', function() {
    it('should reverse a list', function() {
      assert.deepEqual(recursiveReverse([2,7,8,3,1,4]),[4,1,3,8,7,2]);
    });
  });

  describe('Recursive Pair Swap', function() {
    it('should swap pairs for even lists', function() {
      assert.deepEqual(recursivePairSwap([2,7,8,3,1,4]),[7,2,3,8,4,1]);
    });

    it('should swap pairs for odd lists', function() {
      assert.deepEqual(recursivePairSwap([3,6,8,1,5]),[6,3,1,8,5]);
    });
  });

  describe('Recursive List Sum', function() {
    it('should return the sum of all the list\'s elements', function() {
      assert.equal(recursiveListSum([2,7,8,3,1,4]),25);
    });
  });

  describe('Recursive List Separate', function() {
    it('should separate each element into it\'s own list', function() {
      assert.deepEqual(recursiveListSeparate([2,7,8,3,1,4]),[[2],[7],[8],[3],[1],[4]]);
    });
  });

  describe('Recursive Pair Separate', function() {
    it('should separate pairs of even lists', function() {
      assert.deepEqual(recursivePairSeparate([2,7,8,3,1,4]),[[2,7],[8,3],[1,4]]);
    });
    it('should separate pairs of odd lists', function() {
      assert.deepEqual(recursivePairSeparate([3,6,8,1,5]),[[3,6],[8,1],[5,0]]);
    });
  });

  describe('Recursive List Flatten', function() {
    it('should create a flat list from several nested lists', function() {
      assert.deepEqual(recursiveListFlatten([[2,7], [8,3], [1,4]]),[2,7,8,3,1,4]);
    });
  });

  describe('Recursive List Split', function() {
    it('should divide a list at the provided index', function() {
      assert.deepEqual(recursiveListSplit([2,7,8,3,1,4],4),[[2,3,1],[7,8,4]]);
    });
  });

  describe('Recursive Evens Filter', function() {
    it('should return only a list of only even integers', function() {
      assert.deepEqual(recursiveEvenFilter([2,7,8,3,1,4]),[2,8,4]);
    });
  });

  describe('Recursive List Sign Inversion', function() {
    it('should shift every other integer negative', function() {
      assert.deepEqual(recursiveListInvert([2,7,8,3,1,4]),[2,-7,8,-3,1,-4]);
    });

    it('should also shift negatives back to positive', function() {
      assert.deepEqual(recursiveListInvert([-5,-3,7,1,-6,2]),[5,-3,7,-1,6,-2]);
    });
  });

  describe('Recursive List Zip', function() {
    it('should zip two lists together into one', function() {
      assert.deepEqual(recursiveListZip([2,7,8,3,1,4], [9,5,1]),[2,9,7,5,8,1,3,1,4]);
    });
  });

  describe('Recursive List Creator', function() {
    it('should create a list of all zeroes', function() {
      assert.deepEqual(recursiveListCreator(0, 5),[0,0,0,0,0]);
    });

    it('should create a list of three sevens', function() {
      assert.deepEqual(recursiveListCreator(7, 3),[7,7,7]);
    });
  });

  describe('Recursive Counting List', function() {
    it('should create a list from 2 to 5', function() {
      assert.deepEqual(recursiveCountingList(2,5),[2,3,4]);
    });

    it('should create a list from 8 to 1', function() {
      assert.deepEqual(recursiveCountingList(8,1),[8,7,6,5,4,3,2]);
    });

    it('should create an empty list if given the same elements', function() {
      assert.deepEqual(recursiveCountingList(3,3),[]);
    });
  });

  describe('Recursive List Zip', function() {
    it('should reduce a series of zeroes to one', function() {
      assert.deepEqual(recursiveSeriesReduce([2,0,0,0,1,4]),[2,0,1,4]);
    });
  });

  describe('Recursive List Mirror', function() {
    it('should insert elements to mirror the original list', function() {
      assert.deepEqual(recursiveSeriesReduce([2,7,8,3,1,4]),[2,7,8,3,1,4,4,1,3,8,7,2]);
    });
  });

  describe('Recursive Element Insert', function() {
    it('should create nested lists of each element with the passed value', function() {
      assert.deepEqual(recursiveSeriesReduce([[],[3],[7]],5),[[5],[3,5],[7,5]]);
    });
  });

  describe('Recursive List Nest', function() {
    it('should append every nested list inside the previous list', function() {
      assert.deepEqual(recursiveListNest([[4,3],[5,6],[8,2]]),[4,3,[5,6,[8,2]]]);
    });
  });

  describe('Recursive Sublist Check', function() {
    it('should return true if the main list contains the passed sublist', function() {
      assert.equal(recursiveSublistCheck([2,7,8,3,1,4],[2,7]),true);
    });

    it('should return false if the main list doesn\'t contains the passed sublist', function() {
      assert.equal(recursiveSublistCheck([5,6,7,1,4,6,7,1,3],[6,7,1]),false);
    });
  });
  
  describe('Recursive Sublist Extraction', function() {
    it('should extract a list from even numbered lists', function() {
      assert.deepEqual(recursiveSublistExtract([2,7,8,3,1,4],2,4),[8,3]);
    });
    it('should extract a list from odd numbered lists', function() {
      assert.deepEqual(recursiveSublistExtract([4,2,7,9,7],1,4),[2,7,9]);
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
  it('should work for a 4x2 matrix', function() {
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
    assert.equal(leastCommonMultiple(2,5),10);
  });
  
  it('should find the smallest multiple of 2, 3, and 4', function() {
    assert.equal(leastCommonMultiple(2,3,4),12);
  });
  
  it('should find the smallest multiple of 9', function() {
    assert.equal(leastCommonMultiple(9),9);
  });
});

describe('Josephus Survivor', function() {
  it('should correctly return the last survivor ', function() {
    assert.equal(josephusSurvivor(7,3),4);
    assert.equal(josephusSurvivor(11,19),10);
    assert.equal(josephusSurvivor(1,300),1);
    assert.equal(josephusSurvivor(14,2),13);
    assert.equal(josephusSurvivor(100,1),100);
  });
});

describe('32 bit integer to IPv4', function() {
  it('should translate a 32 bit integer to ipv4 address', function() {
    assert.equal(int32ToIp(2149583361),"128.32.10.1");
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
    assert.equal(stringPermuteFinder('supreme','presume'),false);
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