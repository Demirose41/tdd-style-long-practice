const chai = require("chai");
const expect = chai.expect;

const Person = require("../problems/person");


describe('Person Class', function () {

    let bill;
    beforeEach(function () {
        bill = new Person("Bill", 69);
        garth = new Person("Garth", 26);
    })
    
    describe('constructor', function () {
        it('should set a name and age variable', function() {
            expect(bill.name).to.equal("Bill");
            expect(bill.age).to.equal(69);
        })
    })

    describe('sayHello function', function() {
        it("should return string of the Person instance's name and a greating", function () {
            expect(bill.sayHello()).to.equal('Bill says whats good fuckers!?');
        })
    })

    describe('visit(otherPerson) function', function(){
        it("should return a string stating that this instance visited the passed-in person instance", function () {
            expect(bill.visit(garth)).to.equal('Bill visited Garth');
        })
    })

    describe('switchVisit(otherPerson) function', function() {
        it('should invoke the visit function of the passed in person instance', function () {
            expect(bill.switchVisit(garth)).to.equal('Garth visited Bill');
        })
    })

    describe('update(obj) function', function() {
        it('if the argument is not an object throw a new TypeError', function () {
           failContext = () => bill.update(12);
           passContext = () => bill.update({});
           expect(failContext).to.throw(TypeError, 'only people please...'); 
           expect(passContext).to.not.throw(TypeError, 'only people please...'); 
        })

        it("should update the person instance's name and age with the passed in object values", function(){
            const newYou = {name: "Lulu", age: 28};
            bill.update(newYou);
            expect(bill.name).to.equal("Lulu");
            expect(bill.age).to.equal(28);
        })

        it("should throw and TypeError with a specific message is an object without an age AND name key are passed in", function() {
            const newWho = {name: "Tifa", cupsize: "G"};
            failContext = () => bill.update(newWho);
            expect(failContext).to.throw(TypeError, 'name AND age please...');
        })
    })

});