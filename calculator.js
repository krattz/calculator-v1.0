function addTwoNumbers(a,b) {
    return a + b;
}
function addMultipleNumbers(...args){
    var sum = 0;
    for(let i = 0; i<args.length;i++){
        sum += args[i];
    }
    return sum;
}
function multiplyTwoNumbers(a,b){
    return a*b;
}
function multiplyManyNumbers(...args){
    var product = 1;
    for(let i = 0; i<args.length; i++){
        product*= args[i];
    }
    return product;
}
module.exports = {
    addTwoNumbers,
    addMultipleNumbers,
    multiplyTwoNumbers,
    multiplyManyNumbers
}
