// way1: declare automatically---can be update and re declare -- global scope
x = 5,y = 6;
z = x + y;
console.log(z);
x = 10,y = 20; //update
z = x + y;
console.log(z);
document.getElementById("demo").innerHTML = "Z: " + z;
console.log("\n\n");

// way2: declare with var:---can be update and re declare -- global scope
var a = 10, b=20; //Only use var if you MUST support old browsers.
var c = a + b;
console.log(c);
var a = 100,b = 200;; // rer declare variable 
var c = a + b;
console.log(c);
a = 1000,b = 2000; // update value
c = a + b;
document.getElementById("demo1").innerHTML = "C: " + c;
console.log("\n\n");

// way3: declare with let  can be update and  do not re declare -- block  scope
let num1 = 101,num2 = 201; //Only use let if you can't use const
let num3 = num1 + num2;
console.log(num3)
num1 = 401,num2 = 501; // update
num3 = num1 + num2;
console.log(num3);

// let num1 = 401,num2 = 501; //Syntax error:  re-decalre is not possible
num3 = num1 + num2;
console.log(num3);
document.getElementById("demo2").innerHTML = "Num3: " + num3;
console.log("\n\n");

// way4: declare with const:---can not  update and   re declare -- block  scope
const n1 = 100, n2 = 200; // Declare constants Values, that should not be changed
const n = n1 + n2; // Calculate sum
console.log(n); // Outputs: 300

// n1 = 2000; // Error: Assignment to constant variable
// n2 = 10000; // Error: Assignment to constant variable
document.getElementById("demo3").innerHTML = "n: " + n; // Display the value of n in an HTML element with the id "demo3"

const user = { // Example with a const object
  name: 'Alice',
  age: 30
};
user.age = 31; // Valid: Modify object properties (allowed)
// user = { name: 'Bob', age: 25 }; // Error:  Reassigning the entire object (not allowed)

const numbers = [1, 2, 3]; // Example with a const array
numbers.push(4); // Valid: // Modify array contents (allowed)
// numbers = [5, 6, 7]; // Error:Reassigning the entire array (not allowed)

console.log('Updated user object:', user,'Updated numbers array:', numbers); // Display the updated object and array in the console
document.getElementById("demo3").innerHTML = "n: " + n;
console.log("\n\n");


