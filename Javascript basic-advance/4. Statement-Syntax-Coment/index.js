// 1. JavaScript Syntax 

let x; // Declare x
let y; // Declare y
x = 5; // Initialize x
y = 5; // Initialize y
const sum = x + y; // Calculate the sum
console.log("Sum: ", sum);
console.log("\n\n");


// 2. JavaScript Values: 1. Literals: Fixed value, 2. Variables: Can be changed or re-assigned
const pi = 3.14; // Literals: Number literal
const greeting = 'Hello, World!'; // Literals: String literal
const isJavaScriptFun = true; // Literals: Boolean literal
// Attempt to change a constant value (will cause an error)
// greeting = "Hello JavaScript"; // Error: Assignment to constant variable

let age = 25; // Variables: Number variable
let name = 'Alice'; // Variables: String variable
age = 35; // Variable that can change

let result = pi * age; // Example of using both literals and a variable
console.log(greeting + ' My name is ' + name + '. I am ' + age + ' years old.');
console.log('Result of pi * age: ' + result);
console.log("\n\n");


// 3. JavaScript Arithmetic Operators
let num1 = 10; // Fixed a typo here
let num2 = 5; // Declare num2

let result2 = num1 + num2; // Addition operator --> Addition: result2 = 10 + 5; // Statement 1
console.log('Addition: ' + result2); // Output: Addition: 15

result2 = num1 - num2; // Subtraction operator --> Subtraction: result2 = 10 - 5; // Statement 2
console.log('Subtraction: ' + result2); // Output: Subtraction: 5

result2 = num1 * num2; // Multiplication operator --> Multiplication: result2 = 10 * 5; // Statement 3
console.log('Multiplication: ' + result2); // Output: Multiplication: 50

result2 = num1 / num2; // Division operator --> Division: result2 = 10 / 5; // Statement 4
console.log('Division: ' + result2); // Output: Division: 2

result2 = num1 % num2; // Modulus operator (remainder of division) --> Modulus: result2 = 10 % 5; // Statement 5
console.log('Modulus: ' + result2); // Output: Modulus: 0
console.log("\n\n");



// 4. Assignment Operator

// Assigning values to variables
let score = 100; // Assigns 100 to score
let city = 'New York'; // Assigns 'New York' to city
let isLoggedIn = false; // Assigns false to isLoggedIn
let total = 7 * 6; // Assigns the result of 7 * 6 (42) to total

// Reassigning a value
let year = 2023; // Initial assignment
year = 2024; // Reassigns the value 2024 to year

// Output the variables
console.log('Score:', score); // Output: Score: 100
console.log('City:', city); // Output: City: New York
console.log('Is Logged In:', isLoggedIn); // Output: Is Logged In: false
console.log('Total:', total); // Output: Total: 42
console.log('Year:', year); // Output: Year: 2024
console.log("\n\n");

//Syntax of a JavaScript Expression
let a = 5; // Variable assignment
let b = 10; // Variable assignment
// Expression: a * b
let result3 = a * b; // Evaluates to 50
console.log(result3); // Output: 50


console.log("\n\n");


//Syntax of javascript comments

//1. Single-line Comment  syntax
let initialValue = 5; // Initialize initialValue with value 5
// initialValue = 6; // This line is commented out and will not be executed
console.log(initialValue); // Output: 5
/*  Multi-line Comment Syntax */
let totalAmount = 10;
/* Initialize totalAmount with value 10
This is a multi-line comment
The following line of code will be executed
*/
console.log(totalAmount); // Output: 10
console.log("\n\n");


console.log("\n\n");