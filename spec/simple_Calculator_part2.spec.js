var {Calculator} = require('../src/simple_Calculator_part2');
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
describe("Remember the last result calculated", function(){
    it("should return the last calculated result by the Add function", function(){
    calc.add(1,2);    
expect(calc.last()).toBe(3);
    });
    it("should use the last result in a new calculation", function(){
        calc.add(1,2); 
        expect(calc.multiply(3,'LAST')).toBe(9); 
    });
    it("should use the last result and the slot value in a new calculation", function(){
        calc.add(1,2); 
        let slot = calc.get_slot('2');
        expect(calc.add(slot,'LAST')).toBe(12); 
    });
});