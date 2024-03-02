const sinon = require('sinon');
const Utils = require('./4-payment');

describe('payment', function() {
  let consoleSpy;

  beforeEach(function() {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(function() {
    consoleSpy.restore();
  });

  it('should stub calculateNumber and log the correct message', function() {
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);

    Utils.calculateNumber('SUM', 100, 20);

    sinon.assert.calledWith(stub, 'SUM', 100, 20);
    sinon.assert.calledWith(consoleSpy, 'The total is: 10');

    stub.restore();
  });
});
