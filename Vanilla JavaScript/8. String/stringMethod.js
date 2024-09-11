// string length 
let string1 = "Mohammad Al-Amin";
let stringLength = string1.length;
console.log("string1-length: ", stringLength);
console.log("\n");

// ==========Extracting String Characters===========

// 1. charAt() method returns the character at a specified index (position) in a string
let string2 = "East West University";
let string2Char = string2.charAt(10);
console.log("string2: ", string2Char);
console.log("\n");

// 2. charCodeAt() method returns the code of the character at a specified index in a string
let string2CharCode = string2.charCodeAt(10);
console.log("string2: ", string2CharCode);
console.log("\n");

// 3. at() method returns the character at a specified index (position) in a string
let string2At = string2.at(10);
console.log("string2: ", string2At);
console.log("\n");

// 4.Using property access [] like in arrays
let string2Array = string2[5];
console.log("string2Array: ",string2Array);
console.log("\n");

// ========================Extracting String Parts========================

let string3 = `Name: Md. Al-Amin, Graduation: EWU, Dept: CSE, Major: Software Enginnering`;

//1. JavaScript String slice()
// 1a. Slice out a portion of a string from position 5 to position 17
let string3Slice = string3.slice(5,17);
console.log("string3Slice form index 5 to 17 is :", string3Slice);
console.log("\n");
// 1b. If you omit the second parameter, the method will slice out the rest of the string
let string3Slice2 = string3.slice(18);
console.log("string3Slice form 17 to rest ot the string :", string3Slice2);
console.log("\n");
// 1c. If a parameter is negative, the position is counted from the end of the string
let string3Slice3 = string3.slice(-20);
console.log("string3Slice slice form  -20 means counted from end of the string:", string3Slice3);
console.log("\n");
// 1d. slices out a portion of a string from position -12 to position -6:
let string3Slice4 = string3.slice(-20,-12);
console.log("string3Slice slice form  -20 to -12 means counted from end of the string:", string3Slice4);
console.log("\n\n");

/*
2. JavaScript String substring()
Negative indices are treated as 0 in substring(). So str.substring(-10) is the same as str.substring(0), which extracts the entire string starting from index 0.
*/
let string4 = `Name: Tahsin, Graduation: EWU, Dept: ECE, Major: Software Enginnering`;
let stringSubstring = string4.substring(5, 12);
let stringSubstring2 = string4.substring(-5); // Negative indices are treated as 0 in substring(). So this will extract from index 0 to the end of the string.
let stringSubstring3= string4.substring(-15, -12);  //// Both negative indices are treated as 0, so this will return an empty string.
console.log("string3Substring from 5 to 12:", stringSubstring);
console.log("string3Substring from 5 to 12:", stringSubstring2);
console.log("string3Substring from 5 to 12:", stringSubstring3);
console.log("\n\n");



/*
3. JavaScript String substr()
 The second argument in substr() is the length, not an index, so negative values for the length don't work. 
*/
let string5 = `Name: Tahsin, Graduation: EWU, Dept: ECE, Major: Software Enginnering`;
let stringSubstr = string5.substr(5, 12); // Extracts 12 characters starting from index 5
let stringSubstr2 = string5.substr(5); // Extracts from index 5 to the end of the string
let stringSubstr4 = string5.substr(-20, -5);
let stringSubstr3 = string5.substr(-5); // Extracts the last 5 characters (since -5 means counting from the end of the string)
/* This is incorrect. The second argument is the length, and negative values for length are invalid.Therefore, this will return an empty string.
*/
console.log("string3Substring from index 5 for 12 characters:", stringSubstr);
console.log("string3Substring from index 5 to end:", stringSubstr2);
console.log("string3Substring with -5 (last 5 characters):", stringSubstr3);
console.log("string3Substring with invalid negative length:", stringSubstr4);
console.log("\n\n");





let string6 = "   Mohammad Yasin , Islamic Scholar   ";
let string7 = "Mohammad Imran , Justice, Supreme-Court";

/*
4. Converting to Upper and Lower Case:
a. A string is converted to upper case with toUpperCase():
b. A string is converted to lower case with toLowerCase():
*/
console.log("string6-UpperCase:", string6.toUpperCase());
console.log("string6-Lowercase:", string6.toLowerCase());
console.log("\n");

/*
5. concat() joins two or more strings: method can be used instead of the plus operator
*/

console.log("Concat: string1 + sting2= ", string6.concat(string7));
console.log("Concat: string1 + sting2 relationship= ", string6 + " They are brother "+string7);
console.log("\n");

/*
6. trim method: 
a. The trim() method removes whitespace from both sides of a string.
b. trimStart() method works like trim(), but removes whitespace only from the start of a string.
c. trimEnd() method works like trim(), but removes whitespace only from the end of a string.
Note: In JavaScript, there is no built-in trim() method that removes whitespace from the middle of a string. 
*/
console.log("string6-trim both side:", string6.trim());
console.log("string6-trimStart:", string6.trimStart());
console.log("string6-trimEnd:", string6.trimEnd());
console.log("\n");


/*
7. repeat(), replace(),recplaceAll() method.
*/
let strin8 = "Full-Stack  JavaScript JavaScript  Developer";
console.log("String8-repeat: ", strin8.repeat(2));
console.log("\n\n");

console.log("String8-original: ", strin8); // Log the original string
console.log("String8-replace: ", strin8.replace("Full-Stack", "Front-End")); // Replace the first occurrence of "Full-Stack" with "Front-End"
console.log("String8-replace: ", strin8.replace(/FULL-STACK/i, "JS")); // Replace "FULL-STACK" (case-insensitive) with "JS" using a regular expression and 'i' flag for case-insensitivity
console.log("String8-replace: ", strin8.replace(/JavaScript/g, "JS")); // Replace all occurrences of "JavaScript" with "JS" using the 'g' flag for global replacement
console.log("\n\n");

// Converting a String to an Array: use split() 
let str1 = "Full-Stack Jvascript JavaScript Developer";
let str2 = "Full-Stack";
let str3 = "Full-Stack Jvascript JavaScript Developer";
let str4 = "Full-Stack, Jvascript, JavaScript, Developer";
let str5 = "Full-Stack | Jvascript | JavaScript | Developer";

let result1 = str1.split(); 
console.log("Separator omitted:", result1);
let result2 = str2.split(""); 
console.log("Separator is an empty string:", result2);
let result3 = str3.split(" "); 
console.log("Separator is a space:", result3);
let result4 = str4.split(","); 
console.log("Separator is a comma:", result4);
let result5 = str5.split("|");
console.log("Separator is a pipe:", result5);