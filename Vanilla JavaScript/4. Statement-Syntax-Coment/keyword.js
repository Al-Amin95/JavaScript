// 1. Variable Declarations
let x = 10; // let keyword: Declares a block-scoped variable x
const pi = 3.14; // const keyword: Declares a block-scoped, read-only constant pi
var name = 'Alice'; // var keyword: Declares a variable name with function or global scope

// 2. Conditional Statements
if (x > 5) { // if keyword: Executes code block if condition is true
  console.log('x is greater than 5'); // Executes if x is greater than 5
} else { // else keyword: Executes code block if condition is false
  console.log('x is 5 or less'); // Executes if x is 5 or less
}

// 3. Loop
for (let i = 0; i < 5; i++) { // for keyword: Creates a loop with initialization, condition, and increment
  console.log(i); // Logs numbers 0 to 4
}

// 4. Function Declaration and Usage
function greet(name) { // function keyword: Defines a function named greet
  return 'Hello, ' + name; // return keyword: Returns a value from the function
}

console.log(greet('Alice')); // Output: Hello, Alice

// 5. Switch Statement
let day = 'Friday';
switch (day) { // switch keyword: Selects code block based on the value of day
  case 'Monday': // case keyword: Matches the value to execute specific block
    console.log('Start of the work week');
    break; // break keyword: Exits the switch block
  case 'Friday': // case keyword: Matches the value to execute specific block
    console.log('End of the work week');
    break; // break keyword: Exits the switch block
  default: // default keyword: Executes if no cases match
    console.log('Midweek');
}

// 6. Error Handling
try { // try keyword: Executes code that may throw an error
  // Code that may throw an error
  let result = x / 0; // This will not throw an error but is an example
  console.log(result);
} catch (error) { // catch keyword: Catches and handles errors thrown in the try block
  // Code to handle the error
  console.error('An error occurred:', error);
} finally { // finally keyword: Executes code regardless of an error
  // Code to run regardless of error
  console.log('Execution completed.');
}



