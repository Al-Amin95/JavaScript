

// way1: declare automatically---can be update and re declare -- global scope
x = 5;
y = 6;
z = x + y;
console.log(z);
x = 10; //update
y = 20;
z = x + y;
console.log(z);
document.getElementById("demo").innerHTML = "Z: " + z;

// way2: declare with var:---can be update and re declare -- global scope
var a = 10; //Only use var if you MUST support old browsers.
var b = 20;
var c = a + b;
console.log(c);
var a = 100; // rer declare variable
var b = 200;
var c = a + b;
console.log(c);
a = 1000; // update value
b = 2000;
c = a + b;
document.getElementById("demo1").innerHTML = "C: " + c;

// way3: declare with let:---can be update and  do not re declare -- block  scope
let num1 = 101; //Only use let if you can't use const
let num2 = 201;
let num3 = num1 + num2;
console.log(num3);
num1 = 401; // update value
num2 = 501;
num3 = num1 + num2;
console.log(num3);

document.getElementById("demo2").innerHTML = "Num3: " + num3;

// way4: declare with const:---can not  update and   re declare -- block  scope
const n1 = 100; //Always use const if the value should not be changed
const n2 = 200;
const n = n1 + n2;
console.log(n);

// n1=2000; // show error on console
// n2=10000; // show error on console

document.getElementById("demo3").innerHTML = "n: " + n;

/* 
Mixed:

1. The two variables price1 and price2 are declared with the const keyword.

2. These are constant values and cannot be changed.

3. The variable total is declared with the let keyword.

4. The value total can be changed.
*/

const price1 = 101.1;
const price2 = 201.2;
let totalPrice = price1 + price2;
console.log(totalPrice);
document.getElementById("demo4").innerHTML =
  "Total Price: " + totalPrice.toFixed(2);

const pi = 3.14;
let persson = "Jhon";
let answer = "Yes I am";
console.log(pi, persson, answer);
document.getElementById("demo5").innerHTML =
  "Pi: " + pi + "</br>" + "Person: " + persson + "</br>" + " answer: " + answer;

let person2 = "John Doe",
  carName = "BMW",
  price = 200; //One Statement, Many Variables
console.log(person2, carName, price);
document.getElementById("demo6").innerHTML ="Person: " +person2 +"</br>" +" Car name: " +carName +"</br>" + "Price:" +price;

let carName2; //Value = undefined
console.log(carName2);

//JavaScript Arithmetic
let xx = 5 + 2 + 3 + 3;
console.log(xx);

let xy = "Amin " + "Yasin"; //strings will be concatenated:
console.log(xy);

/*
1. Names can contain letters, digits, underscores, and dollar signs.
2. Names must begin with a letter.
3. Names can also begin with $ and _ (but we will not use it in this tutorial).
4. Names are case sensitive (y and Y are different variables).
5. Reserved words (like JavaScript keywords) cannot be used as names.
*/

let $x = 1000;
console.log($x);

let _x = 1000;
console.log(_x);

let X = 1000;
console.log(xx);
