// Declare variables with different data types
let var1 = "Mohmmad Al-Amin"; // String: A sequence of characters (text).
let var2 = 1000.132; // Number: A numeric value (can be an integer or a floating-point number).
let var3 = true; // Boolean: A logical value representing true or false.
let var4 = BigInt(11434432312434); // BigInt: Used for representing large integers beyond the safe limit of number type.
let var5 = Symbol("a unique symbol"); // Symbol: A unique identifier, often used as keys in objects.
let var6 = null; // Null: An intentional absence of value, often set to represent an empty object reference.
let var7; // Undefined: A variable declared but not assigned a value yet, so its value is undefined.

// Display each variable's value and its data type in the HTML
document.getElementById("demo1").innerHTML = "var1 : " + var1 + " , data type is: " + typeof(var1); // Displays the value of var1 and its type (string).
document.getElementById("demo2").innerHTML = "var2 : " + var2 + " , data type is: " + typeof(var2); // Displays the value of var2 and its type (number).
document.getElementById("demo3").innerHTML = "var3 : " + var3 + " , data type is: " + typeof(var3); // Displays the value of var3 and its type (boolean).
document.getElementById("demo4").innerHTML = "var4 : " + var4 + " , data type is: " + typeof(var4); // Displays the value of var4 and its type (bigint).
document.getElementById("demo5").innerHTML = "var5 : " + var5.toString() + " , data type is: " + typeof(var5); // Displays the symbol as a string and its type (symbol).
document.getElementById("demo6").innerHTML = "var6 : " + var6 + " , data type is: " + typeof(var6); // Displays the value of var6 (null) and its type (object due to a known bug in JavaScript).
document.getElementById("demo7").innerHTML = "var7 : " + var7 + " , data type is: " + typeof(var7); // Displays the value of var7 (undefined) and its type (undefined).

// Console log the data type of each variable for debugging purposes
console.log("var1 data type is: ", typeof(var1)); // Logs the type of var1 (string).
console.log("var2 data type is: ", typeof(var2)); // Logs the type of var2 (number).
console.log("var3 data type is: ", typeof(var3)); // Logs the type of var3 (boolean).
console.log("var4 data type is: ", typeof(var4)); // Logs the type of var4 (bigint).
console.log("var5 data type is: ", typeof(var5)); // Logs the type of var5 (symbol).
console.log("var6 data type is: ", typeof(var6)); // Logs the type of var6 (null, but shown as "object" due to a JS quirk).
console.log("var7 data type is: ", typeof(var7)); // Logs the type of var7 (undefined).
