// Rule 1: Start with a Letter, Dollar Sign, or Underscore
let _startWithUnderscore = 'Valid'; // Starts with an underscore
let $startWithDollarSign = 'Valid'; // Starts with a dollar sign
let startWithLetter = 'Valid'; // Starts with a letter

// Rule 2: Subsequent Characters: Letters, Digits, Underscores, Dollar Signs
let withDigits123 = 'Valid'; // Includes digits after the initial letter
let with_underscore = 'Valid'; // Includes underscores
let with$DollarAnd123 = 'Valid'; // Includes dollar sign and digits

// Rule 3: No Reserved Words
// let var = 'Invalid'; // 'var' is a reserved keyword and cannot be used as an identifier

// Rule 4: Case Sensitivity
let caseSensitive1 = 'Valid'; // Identifier
let CaseSensitive1 = 'Different'; // Different identifier
let CASESENSITIVE1 = 'Different'; // Different identifier

// Rule 5: Cannot Start with a Digit
// let 123startWithDigit = 'Invalid'; // Cannot start with a digit
// let 1stVariable = 'Invalid'; // Cannot start with a digit

// JavaScript does not interpret LET or Let as the keyword let
let LET = 'This is not a keyword'; // Valid identifier, not interpreted as 'let'
let Let = 'This is not a keyword'; // Valid identifier, not interpreted as 'let'

// Example usage of valid identifiers
console.log(_startWithUnderscore); // Output: Valid
console.log($startWithDollarSign); // Output: Valid
console.log(startWithLetter); // Output: Valid
console.log(withDigits123); // Output: Valid
console.log(with_underscore); // Output: Valid
console.log(with$DollarAnd123); // Output: Valid
console.log(LET); // Output: This is not a keyword
console.log(Let); // Output: This is not a keyword

// Function with a valid identifier
function validFunctionName() { // Valid identifier for a function
  console.log('Function executed');
}

validFunctionName(); // Output: Function executed











