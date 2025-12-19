// Start coding here
const add = (a,b) => {
        return a+b;
}
const subtract = (a,b) => {
    return a-b;
}
const multiply = (a,b) => {
    return a*b;
}
const divide = (a,b) => {
    return a/b;
}

let calculator = {
    add: add(),
    subtract: subtract(),
    multiply: multiply(),
    divide: divide(),
};

let addResult = add(10,20);
let addDivide = divide(3000,10);
console.log(addResult,addDivide)