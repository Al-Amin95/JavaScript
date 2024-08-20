//Global Scope --- var

var  x = 10;
// Here x is 10

{  
    var x = 2;
    // Here x is 2
    console.log("Inner block: "+x);
}

// Here x is 2
console.log(x);
document.getElementById("var").innerHTML = x;




// Block scope: let 

let  ac = 10;
// Here ac is 10

{  
    let ac = 20;
    // Here ac is 20
    console.log("Inner block: "+ac);
}

// Here ac is 10
console.log(ac);
document.getElementById("let").innerHTML = ac;



//Hoisting

// Variables defined with var are hoisted to the top and can be initialized at any time.
// You can use the variable before it is declared:

// var carName3;
// carName3=undefined;
carName3 = "Volvo";
document.getElementById("var_hoisiting").innerHTML = carName3;
var carName3;


/*
Variables defined with let are also hoisted to the top of the block, but not initialized.

Meaning: Using a let variable before it is declared, then will result in a ReferenceError:

NOTE: MUST BE SHOW A ERROR
*/

// carName4 = "Volvo";
// document.getElementById("let_hoisiting").innerHTML = carName4;
// let carName4;



// Block scope: const
/* 
1. JavaScript const variables must be assigned a value when they are declared
2. Use const when you declare: Array,Object,Function,RegExp


*/
const pii =3.14;
// pi =3.1416; // show error;
// pi=pi+10; // show error;


const  number1 = 10000;
{  
const number1 = 20000;
// Here number1 is 2
console.log("Inner const: "+number1);
}

// Here number1 is 10000
console.log(number1);
document.getElementById('const').innerHTML=number1;



//block scope:

const num = 2;       // Allowed
console.log("outer block num: "+ num);

{
    const num = 3;   // Allowed
    console.log("inner block num: "+ num);
}

{
    const num = 4;   // Allowed
    console.log("inner block num: "+ num);
}


// create array
const arry = ["ab","ac","ad"];
console.log(arry);

arry[0]="aaa";
console.log(arry);


arry.push("audi"); //add element 
console.log(arry);

arry.pop(); //remove element
console.log(arry);
