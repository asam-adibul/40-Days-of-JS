console.log("Day 02");

let fruit = "mango";
let veg = "Carrot";

fruit = veg;

// Variable specifiers

// - "var" : function scoped, can be redeclared (not reccomended)
// - "let" : Block-scoped, can be reassigned
// - "const" : Block- scoped, **cannot** be reassigned


var address = "Dhaka";

console.log(address);

var address = "USA"; // not a good practice

console.log(address);

//------------------------------------------------------------

// using let
// Gives error (Uncaught SyntaxError: Identifier 'address' has already been declared)
// let address = "Dhaka";

// console.log(address);

// let address = "USA"; // not a good practice

// console.log(address);

//---------------------------------------------------------

//using const
// Gives error (Uncaught SyntaxError: Identifier 'address' has already been declared)
const address = "Dhaka";

console.log(address);

const address = "USA"; // not a good practice

console.log(address);