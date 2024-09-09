// When adding a number and a string, JavaScript will treat the number as a string.
let var1 = "Tahsin" + 95;
document.getElementById("demo1").innerHTML = "After concatetion var1=  " + var1 + ",   Type = " + typeof (var1);
console.log("After concatetion var1= "+var1+", Type = " + typeof (var1));

// JavaScript Types are Dynamic
let var2; //type  is undefinde
document.getElementById("demo2").innerHTML = "var2=  " + var2 + ",   Type = " + typeof (var2);
console.log("\n\nvar2-type: ", typeof (var2));

var2 = "Mohammad Al-Amin";// type is string;
document.getElementById("demo3").innerHTML = "var2=  " + var2 + ",   Type = " + typeof (var2);
console.log("var2-type: ", typeof (var2));

var2 = 500; //type is number
document.getElementById("demo4").innerHTML = "var2=  " + var2 + ",   Type = " + typeof (var2);
console.log("var2-type: ", typeof (var2));

// Exponential Notation
// Javascript numbers are always one type: double (64-bit floating point).  
let var3 = 125e5;
let var4 = 125e-5;
document.getElementById("demo5").innerHTML = " Exponential Notation of 125e5 =  " + var3 + ", Type: " + typeof (var3);
document.getElementById("demo6").innerHTML = " Exponential Notation of 125e5 =  " + var4 + ", Type: " + typeof (var4);
console.log("\n\nExponential Notation of 125e5 =  " + var3 + ", Type: " + typeof (var3));
console.log("Exponential Notation of 125e5 =  " + var4 + ", Type: " + typeof (var4));

// JavaScript Strings 
let var5 = "Mohammad Imran"; // use double qoutattion
let var6 = 'Mohammad Imran'; // use single qoutattion
document.getElementById("demo7").innerHTML = "String with double qooutation: " + var5 + ", Type: " + typeof (var5);
document.getElementById("demo8").innerHTML = "String with single qooutation: " + var6 + ", Type: " + typeof (var6);
console.log("String with double qooutation: " + var5 + ", Type: " + typeof (var5));
console.log("String with single qooutation: " + var6 + ", Type: " + typeof (var6));

// JavaScript Numbers 
let var7 = 2000; // with decimal
let var8 = 100.123123; // without decimal

document.getElementById("demo9").innerHTML = "Number var7: " + var7 + ", type = " + typeof (var7);
document.getElementById("demo10").innerHTML = "Number var8: " + var8 + ", type = " + typeof (var8);
console.log("\n\nNumber var7: " + var7 + ", type = " + typeof (var7));
console.log("Number var8: " + var8 + ", type = " + typeof (var8));


//JavaScript BigInt : range= -(2^53 - 1) to 2^53 - 1
let var9 = BigInt("12124334343243243"); // Using a string for better precision
let var10 = 12124334343243243n;

document.getElementById("demo11").innerHTML = "BinInt- var9: " + var9 + ", type = " + typeof (var9);
document.getElementById("demo12").innerHTML = "BinInt- var10: " + var10 + ", type = " + typeof (var10);
console.log("\n\nBinInt- var9: " + var9 + ", type = " + typeof (var9));
console.log("BinInt- var9: " + var9 + ", type = " + typeof (var10));

// JavaScript Booleans : return true/false 
let var11 = 50;
let var12 = 50;
let var13 = (var11 == var12);
let var14 = (var11 === var12);
document.getElementById("demo13").innerHTML = "Boolean- var14: " + var13 + ", Type: " + typeof (var13);
document.getElementById("demo14").innerHTML = "Boolean- var15: " + var14 + ", Type: " + typeof (var14);
console.log("\n\nBoolean- var14: " + var13 + ", Type: " + typeof (var13));
console.log("Boolean- var14: " + var14 + ", Type: " + typeof (var14)); 

// JavaScript Arrays
let ar1 = [100, 200, 300];
let ar2 = ['asd', 'adsa', 'adsds'];
document.getElementById('demo15').innerHTML = "Arrays: " + ar1 + ", Type: " + typeof (ar1);
document.getElementById('demo16').innerHTML = "Arrays: " + ar2 + ", Type: " + typeof (ar2);
console.log("\n\nArrays: " + ar1 + ", Type: " + typeof (ar1));
console.log("Arrays: " + ar2 + ", Type: " + typeof (ar2));

//JavaScript Objects
let obj = {
    fullName: "Mohammad AL-Amin",
    dept: "CSE",
    studentId: "2019-1-65-003",
}
document.getElementById('demo17').innerHTML = "Name: " + obj .fullName+", Dept: "+obj.dept+", student ID:  "+obj.studentId+ ", Type: " + typeof (obj);
console.log("\n\nName: " + obj.fullName + ", Dept: " + obj.dept + ", student ID:  " + obj.studentId + ", Type: " + typeof (obj));

// Empty Values 
let var15 = "";
document.getElementById("demo18").innerHTML = "var15: " + var15 + ", type=" + typeof (var15);
console.log("\n\nvar15: " + var15 + ", type=" + typeof (var15));