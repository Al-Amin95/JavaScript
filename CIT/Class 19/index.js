let number1=2;
let number2=5;

let summation=number1+ number2;
console.log("Summation: ", summation);

let substraction=number1 - number2;
console.log("Substraction: ", substraction);

let multiplication=number1 *  number2;
console.log("Multiplication: ", multiplication);

let division=number1 / number2;
console.log("Division: ", division);

let modulus =number1 % number2;
console.log("Modulus: ", modulus);

number1++; // increment
console.log("Increment Operatior(++): ", number1);
number1--; //decremeent
console.log("Decrement Operatior(--): ", number1);

let exp1= number1 **2;
console.log("Exponentiation - number1: ",exp1);

let exp2= number2 **2;
console.log("Exponentiation - number2: ",exp2);


//Concatenation  of string and number
// let  year1="20";
let  year1="Al-Amin";
let  year2=24;
 
let  conact1=year1+year2; // perform Concatenation only for summation
console.log("Concatenation between string and number: ", conact1);

let conact2= year1-year2; // perform substraction
console.log("Subatraction between string and number: ", conact2);

let conact3= year1*year2; // perform substraction
console.log("Multiplication - between string and number: ", conact3);

let conact4= year1/year2; // perform substraction
console.log("Division - between string and number: ", conact4);

//Find DataTypes

let a = 100;
let s = "al-amin";
let c;
let d=true;
let e=null;
let f=NaN;

console.log(typeof a);
console.log(typeof s);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);

// use of parseInt(), parseFloat(),toFixed()
let num10=100.4534511;
console.log(parseInt(num10));

let num11=100.4534511;
console.log(parseFloat(num10));

console.log(parseFloat(num10.toFixed(2))); 


// Example: 
let tomato="20";
let potato=30;
let oil=180;

let total_cost=tomato+potato+oil; //before  convert sting to int use parstInt()
console.log("Total-Cost: ", total_cost); // without parseInt() or parseFloat()

let total_cost1=parseInt(tomato)+potato+oil; //after convert sting to int use parstInt()
console.log("Total-Cost1 : ", total_cost1); // without parseInt() or parseFloat()

let salary=5000;
let new_cost= salary+ total_cost1;
console.log("Total balance: ", new_cost);
console.log("\n\n");