const chai = require("chai");
const expect = chai.expect;

const {returnsThree, reciprocal } = require("../problems/number-fun");




describe('number-Functions', function () {

    describe('returnThree function', function () {
        it('should return three', function () {
            expect(returnsThree()).to.equal(3);
        });
    }); 

    describe('reciprocal function', function () {
        it('should return the reciprocal of n', function () {
            expect(reciprocal(10)).to.equal(0.1);
            expect(reciprocal(100)).to.equal(0.01);
            expect(reciprocal(1000)).to.equal(0.001);
        });

        it('should return a type error if n is outside the range 1-1000000', function () {
            let toLow = () => reciprocal(0);
            let toHigh = () => reciprocal(10000000);
            let err = 'N must be between 1 and 1000000'
            expect(toLow).to.throw(TypeError, err);
            expect(toHigh).to.throw(TypeError, err);
        });
    });
})