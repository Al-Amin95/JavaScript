/* Operators and Conditional Statements
1. Arithmatic Operator: (+,-,*,/,%,**)
2. Assignment Operator: (=,+=,-+, *=,/=, %=, **=)
a. summation(+),Substraction (-), Multiplication (*), Division(/), Modulus(%), Exponentiation(**), 
b. Unary Operator: Increment(++), Decrement(--)
*/

// a. summation(+),Substraction (-), Multiplication (*), Division(/), Modulus(%), Exponentiation(**), 
let a=5,b=2; 
let sum=a+b;
let sub=a-b;
let mul=a*b;
let div=a/b;
let rem=a%b;
let exp=a**b;

console.log("a = ",a," b=",b);
console.log("a + b = ",a,"+",b,"=",sum);
console.log("a - b = ",a,"-",b,"=",sub);
console.log("a * b = ",a,"*",b,"=",mul);
console.log("a / b = ",a,"/",b,"=",div);
console.log("a % b = ",a,"%",b,"=",rem);
console.log("a ** b = ",a,"**",b,"=",exp);

// b. Unary Operator 
console.log("\n\n a= ",a); // first done increment then print

console.log("Pre-Increment: ",++a); // first done increment then print
console.log("Post-Increment: ",a++); // first print then  done increment
console.log("Post-Increment: ",a); // first print then  done increment

console.log("\nPre-Decrement: ",--a); // first done decrement then print
console.log("Post-Decrement: ",a--); // first print then  done  decrement 
console.log("Post-Decrement: ",a); // first print then  done decrement

// 2. Assignment Operator: (=,+=,-+, *=,/=, %=, **=)
let num1=5; // assign the value to variable:  num1=10, use the ooperator: =
num1+=4; //
console.log("Summation: ", num1);
num1-=2;
console.log("Subtraction: ", num1);
num1*=4;
console.log("Multiplication: ", num1);

let num2=6
num2/=3;
console.log("Division: ", num2);
let num3=7;
num3%=2;
console.log("Remainder: ", num3);

num1=5; //update
num1**=2;
console.log("Exponential: ", num1);


/*
3. Comparison Operator: it compares between two values.
a. Equal to (==)check only value, Equal to & type (===) check value and data types, Not equal to (! =), Not equal to &type (! ==), greater than (>), Less than(<), Greater than or equal(>=), Less than or equal(<=)
*/
let number10=5;
let number11="5";
console.log("\n\nnumber10:",number10," number11:",number11, number10==number11);// true--> check only value
console.log("number10:",number10," number11:",number11, number10!=number11);// false--> check only value

let number12=5;
let number13= "5";
console.log("\n\nnumber12:",number12," number13:",number12, number12===number13);// true--> check value and data types
console.log("number12:",number12," number13:",number12, number12 !==number13);// false--> check value and data types

console.log("\n\nnumber12:",number12," number13:",number12, number12 >number13);// false--> check value
console.log("number12:",number12," number13:",number12, number12 >=number13);// true--> check value
console.log("number12:",number12," number13:",number12, number12 <number13);// false--> check value
console.log("number12:",number12," number13:",number12, number12 <=number13);//  true--> check value

/*
4. Logical Operators: 
a. logical AND(&&):
a. logical OR(||):
a. logical NOT(!):
*/
let number14=5;
let number15="5";
let number16=10;

console.log("\n\nnumber14: ",number14," number15: ",number15, number14==number15 && number14+number15>=number16); //true-->check only value
console.log("number14: ",number14," number15: ",number15, number14==number15 && number14+number15>number16); //false-->check only value
console.log("number14: ",number14," number15: ",number15, number14==number15 || number14+number15>=number16); //true-->check only value
console.log("number14: ",number14," number15: ",number15, !(number14==number15)); //false-->check only value
console.log("number14: ",number14," number15: ",number15, !(number14!=number15),"\n\n"); //true-->check only value

/*
5. Ternary Operator: 
Syntax: condition? True output: false output
*/
let number=120;
let result= (number>=100)?"Number is greater than or equal 100: "+number: "Number is less than  or equal 100: "+number;
console.log("Result: ",result,"\n\n")

/*
Conditional Statements: It’s controlled the flow of code based on conditions.
1.	if: Executes a block of code if the specified condition is true.
2.	else: Executes a block of code if the same condition is false.
3.	else if: Tests a new condition if the first condition is false.
4.	switch: Allows you to specify multiple alternative blocks of code to be executed based on different conditions.
Note: 
1. if can run on its own because it checks a condition and executes code if the condition is true.
3. else and else if cannot run without an if because they depend on the if condition to determine what to do if the if condition is false.
*/
let number17 = 5;
let number18 = "4";
let number19 = 3;

if (number17 === number19) {
    console.log("number17 is equal to number19.");
} else if (number17 == number18) {
    console.log("number17 is equal to number18, but their types are different.");
} else {
    console.log("number17 is not equal to number18 or number19.");
}

