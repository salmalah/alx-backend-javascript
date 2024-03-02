const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
  it('should return the sum of rounded numbers', function() {
    assert.strictEqual(calculateNumber(1, 3), 4);
    assert.strictEqual(calculateNumber(1, 3.7), 5);
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });
});

describe('second number rounded', function() {
    it('should round the second number and return the sum', function() {
      assert.strictEqual(calculateNumber(1.1, 3), 4);
      assert.strictEqual(calculateNumber(1.9, 3), 5);
    });
  });
});
