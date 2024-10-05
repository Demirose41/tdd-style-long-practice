const chai = require("chai");
const expect = chai.expect;

const myMap = require("../problems/my-map");

describe('myMap', function () {

    let testArray = [ 1,2,3,4,5];
    let addFive = (ele) => ele + 5;
    
    it('should return an array', function (){
        expect(myMap(testArray, addFive)).to.be.an('array');
    });

    it('should return all values of the passed in array after being passed into the callback', function (){
        expect(myMap(testArray, addFive)).to.deep.equal([6,7,8,9,10]);
    });

})