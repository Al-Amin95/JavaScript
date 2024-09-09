//1. print with console.log(): --> for testing purpose
console.log("Hello JavaScript");// with double qoutes
console.log('Hello JavaScript');// with double qoutes
console.log("Mohammad Al-Amin"); // with double qoutes
console.log('Mohammad Al-Amin'); // with double qoutes

/*
Variables: Variables are Containers for Storing Data: can be declared in 4 ways
1. Automatically,  2. Using var,  3.Using let,  4. Using const 
*/
 

//1. declare Variables with automatically: Global Scope (can be re-decalre and update)
userName ="Mohammad Al-Amin";
userId=101;
userAddress="Dhaka, bangladesh";
userConatact="01745157083";
userDegree="B.Sc in CSE";
userSalary=50000.00;

console.log("userName: ",userName);
console.log("userId: ",userId);
console.log("userAddress: ",userAddress);
console.log("userConatact: ",userConatact);
console.log("userDegree: ",userDegree);
console.log("userSalary: ",userSalary);

userName ="Mohammad Yasin"; // re-declare is possible
console.log("userName: ",userName);
userId=102; //update
console.log("userId: ",userId);


// 2.declare Variables with keyword - var: Global Scope (can be re-decalre and update)
var Number1=100;
var Number2=100.112131323;
console.log("Number1: ",Number1);
console.log("Number2: ",Number2); 

var Number1=200; //re-decalre
var Number2=200.222131323; //re-decalre
console.log("Number1: ",Number1);
console.log("Number2: ",Number2); 

Number1=300; //update
Number2=300.332131323; //update
console.log("Number1: ",Number1);
console.log("Number2: ",Number2); 



// 3.declare Variables with keyword - let: Block Scope (can't be re-decalre but it canbe  update)
let Number3=400;
let Number4=500.552131323;
console.log("Number3: ",Number3);
console.log("Number4: ",Number4); 

// let Number3=400; //cant' be re-derclare
// let Number4=500.552131323; //cant' be re-derclare
// console.log("Number3: ",Number3);
// console.log("Number4: ",Number4.toFixed(2)); 

Number3=600; //update
Number4=700.772131323; //update
console.log("Number3: ",Number3);
console.log("Number4: ",Number4); 


// 4.declare Variables with keyword - const: Block Scope (can't be re-decalre and update)
const Number5=800;
const Number6=900.992131323;
console.log("Number5: ",Number5);
console.log("Number6: ",Number6); 

// const Number5=800;//cant' be re-derclare
// const Number6=900.992131323;//cant' be re-derclare
// console.log("Number5: ",Number5);
// console.log("Number6: ",Number6); 

// Number5=1000; // can't be update
// Number6=1000.1992131323; // can't be update
// console.log("Number5: ",Number5);
// console.log("Number6: ",Number6); 


/*
Variable naming Rules: 
1)	Variable names are case sensitive; “a” & “A” is different.
2)	Only letters (a-z / A-Z), digits (1…), underscore( _ ) and $ is allowed. (not even space)
3)	Reserved words and  digit  cannot be variable names. 
4)	Variable names can’t contain spaces.  
*/

//1. Variable names are case sensitive; “a” & “A” is different.
let fullName="Tahsen Ahmed Al-Amin";
let FullName="Mohammad Imran";
console.log("Full Name: ",fullName );
console.log("Full Name: ",FullName );

//2. Only letters (a-z / A-Z), digits (1…), underscore( _ ) and $ is allowed. (not even space)
let numbeR=1000.12323;
console.log("Number: ", numbeR);
let number200=2000.12323;
console.log("Number: ", number200);
let _number=3000.3123312;
console.log("Number: ", _number);
let $number=4000.3243458947;
console.log("Number: ", $number);


// 3)Reserved words and  digit  cannot be variable names. 
// 12number=5000.3432434; // digit can't be the 1st character
// console.log("Number: ", 12number);
// let new=15000.3432434; // digit can't be the 1st character
// console.log("Number: ", new);

// 4). Variable names can’t contain spaces. 
// let full name="Mohammad Yasin- Imran"; //cant't contain space
// console.log("Name: ", full name );
 

// DataTypes: 1. primitive(7 types), 2. Non-primirtive(objects)

// 1. primitive-data types: string, number, boolean, undefined, null,  Bigint,symbol
let str="Amin";//string
let num1=100.12331; //number
let bool=true; // boolean
let num2; //undefinde
let num3=null; //null--> it's a object, null means absence of a objects
let Bigint=BigInt("123"); // BinInt() ->>1 to n
let symbol=Symbol("AlAmin95");
console.log("str: ", str, typeof(str));
console.log("num1: ",num1, typeof(num1));
console.log("bool: ",bool, typeof(bool));
console.log("num2: ",num2, typeof(num2));
console.log("num3: ",num3, typeof(num3));
console.log("Bigint: ", Bigint, typeof(Bigint));
console.log("symbol:  ", symbol, typeof(symbol));

/* 2. non-primitive data types:  (objects: Arrays, Functions etc.)
 1. Objects: it’s a collection of values that's the key value pairs
*/
const student={ // object
    fullName: "Al-Amin", //key
    age:20,
    cgpa: 3.09,
    isPAss: true
}
console.log(student, typeof(student))
console.log(student["fullName"], student['age']); // access individual keys of student
console.log(student.fullName, student.age, student.cgpa); // access individual keys of student

// update name and age 
student.fullName="Tahsin";
student.age=25;
console.log(student["fullName"], student['age']); // access individual keys of student
