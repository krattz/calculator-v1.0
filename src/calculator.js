
function add(...args){
    var sum = 0;
    for(let i = 0; i<args.length;i++){
        sum += args[i];
    }
    return sum;
}

function multiply(...args){
    var product = 1;
    for(let i = 0; i<args.length; i++){
        product*= args[i];
    }
    return product;
}
module.exports = {
    add,
    multiply
}
