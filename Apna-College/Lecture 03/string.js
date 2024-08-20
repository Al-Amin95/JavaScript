//String: it is a reperesent of character used to reperesent text
let str1="Tahsin Ahemd Al-Amin";
console.log("String: ",str1);
console.log("String-length: ",str1.length);
console.log("String-index: ","str-index-0:",str1[0], ",str-index-1:",str1[1],",str-index-2:",str1[2]);
console.log("\n\n");


//String: template literals concatenate  between two string
let product={
    name:"Walton W131",
    price: 123,
    brand: "walton"
};
console.log("name: ", product.name, ", price: ", product.price,", brand: ",product.brand);// without template literals
console.log("name: "+product.name+ ", price: "+product.price+", brand: "+product.brand);// convert into one string ,without template literals
console.log(`name : ${product.name}, brand: ${product.brand}, price:  ${product.price} `); //use template literals, it concatenate  between two string and convert into one string
console.log("\n\n");



//String Operation/Methids or functions:There are build-in functions to manipulate a stirng
 
let str = "Hello, World!"; // string

console.log(str.length); // 1. Length of the string: Returns the length of the string

console.log(str[0]); // 2. Accessing characters by index: Returns the character at index 0 ('H')

console.log(str + " How are you?"); // 3. Concatenation: Concatenates two strings

console.log(str.toUpperCase()); // 4. Uppercase: Converts all characters to uppercase

console.log(str.toLowerCase()); // 5. Lowercase: Converts all characters to lowercase

console.log("   Trim me   ".trim()); // 6. Trim: Removes whitespace from both ends

console.log(str.substring(0, 2)); // 7. Substring: Returns a substring from index 0 to 5 ('Hello')

console.log(str.slice(7, 12)); // 8. Slice: Returns a sliced portion of the string from index 7 to 12 ('World')

console.log(str.replace("World", "Everyone")); // 9. Replace: Replaces a substring with another substring

console.log(str.split(", ")); // 10. Split: Splits the string into an array of substrings based on the delimiter

console.log(str.indexOf("World")); // 11. Index of a substring: Returns the index of the first occurrence of a substring

console.log(str.lastIndexOf("o")); // 12. Last index of a substring: Returns the index of the last occurrence of a substring

console.log(str.includes("World")); // 13. Includes: Checks if the string contains a substring

console.log(str.startsWith("Hello")); // 14. Starts with: Checks if the string starts with a specified substring

console.log(str.endsWith("!")); // 15. Ends with: Checks if the string ends with a specified substring

console.log("Repeat ".repeat(3)); // 16. Repeat: Repeats the string a specified number of times

console.log(str.charAt(4)); // 17. Char at: Returns the character at a specified index

console.log(str.codePointAt(0)); // 18. Code point at: Returns the Unicode code point of the character at a specified index

console.log(str.localeCompare("Hello, World!")); // 19. Locale Compare: Compares two strings in the current locale

console.log("A\u030A".normalize()); // 20. Normalize: Returns the Unicode Normalization Form of the string


//Escape character:
let string1="Computer\tScience";// length= 17-1=16
console.log("Length of string: ", string1.length)// length=16
