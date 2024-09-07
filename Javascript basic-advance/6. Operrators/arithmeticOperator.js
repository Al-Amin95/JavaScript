let number1 = 2;
let number2 = 3;

let sum = number1 + number2; // summation
let sub = number1 - number2; // subtraction
let mul = number1 * number2; // multiplication
let div = number1 / number2; // division
let rem = number1 % number2; // remainder (modulus)
let exp = number1 ** number2; // exponential (power: 2^3=8)

document.getElementById("sum").innerText = "Summation: " + sum;
document.getElementById("sub").innerText = "Subtraction: " + sub;
document.getElementById("mul").innerText = "Multiplication: " + mul;
document.getElementById("div").innerText = "Division: " + div;
document.getElementById("rem").innerText = "Remainder: " + rem;
document.getElementById("exp").innerText = "Exponential: " + exp;

//print in console
console.log(sum);
console.log(sub);
console.log(mul);
console.log(div);
console.log(rem);
console.log(exp);

// Pre-increment and post-increment
// Initial Number
document.getElementById("number2").innerHTML = "Initial Number: " + number2;
console.log("Before increment-decrement: ", number2);

// Pre-increment
let preIncrement = ++number2; // first increment then print
document.getElementById("preIncrement").innerHTML = "Pre increment - first increment then print: " + preIncrement;
console.log("\nAfter pre increment (number2): ", number2);
console.log("After pre increment (preIncrement): ", preIncrement);

// Post-increment
let postIncrement = number2++; // first print then increment
document.getElementById("postIncrement1").innerHTML = "Post increment - first print then increment: " + postIncrement;
document.getElementById("postIncrement2").innerHTML = "Post increment (after operation): " + number2;
console.log("\nAfter postIncrement (postIncrement): ", postIncrement);
console.log("After postIncrement (number2): ", number2);

// Pre-decrement
let preDecrement = --number2; // first decrement then print
document.getElementById("preDecrement").innerHTML = "Pre decrement - first decrement then print: " + preDecrement;
console.log("\nAfter pre decrement (number2): ", number2);
console.log("After pre decrement (preDecrement): ", preDecrement);

// Post-decrement
let postDecrement = number2--; // first print then decrement
document.getElementById("postDecrement1").innerHTML = "Post decrement - first print then decrement: " + postDecrement;
document.getElementById("postDecrement2").innerHTML = "Post decrement (after operation): " + number2;
console.log("\nAfter postDecrement (postDecrement): ", postDecrement);
console.log("After postDecrement (number2): ", number2);
