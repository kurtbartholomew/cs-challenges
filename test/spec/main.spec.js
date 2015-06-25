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