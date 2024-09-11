// string use Using Quotes
let str1 = "Moahmmad"; // use double qoutes
let str2 = 'al-amin'; // use double qoutes
console.log("str1: ", str1);
console.log("str2: ", str2);
console.log("\n");

// Quotes Inside Quotes
let str3 = "Moahmmad 'Yasin' "; //qoutes inside qoutes
let str4 = " it's Moahmmad Imran "; //qoutes inside qoutes
console.log("str3: ", str3);
console.log("str4: ", str4);
console.log("\n");

//Template Strings
let str5 = `Mohammad Al-Amin,"CSE Graduate", 'Varsity:EWU'`;
console.log("str5: ",str5);
console.log("\n");

// String Length: find the length of a string, use the built-in length property
let str6 = "East West University";
console.log("str6-length: ", str6.length);
console.log("\n");

// Escape Characters
let str7 = "Hello!\nEast West University, Dhaka, Bangladesh"; 
console.log("Newline: ", str7); // Newline: Moves the text after the escape to a new line.
let str8 = "Hello!\tEast West University, Dhaka, Bangladesh"; 
console.log("Tab: ", str8); // Tab: Inserts a horizontal tab (space) between "Hello!" and "East West University".
let str9 = "Hello! \\East West University, \\Dhaka, Bangladesh"; 
console.log("Backslash: ", str9);// Backslash: Displays a backslash character (\\) in the text. 
let str10 = "Hello! East West University, \"Location:\" Dhaka, Bangladesh"; 
console.log("Double quote: ", str10); // Double Quote: Allows the use of double quotes inside a string that is also enclosed by double quotes.
let str11 = "Hello! East West University\rDhaka, Bangladesh"; 
console.log("Carriage return: ", str11);// Carriage Return: Moves the cursor to the start of the line and overwrites the beginning of the string.
let str12 = "Hello! East West University Dhaka\b, Bangladesh"; 
console.log("Backspace: ", str12); // Backspace: Removes the character before the escape sequence (the comma is deleted in this case).

// JavaScript Strings as Objects
let stringObject1 = "Banasre, Dhaka , Bangladesh"; // Using a string literal
console.log("stringObject: ", stringObject1, " Type: ", typeof (stringObject1)); // Logs the string literal and its type
let stringObject2 = new String("Banasre, Dhaka , Bangladesh"); // Using the String constructor to create a String object
console.log("stringObject: ", stringObject2, " Type: ", typeof (stringObject2)); // Logs the String object and its type

let stringObjectComapreType = (stringObject1 == stringObject2); // Comparing the string literal and the String object using loose equality (==)
console.log("stringObjectComapreType: ", stringObjectComapreType); // Logs the result of loose equality comparison
let stringObjectComapreTypeValue = (stringObject1 === stringObject2);// Comparing the string literal and the String object using strict equality (===)
console.log("stringObjectComapreTypeValue: ", stringObjectComapreTypeValue); // Logs the result of strict equality comparison

