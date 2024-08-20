// // for loop 
// console.log("1.Yasin");
// console.log("2.Yasin");
// console.log("3.Yasin");
// console.log("4.Yasin");
// console.log("5.Yasin");
// console.log("6.Yasin");
// console.log("7.Yasin");
// console.log("8.Yasin");
// console.log("9.Yasin");
// console.log("10.Yasin");
// console.log("\n\n");

// for (let i=1; i<=100; i++){
//     // console.log(i+". Imran");
//     console.log("Imran");
// }console.log("\n\n");


// //while loop:
// let i = 1;
// while (i <= 10) {
//     // console.log(i + ". Al-Amin");
//     console.log("Al-Amin");
//     i++;
// }console.log("\n\n");


// //do while loop
// let j = 1;
// do {
//     // console.log(j + ". Tahsin");
//     console.log("Tahsen");
//     j++;
// } while (j <= 10);
// console.log("\n\n");


// //calculate sum between 1 to 5--use for loop
// let sum=0;
// for (let i=0;i<=5;i++){
//     sum=sum+i;
// }console.log("Sum: ",sum);
// console.log("\n\n");

// //Infinfinite loop

// // for (let i = 1; i>0 ; i++) {
// //     console.log("Imran");
// // }

// // let i = 1;
// // while (true) {
// //     console.log("Al-Amin");
// // }
// // let j = 1;
// // do {
// //     console.log("Tahsen");
// // } while (true);




// /*
// 4. for-of loop
// a. Ideal for iterating through the values of arrays, strings, and other iterable objects.
// b. Iterates directly over values of iterable objects like arrays or strings.
// c. Advantages: Simpler and more readable than traditional for loops. Eliminates the need for index management.

// d. Syntax
// for (let item of iterable) {
//     // code block
// }
// */
// let fruits = ["apple", "banana", "cherry"];
// let len=0;
// for (let fruit of fruits) { // iterator--> string array
//     console.log(fruit);
//     len++;
// }console.log("Size of string-array: ", len,"\n\n");

// let str="Tahsin Ahemed Al-Amin";
// let size=0;
// for (let i of str ){ //iterator--> character
//     console.log("i: ",i);
//     size++;
// }console.log("Size of string: ", size,"\n\n");


// /*
// 5. for-in loop:  work for object.
// a. Use: Iterates over enumerable properties of an object.
// b. Advantages: Useful for accessing property names and their values in an object.
// syntax:
// for (const key in object) {
//     // code block
// }
// */
// const person = {
//     name: "Alice",
//     age: 25,
//     city: "New York",
//     country: "Bangladesh"
// };
// let ob_size=0;
// for (const key in person) {
//     console.log(key + ": " ,key);
//     ob_size++;
// }console.log("Size of ob_size: ", ob_size,"\n\n");  

// /*


// Problem-1: Print all even or odd numbers from 0 to 100.
// */
// for (let i=0; i<=10; i++){
//     if(i%2==0){
//         console.log("Even number: ", i);
//     }
//     // else{
//         //     console.log("Odd number: ", i);
//         // }
//     }
    



// /*
// Problem-2: Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters the correct value
// */
// let player1 = prompt("Player1: ");
// console.log("Player1: ", player1);
// let chance = prompt("Chance: "); 
// console.log("Chance: ", chance,"\n\n");
// let player2 = prompt("Player2: ");
// console.log("Player2: ", player2);
// while (player1 !== player2 && chance > 0) {
//     console.log("Loss! You entered the number: " + player2 + ". Try Again.");
//     chance--;
//     console.log("Left chance: " + chance,"\n\n");

//     if (chance > 0) {
//         // player2 = prompt("Player2: ");
//         console.log("Player2: ", player2);
//     } else {
//         console.log("No chances left. You lost!");
//         break; // Exit the loop if no chances are left
//     }
// }
// if (player1 === player2) {
//     console.log("Win! You entered the number: " + player2);
// }



