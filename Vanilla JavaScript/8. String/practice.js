// find string length and extracting string character
let str = "East-West-University";

console.log("str1: ", str);
console.log("str1-length: ", str.length);
console.log("str1-character at poisionn 0: ", str.at(0));
console.log("str1-character at poisionn 0: ", str.charAt(0));
console.log("str1-character at poisionn 0: ", str.charCodeAt(0));
console.log("str1-property access[0]: ", str[0]);
console.log("\n");

// extracting string parts 
console.log("str1: ",str.slice(0,5));
console.log("str1: ",str.slice(5));
console.log("str1: ", str.slice(-12));
console.log("str1: ", str.slice(-12,-10));
console.log("\n");



console.log("str1: ",str.substring(5,10));
console.log("str1: ", str.substring(5));
/*
Negative indices are treated as 0 in substring(). So str.substring(-10) is the same as str.substring(0), which extracts the entire string starting from index 0.
*/
console.log("str1: ",str.substring(-10));
console.log("str1: ",str.substring(-10,-5));
console.log("\n");


/*
 The second argument in substr() is the length, not an index, so negative values for the length don't work. Using -7 as the length makes no sense, and this will return an empty string.
*/
console.log("str1: ",str.substr(10,15));
console.log("str1: ",str.substr(10));
console.log("str1: ", str.substr(-7));
console.log("str1: ",str.substr(-20,-7));
console.log("\n");




