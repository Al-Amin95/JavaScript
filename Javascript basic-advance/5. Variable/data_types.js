// 1. Primitive Data Types: string, number, boolean,  undefined, null, symbol, BigIn

let myString = "Hello, World!"; // 1. String: range - Any sequence of characters
console.log("String Value:", myString, ", Type:", typeof myString);

let myNumber = 42; // 2. Number: range - ±(2^53 - 1) for integers, floating-point precision varies
console.log("Number Value:", myNumber, ", Type:", typeof myNumber);

let myBigInt = 1234567890123456789012345678901234567890n; // 3. BigInt: range - Arbitrary-precision integers
console.log("BigInt Value:", myBigInt, ", Type:", typeof myBigInt);

let myBoolean = true; // 4. Boolean: range - true or false
console.log("Boolean Value:", myBoolean, ", Type:", typeof myBoolean);

let myUndefined; // 5. Undefined: range - Represents an uninitialized variable
console.log("Undefined Value:", myUndefined, ", Type:", typeof myUndefined);

let mySymbol = Symbol('description'); // 6. Symbol: range - Unique and immutable values
console.log("Symbol Value:", mySymbol, ", Type:", typeof mySymbol);

let myNull = null; // 7. Null: range - Represents intentional absence of any object value
console.log("Null Value:", myNull, ", Type:", typeof myNull);



// 2. Non-Primitive Data Types: 
let myObject = { // 1. Object
    name: 'Alice',
    age: 30
};console.log("Object Value:", myObject, ", Type:", typeof myObject);  // 1. Object: Collection of key-value pairs

let myArray = [1, 2, 3, 4, 5]; // 2. Array
console.log("Array Value:", myArray, ", Type:", typeof myArray);  // 2. Array: rOrdered collection of values (also of type 'object')

function myFunction() { // 3. Function
    return "I am a function!";
}console.log("Function Value:", myFunction, ", Type:", typeof myFunction);  // 3. Function: Callable code block (also of type 'function')

let myDate = new Date(); // 4. Date
console.log("Date Value:", myDate, ", Type:", typeof myDate);  // 4. Date:Represents date and time (also of type 'object')

let myRegExp = /abc/i; // 5. RegExp
console.log("RegExp Value:", myRegExp, ", Type:", typeof myRegExp);  // 5. RegExp:Pattern matching (also of type 'object')


