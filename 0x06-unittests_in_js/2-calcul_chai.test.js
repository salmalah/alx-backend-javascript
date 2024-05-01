const chai = require('chai');
const calculateNumber = require('./2-calcul_chai');

const expect = chai.expect;

describe('calculateNumber', function() {
  describe('sum of rounded numbers', function() {
    it('should return the sum of rounded numbers', function() {
      expect(calculateNumber(1, 3)).to.equal(4);
      expect(calculateNumber(1, 3.7)).to.equal(5);
      expect(calculateNumber(1.2, 3.7)).to.equal(5);
      expect(calculateNumber(1.5, 3.7)).to.equal(6);
    });
  });

  describe('second number rounded', function() {
    it('should round the second number and return the sum', function() {
      expect(calculateNumber(1.1, 3)).to.equal(4);
      expect(calculateNumber(1.9, 3)).to.equal(5);
    });
  });
});
