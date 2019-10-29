var calculator = require('../calculator');

describe("Simple calculator to add two numbers", function () {
    it("Should be able to add two numbers", function () {
        expect(calculator.addTwoNumbers(-1,-1)).toEqual(-2);
    });
});

describe( "Simple calculator to add multiple numbers", function(){
    it("Should be able to add multiple numbers", function(){
        expect(calculator.addMultipleNumbers(1,2,3,4)).toEqual(10);
    });
});

describe("Simple calculator to multiply two numbers", function(){
    it("should multiply two numbers", function(){
        expect(calculator.multiplyTwoNumbers(1,2)).toEqual(2);
    });
});

describe("Simple calculator to multiply multiple numbers",function(){
    it("should multiply multiple numbers",function(){
        expect(calculator.multiplyManyNumbers(1,2,3,4)).toEqual(24);
    });
});