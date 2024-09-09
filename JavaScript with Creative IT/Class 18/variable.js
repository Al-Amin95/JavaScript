document.write("Variable of JavaScript<br>");

/*
JavaScript Identifiers: All JavaScript variables must be identified with unique names.

1. These unique names are called identifiers. They can be short names (like x and y) or more descriptive names (age, sum, totalVolume).
2. The general rules for constructing names for variables (unique identifiers) are:

a. Names can contain letters, digits, underscores, and dollar signs.
b. Names must begin with a letter.
c. Names can also begin with $ and _ (but we will not use it in this tutorial).
d. Names are case sensitive (y and Y are different variables).
e. Reserved words (like JavaScript keywords) cannot be used as names.
*/

// 1. Valid variable names
// Names are case sensitive (VARIABLE and variable are different variables).
var VARIABLE = 100; // contains only letters ---> valid
console.log("Variable with only letters: ", VARIABLE);

var variable = 10; // contains only letters ---> valid
console.log("Variable with only letters: ", variable);

var variable1 = 10; // variable with letters and digits ---> valid
console.log("Variable with letters and digits: ", variable1);

var variable1_ = 10; // variable with letters, digits, underscore ---> valid
console.log("Variable with letters, digits, and underscore: ", variable1_);

var variable1_$ = 10; // variable with letters, digits, underscore, and dollar sign ---> valid
console.log("Variable with letters, digits, underscore, and dollar sign: ", variable1_$);

var $variable = 10; // contains letter and dollar sign ---> valid, but not commonly used
console.log("Variable beginning with dollar sign: ", $variable);

var _variable = 10; // contains letter and underscore ---> valid, but not commonly used
console.log("Variable beginning with underscore: ", _variable);

// 2. Invalid variable names:

// var 123variable = 100; // invalid
// var va!riable = 200; // invalid
// var var = 300; // invalid --- reserved words: function, return;
// let let = 400; // invalid --- reserved words: function, return;
// var function = 500; // invalid --- reserved words: function, return;
// var return = 600; // invalid --- reserved words: function, return;
// let user-name = 700;  // invalid ---- cannot contain hyphen in variable name

// Camel Case: userName
let userName = "alamin28"; // use camel case
console.log("User-name: ", userName);
console.log("\n\n");

// JavaScript Variables can be declared in 4 ways:

/*
1. Global scope: var
   a. Can be redeclared and updated
   b. Only use var if you MUST support old browsers
*/
var num1; // variable declaration
num1 = 10; // variable initialization
var num2 = 20; // variable initialization during declaration
console.log("Declare with var ---> num1: ", num1);
console.log("Declare with var ---> num2: ", num2);

var num1 = 100; // can be redeclared
var num2 = 200; // can be redeclared
console.log("Redeclare with var ---> num1: ", num1);
console.log("Redeclare with var ---> num2: ", num2);

num1 = 101; // can be updated
num2 = 201; // can be updated
console.log("Redeclare with var then update ---> num1: ", num1);
console.log("Redeclare with var then update ---> num2: ", num2);
console.log("\n\n");

/*
2. Global scope: Automatically declared variables
   a. Can be redeclared or updated like variables declared with var
*/
num3 = 111; // automatically declared
num4 = 222; // automatically declared
console.log("Automatically-declare ---> num3: ", num3);
console.log("Automatically-declare ---> num4: ", num4);

num3 = 102; // can be redeclared
num4 = 202; // can be redeclared
console.log("Automatically-redeclare ---> num3: ", num3);
console.log("Automatically-redeclare ---> num4: ", num4);

num3 = 220; // can be updated
num4 = 330; // can be updated
console.log("Automatically-declare then update ---> num3: ", num3);
console.log("Automatically-declare then update ---> num4: ", num4);
console.log("\n\n");

/*
3. Block scope: let
   a. Can be updated but not redeclared
   b. Use let if you can't use const
*/
let num5 = 123;
let num6 = 234;
console.log("Declare with let ---> num5: ", num5);
console.log("Declare with let ---> num6: ", num6);

// let num5 = 123; // invalid ----> can't redeclare
// let num6 = 234; // invalid ----> can't redeclare

num5 = 333; // can be updated
num6 = 444; // can be updated
console.log("Declare with let then update ---> num5: ", num5);
console.log("Declare with let then update ---> num6: ", num6);
console.log("\n\n");

/* 
4. Block scope: const
   a. const ---> can't redeclare or update
   b. Always use const if the type or value should not be changed (for Arrays and Objects).
*/
const num7 = 600;
const num8 = 700;
console.log("Declare with const-keyword: num7: ", num7);
console.log("Declare with const-keyword: num8: ", num8);
console.log("\n\n");

// const num7 = 600; // can't redeclare ---> invalid
// const num8 = 700; // can't redeclare ---> invalid

// num7 = 600; // can't update ----> invalid
// num8 = 700; // can't update ----> invalid
