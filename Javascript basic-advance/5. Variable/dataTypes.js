let var1 = "Mohammad Al-Amin";//string: o	Stored as a sequence of characters enclosed in quotes (single, double, or backticks).
let var2 = 'Tahsin Ahmed'; //string: o	Stored as a sequence of characters enclosed in quotes (single, double, or backticks).
let var3 = 100;;// integer number, type: number(Stored as 64-bit floating-point values)
let var4 = 13212312.2434123;// float number, type: number(Stored as 64-bit floating-point values)
let var5 = true;// boolean: true or false,  type: boolean
let var6 = false;// boolean: true or false, type: boolean
let var7; // undefined: 
let var8 = null; // null: intentionally don't assign any value on this variable, type: object(this is known bug of javaScript)


// find primirive data types 
document.getElementById("demo1").innerHTML = var1 + ", type = " + typeof (var1);
document.getElementById("demo2").innerHTML = var2 + ", type = " + typeof (var2);
document.getElementById("demo3").innerHTML = var3 + ", type = " + typeof (var3);
document.getElementById("demo4").innerHTML = var4 + ", type = " + typeof (var4);
document.getElementById("demo5").innerHTML = var5 + ", type = " + typeof (var5);
document.getElementById("demo6").innerHTML = var6 + ", type = " + typeof (var6);
document.getElementById("demo7").innerHTML = var7 + ", type = " + typeof (var7);
document.getElementById("demo8").innerHTML = var8 + ", type(this is known bug of JavaScript) = " + typeof (var8);

console.log(var1 + ", type = " + typeof (var1));
console.log(var2 + ", type = " + typeof (var2));
console.log(var3 + ", type = " + typeof (var3));
console.log(var4 + ", type = " + typeof (var4));
console.log(var5 + ", type = " + typeof (var5));
console.log(var6 + ", type = " + typeof (var6));
console.log(var7 + ", type = " + typeof (var7));
console.log(var8 + ", type = " + typeof (var8));

// find non-primirive data types 
let ob = {
    firstName: "Mohammad",
    lastName: "Imran"
}; // object
document.getElementById("demo9").innerHTML = "Non-primitive data: object= [object Object], Type= " + typeof (ob);
console.log("Non-primitive data: object= ", ob, ", Type= " + typeof (ob));

let ar = ["ab", "ac", "ad"]; // array object
document.getElementById("demo10").innerHTML = "Non-primitive data: array= " + ar + ", Type= " + typeof (ar);
console.log("Non-primitive data: array= " + ar + ", Type= " + typeof (ar));

let date = new Date(); // date object
document.getElementById("demo11").innerHTML = "Non-primitive data: date= " + date + ", Type= " + typeof (date);
console.log("Non-primitive data: date= " + date + ", Type= " + typeof (date));


