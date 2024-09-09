// 1. Allowed Characters

// Names can contain letters:
let userName = 'Alice';         // camelCase variable with letters
let FirstName = 'Bob';          // PascalCase variable with letters
let lastName = 'Smith';         // camelCase variable with letters

// Names can contain digits (but not as the first character):
let age1 = 25;                  // camelCase variable with digits
let total2 = 100;               // camelCase variable with digits
let value3 = 30;                // camelCase variable with digits

// Names can contain underscores (_):
let total_sum = 150;            // snake_case variable with underscores
let user_name = 'Charlie';      // snake_case variable with underscores

// Names can contain dollar signs ($):
let total$Amount = 200;         // camelCase variable with dollar sign
let price$USD = 50;             // camelCase variable with dollar sign

// Corrected console.log statement with proper string concatenation
console.log(`userName: ${userName}, ` + 
            `FirstName: ${FirstName}, ` + 
            `lastName: ${lastName}, ` + 
            `age1: ${age1}, ` + 
            `total2: ${total2}, ` + 
            `value3: ${value3}, ` + 
            `total_sum: ${total_sum}, ` + 
            `user_name: ${user_name}, ` + 
            `total$Amount: ${total$Amount}, ` + 
            `price$USD: ${price$USD}`);

// 2. Starting Characters

// Names must begin with a letter:
let variable = 'value';         // Valid
let Name = 'Alice';            // Valid

// Names can also begin with $ and _:
let $amount = 500;             // Valid: Starts with $
let _discount = 10;            // Valid: Starts with _

// Note: Avoid using $ or _ as starting characters unless necessary
console.log($amount, ", ", _discount);  // Output: 500, 10

// 3. Case Sensitivity
let totalAmount = 300;         // camelCase variable
let TotalAmount = 400;         // Different identifier due to case sensitivity
console.log(totalAmount);      // Output: 300
console.log(TotalAmount);      // Output: 400

// 4. Reserved Words

// let class = 'Math'; // Reserved words cannot be used as variable names-->SyntaxError: Unexpected token 'class'         
// let function = 'Test';// Reserved words cannot be used as variable names-->SyntaxError: Unexpected token 'class'    

// Correct usage of reserved words in different contexts
function testFunction() { // Function declaration using keyword 'function'
    console.log('This is a test function.');
}testFunction();// Output: This is a test function.
let myFunction = function() { // Valid: 'function' used as a part of a variable name
    console.log('Function variable');
};
myFunction();      // Output: Function variable

const MAX_LIMIT = 100;// Constants (using all uppercase letters): snake_case for constants
console.log(MAX_LIMIT);// Output: 100

