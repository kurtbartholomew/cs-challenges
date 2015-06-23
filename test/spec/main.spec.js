describe('The knapsack', function() {
  it('should have one item', function() {
    assert.equal("["+knapsack(100, [[1, 1]]).join(", ")+"]", "["+[100].join(", ")+"]");
    assert.equal("["+knapsack(100, [[100, 1]]).join(", ")+"]", "["+[1].join(", ")+"]");
  });

  it('should have two items', function() {
    assert.equal("["+knapsack(100, [[1, 1],[3, 4]]).join(", ")+"]", "["+[1, 33].join(", ")+"]");
    assert.equal("["+knapsack(100, [[60, 80],[50, 50]]).join(", ")+"]", "["+[1, 0].join(", ")+"]");
  });

  it('should have three items', function() {
    assert.equal("["+knapsack(100, [[10, 10],[30, 40],[56, 78]]).join(", ")+"]", "["+[1, 1, 1].join(", ")+"]");
    assert.equal("["+knapsack(100, [[11.2,  7.4],[25.6, 17.8],[51.0, 41.2],[23.9, 15.6],[27.8, 19.0]]).join(", ")+"]",
             "["+[2, 1, 1, 0, 0].join(", ")+"]");
  });
});