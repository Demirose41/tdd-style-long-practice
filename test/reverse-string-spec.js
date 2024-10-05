const chai = require("chai");
const expect = chai.expect

const reverseString = require("../problems/reverse-string");


describe ('reverseString', function () {

    let string = "something";

    it('should return a string', function() {
        expect(reverseString(string)).to.be.a('string');
    });

    it('should throw a TypeError when invoked with anything but a string', function () {
        let err = 'Can only reverse a string';
        let badFn = () => reverseString(true);
        expect(badFn).to.throw(TypeError, err);
    });

    it('should return a string that has its characters reversed', function() {
        expect(reverseString(string)).to.equal('gnihtemos');
    });


})