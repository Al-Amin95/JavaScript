let n1=10;
// let n2="10";
let n2=20;

console.log("n1: ",n1,"n2: ",n2);
console.log("n1==n2: ", n1==n2);
console.log("n1===n2: ",n1===n2);
console.log("n1!=n2: ",n1!=n2);
console.log("n1!==n2: ",n1!==n2);
console.log("n1>n2: ",n1>n2);
console.log("n1<n2: ",n1<n2);
console.log("n1>=n2: ",n1>=n2);
console.log("n1<=n2: ",n1<=n2);
console.log("\n");



//if(){} ----  else if(){} ----else{}
let a1=10;
let b1=10;
if(a1>b1){
    console.log("a1>b1");
}
else if(b1>a1){
    console.log("a1<b1");
}
else if(b1>a1){
    console.log("a1<b1");
}
else if(b1==a1){
    console.log("a1==b1");
}
console.log("\n");

//Logical Operartotr
let job="No";
let money="No";
let house="No";
let car="no";

if (job=="yes" && money=="yes"){
    console.log("You have job and money, now you can marry");
    
}
else if (job=="yes" || money=="yes" || house=="yes"){
    console.log("You have job, money and house, now you  can marry");
}
else if (job=="yes" || money=="yes" ||house =="yes" || car=="yes"){
    console.log("You have job, money ,house and car, now you can marry");
    
} 
else {
    console.log("You have no job, money ,house and car, now you can't marry");
}
console.log("\n");


let i=0;
while(i<=10){
    if(i<=10){
        console.log(i);
        i++;
        if (i>8) break;
    }
    // console.log(i);
    // i++;
    // if (i>8) break;
}
console.log("\n");

// create multiplication table 
// Create multiplication table
// Create multiplication table for 2

let number = 4;
for (let i = 1; i <= 10; i++) {

    console.log(number, "x", i, "=", number * i);
}

console.log("\n");

let total=600;
console.log(`my total budget is:  ${total}`);
console.log("\n");


// create a function 

// let a,b;
function sum(a,b){ 
    console.log("a: ",a);
    console.log("b: ",b);
    console.log("total: ",a+b);
    console.log("\n");
}
sum(10,20);
sum(13123.343,12321323.3123);

function sun (a,b,c){
    let total=a+b+c;
    console.log("function total: ",total);
    return total;
}
// let sun=function  (a,b,c){
//     let total=a+b+c;
//     console.log("function total: ",total);
//     return total;
// }
let number11=100;
let myTotal=number11+ sun(1,2,3);
console.log("myTotal: ", myTotal);