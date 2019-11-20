var {Calculator} = require('../src/simpleCalculator.js/index.js');
let calc = new Calculator();
describe( "Simple calculator to add multiple numbers", function(){
    it("Should be able to add multiple numbers", function(){
        expect(calc.add(1,2,3,4)).toBe(10);
    });
});

describe("Simple calculator to multiply multiple numbers",function(){
    it("should multiply multiple numbers",function(){
        expect(calc.multiply(1,2,3,4)).toBe(24);
    });
});
// describe("Remember the last result calculated", function(){
//     it("should return the last calculated result by the Add function", function(){
//         expect(calc.last(calc.add(1,2))).toBe(3);
//     });
// });