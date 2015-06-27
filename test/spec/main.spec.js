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
    assert.equals(primeFactors(7775460),"(2**2)(3**3)(5)(7)(11**2)(17)");
  });

  it('should display the proper factors for 86240', function() {
    assert.equals(primeFactors(86240),"(2**5)(5)(7**2)(11)");
  });
});

describe('Sierpinski\'s Gasket', function(){
  it('should have a single L for an input of 0', function() {
    var inputOf0 = 'L';
    assert.equals(sierpinski(0),inputOf0);
  });

  it('should have 4 layers of L\'s for 1', function() {
    var inputOf1 = [
      'L',
      'L L'
    ].join('\n');
    assert.equals(sierpinski(1),inputOf1);
  });

  it('should have 4 layers of L\'s for 2', function() {
    var inputOf2 = [
      'L',
      'L L',
      'L   L',
      'L L L L'
    ].join('\n');
    assert.equals(sierpinski(2),inputOf2);
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
    assert.equals(sierpinski(3),inputOf3);
  });
});

describe('Simple Recursion', function(){

  describe('Recursive max', function() {
    it('should return the correct max from a list', function() {
      assert.equals(recursiveMax([2,7,8,3,1,4]), 8);
    });
  });

  describe('Recursive occurrence count', function() {
    it('should count the correct number of 4\'s', function() {
      assert.equals(recursiveTimes([2,7,4,4,1,4],4),3);
    });
  });

  describe('Recursive list reverse', function() {
    it('should properly reverse a list', function() {
      assert.equals(recursiveReverse([2,7,8,3,1,4]),[4,1,3,8,7,2]);
    });
  });

  describe('Recursive pair swap', function() {
    it('should swap properly for even lists', function() {
      assert.equals(recursivePairSwap([2,7,8,3,1,4]),[7,2,3,8,4,1]);
    });

    it('should swap properly for odd lists', function() {
      assert.equals(recursivePairSwap([3,6,8,1,5]),[6,3,1,8,5]);
    });
  });

  describe('Recursive list sum', function() {
    it('should add together the list properly', function() {
      assert.equals(recursivelistSum([2,7,8,3,1,4]),25);
    });
  });

  describe('Recursive list separate', function() {
    it('should separate each index out properly', function() {
      assert.equals(recursiveListSeparate([2,7,8,3,1,4]),[[2], [7], [8], [3], [1], [4]]);
    });
  });

  describe('Recursive pair separate', function() {
    it('should properly separate pairs of even lists', function() {
      assert.equals(recursivePairSeparate([2,7,8,3,1,4]),[[2,7], [8,3], [1,4]]);
    });
    it('should properly separate pairs of odd lists', function() {
      assert.equals(recursivePairSeparate([3,6,8,1,5]),[[3,6],[8,1],[5,0]]);
    });
  });

  describe('Recursive list flatten', function() {
    it('should properly create single list', function() {
      assert.equals(recursiveListFlatten([[2,7], [8,3], [1,4]]),[2,7,8,3,1,4]);
    });
  });

  describe('Recursive list split', function() {
    it('should divide a list at the provided index', function() {
      assert.equals(recursiveListSplit([2,7,8,3,1,4],4),[[2,3,1],[7,8,4]]);
    });
  });

  describe('Recursive Evens Filter', function() {
    it('should properly return only even integers', function() {
      assert.equals(recursiveEvenFilter([2,7,8,3,1,4]),[2,8,4]);
    });
  });

  describe('Recursive List Sign Inversion', function() {
    it('should shift every other integer negative', function() {
      assert.equals(recursiveListInvert([2,7,8,3,1,4]),[2,-7,8,-3,1,-4]);
    });

    it('should also shift negatives back to positive', function() {
      assert.equals(recursiveListInvert([-5,-3,7,1,-6,2]),[5,-3,7,-1,6,-2]);
    });
  });

  describe('Recursive List Zip', function() {
    it('should zip two lists together into one', function() {
      assert.equals(recursiveListZip([2,7,8,3,1,4], [9,5,1]),[2,9,7,5,8,1,3,1,4]);
    });
  });

  describe('Recursive List Creator', function() {
    it('should create a list of all zeroes', function() {
      assert.equals(recursiveListCreator(0, 5),[0,0,0,0,0]);
    });

    it('should create a list of three sevens', function() {
      assert.equals(recursiveListCreator(7, 3),[7,7,7]);
    });
  });

  describe('Recursive Counting List', function() {
    it('should create a list from 2 to 5', function() {
      assert.equals(recursiveCountingList(2,5),[2,3,4]);
    });

    it('should create a list from 8 to 1', function() {
      assert.equals(recursiveCountingList(8,1),[8,7,6,5,4,3,2]);
    });

    it('should create an empty list if given the same elements', function() {
      assert.equals(recursiveCountingList(3,3),[]);
    });
  });

  describe('Recursive List Zip', function() {
    it('should reduce a series of zeroes to one', function() {
      assert.equals(recursiveSeriesReduce([2,0,0,0,1,4]),[2,0,1,4]);
    });
  });

});