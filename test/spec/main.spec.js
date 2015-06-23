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