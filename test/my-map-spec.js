const chai = require("chai");
const expect = chai.expect;
const spies = require("chai-spies");
chai.use(spies);

const myMap = require("../problems/my-map");



describe('myMap', function () {

    let testArray;
    let addFive = (ele) => ele + 5;
    beforeEach(function () {
        testArray = [ 1,2,3,4,5];
    })
    
    it('should return an array', function (){
        expect(myMap(testArray, addFive)).to.be.an('array');
    });

    it('should return all values of the passed in array after being passed into the callback', function (){
        expect(myMap(testArray, addFive)).to.deep.equal([6,7,8,9,10]);
    });

    it('should not mutate the original array', function () {
        let mappedArray = myMap(testArray, addFive);
        expect(testArray).to.deep.equal([1,2,3,4,5]);
        expect(mappedArray).to.deep.equal([6,7,8,9,10]);
    })

    it('should not call the built in Array.map() method', function () {
        chai.spy.on(testArray, 'map');
        myMap(testArray, addFive);
        expect(testArray.map).to.have.not.been.called();
    })

    it('should invoke the passed in callback once for each element in the passed in array', function () {
        const callbackSpy = chai.spy(addFive);
        myMap(testArray, callbackSpy);
        expect(callbackSpy).to.have.been.called(5);
    })

})