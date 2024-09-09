// let globalVar = 'I am global'; // Global scope

// function showGlobalVar() {
//     console.log(globalVar); // Accessible here
// }showGlobalVar(); // Output: I am global

// console.log(globalVar); // Output: I am global


// // Function Scope
// function myFunction() {
//     var functionScopedVar = 'I am function-scoped'; // Function scope
//     console.log(functionScopedVar); // Accessible here
// }
// myFunction(); // Output: I am function-scoped
// console.log(functionScopedVar); // Error: functionScopedVar is not defined



// //Block scope
// if (true) {
//     let blockScopedVar = 'I am block-scoped'; // Block scope
//     console.log(blockScopedVar); // Accessible here
// }
// console.log(blockScopedVar); // Error: blockScopedVar is not defined


// //Lexical Scope
// function outerFunction() {
//     let outerVar = 'I am from outer function';

//     function innerFunction() {
//         console.log(outerVar); // Accessible here due to lexical scoping
//     }

//     innerFunction(); // Output: I am from outer function
// }outerFunction();





//Hoisting
console.log(myVar); // Output: undefined (variable hoisting)
console.log(myFunc()); // Output: 'Hello from hoisted function!' (function hoisting)

var myVar = 'I am hoisted';// Variable declaration is hoisted but not the initialization
function myFunc() { // Function declaration is fully hoisted
    return 'Hello from hoisted function!';
}
var myOtherFunc = function() { // Function expression example
    return 'Hello from function expression!';
};console.log(myOtherFunc()); // Output: 'Hello from function expression!'






