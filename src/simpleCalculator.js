class Calculator{
    constructor(){ 
        let arr = [];
    }
    
    add(...args){
        var sum = 0;
        for(let i = 0; i<args.length; i++){
             
            if (args[i] == 'LAST') {
                sum+= this.capture;
            } else {
                sum+= args[i];
            }
            args[i] = this.capture;
            this.capture = sum;
        } 
        return sum;
    }

    multiply(...args){
        var product = 1;
        for(let i = 0; i<args.length; i++){
         
            if (args[i] == 'LAST') {
                product*= this.capture;
            } else {
                product*= args[i];
            }
        }  
        return product;
    }
    last(){ 
        return this.capture;
    }
    set_slot(){
        for (var i =0; i<args.length;i++){
            this.arr[i]= this.tog.last();
        }
    }
    get_slot(){
        for (var i =0; i<args.length;i++){
            this.arr[i]= this.tog.last();
        }
        return arr[i];
    }
}
var tog = new Calculator();
console.log(tog.add(1,2));
//console.log(tog.multiply(1,2,3,4));
console.log(tog.multiply(5,'LAST'));
// console.log(get_slot(1));
module.exports = {
   Calculator
}