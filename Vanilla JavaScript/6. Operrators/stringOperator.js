// Define two string variables for demonstration
let string1 = "Mohammad Al-Amin"; 
let string2 = "Graduate from East West University";

// Concatenation of two strings using the + operator
let concatenated1 = string1 + "   " + string2; // JavaScript ignores multiple spaces between strings
let concatenated2 = string1 + "   Department: CSE"; // Another example of concatenation

// Convert the string to uppercase and lowercase using string methods
let toupper1 = string1.toUpperCase(); // Converts all characters in string1 to uppercase.
let lowercase1 = string1.toLowerCase(); // Converts all characters in string1 to lowercase.

// Use the includes() method to check if a substring exists in string1
let include1 = string1.includes("A"); // Checks if 'Z' is present in string1.
let include2 = string1.includes("A", 6); // Starts the search for 'Z' from index 6 in string1.

// Displaying the length of the strings
document.getElementById("demo1").innerHTML = "Length of string1 is: " + string1.length; // Displays length of string1
document.getElementById("demo2").innerHTML = "Length of string2 is: " + string2.length; // Displays length of string2

// Displaying the concatenated strings and their lengths
document.getElementById("demo3").innerHTML = "After concatenation of string1 and string2: " + concatenated1; // Displays concatenated1
document.getElementById("demo4").innerHTML = "Length after concatenation: " + concatenated1.length; // Displays the length of concatenated1
document.getElementById("demo5").innerHTML = "After second concatenation: " + concatenated2; // Displays concatenated2
document.getElementById("demo6").innerHTML = "Length after second concatenation: " + concatenated2.length; // Displays the length of concatenated2

// Displaying the results of uppercase and lowercase conversions
document.getElementById("demo7").innerHTML = "Uppercase of string1: " + toupper1; // Displays string1 in uppercase
document.getElementById("demo8").innerHTML = "Lowercase of string1: " + lowercase1; // Displays string1 in lowercase

// Displaying the results of the includes() method
document.getElementById("demo9").innerHTML = "Does string1 contain 'Z'? " + include1; // Checks if 'Z' is present in string1
document.getElementById("demo10").innerHTML = "Does string1 contain 'Z' starting from index 6? " + include2; // Checks for 'Z' in string1 starting from index 6

// Logging outputs to the browser console for debugging
console.log("Length of string1: " + string1.length); // Logs the length of string1
console.log("Length of string2: " + string2.length); // Logs the length of string2
console.log("Concatenated result: " + concatenated1); // Logs the result of concatenating string1 and string2
console.log("Uppercase of string1: ", toupper1); // Logs string1 in uppercase
