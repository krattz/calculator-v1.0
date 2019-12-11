class Calculator{
    constructor(){ 
        this.arr = [];
        this.capture = 0; 
    }

    add(...args){
        var sum = 0;
        for(let i = 0; i<args.length; i++){
             
            if (args[i] == 'LAST') {
                args[i]= this.capture;
            } 
             
            sum+= args[i];
            args[i] = this.capture;
            this.capture = sum;
            this.arr[i] = sum;
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
          this.arr.push(this.capture);

    }
    get_slot(x){ 
        return this.arr[x];   
    }
}
var tog = new Calculator();
console.log(tog.add(1,2));
console.log(tog.multiply("LAST",2));
console.log(tog.add(10,20));
tog.set_slot('2');
console.log(tog.get_slot('2'));
console.log(tog.add(100,200));
tog.set_slot('3');
console.log(tog.get_slot('3'));
console.log(tog.last());
console.log(tog.get_slot('2'));
console.log(tog.get_slot('3'));
console.log(tog.add("LAST",tog.get_slot('2')));
module.exports = {
   Calculator
}
