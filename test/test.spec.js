var calculator = require('../src/calculator.js');

describe( "Simple calculator to add multiple numbers", function(){
    it("Should be able to add multiple numbers", function(){
        expect(calculator.add(1,2,3,4)).toBe(10);
    });
});

describe("Simple calculator to multiply multiple numbers",function(){
    it("should multiply multiple numbers",function(){
        expect(calculator.multiply(1,2,3,4)).toBe(24);
    });
});