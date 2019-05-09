require('chai').should();
const sumIntervals = require('../index.js');

describe('Function Tests', function () {

  it('should return the correct sum for non overlapping ', function () {
    sumIntervals([[1,5]]).should.eql(4);
    sumIntervals([[1,5],[6,10]]).should.eql(8)
    sumIntervals([[1,2],[6,10],[11,15]]).should.eql(9);
  });

  it('should return the correct sum for overlapping intervals', function () {
    sumIntervals([[1,4],[3,5]]).should.eql(4);
    sumIntervals([[1,12],[3,6],[5,8],[7,10],[9,12]]).should.eql(11);
    sumIntervals([[1,20],[2,19],[5,15],[8,12]]).should.eql(19);
    sumIntervals([[2,9],[2,6],[2,4],[2,9],[2,5]]).should.eql(7);
  });
});
