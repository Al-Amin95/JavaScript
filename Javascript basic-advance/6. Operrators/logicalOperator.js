// Initializing variables
let x = 200;
let y = 200;
let a = 10;
let b = 10;

// Logical AND: true if both x and y are true
let AND = x && y; // Both are non-zero (truthy), so result will be 200

// Logical OR: true if either x or y is true
let OR = x || y; // Both are truthy, so result will be 200

// Logical NOT: inverts the result
let NOT = !(x == b); // x is 200 and b is 10, so x == b is false. NOT false = true

// Combination 1: AND with NOT operator
let combination1 = ((a == b) && !(a === null)); // a == b is true, and a is not null, so true && true = true

// Combination 2: OR with NOT operator
let combination2 = ((a === b) || !(b === null)); // a === b is true, and !(b === null) is true, so true || true = true

// Combination 3: Double equality and NOT operator
let combination3 = ((a == b) == !(a === null)); // a == b is true, and !(a === null) is true, so true == true = true

// Logging results to console
console.log("AND: ", AND); // Logs: 200
console.log("OR: ", OR);   // Logs: 200
console.log("NOT: ", NOT); // Logs: true
console.log("Combination 1: ", combination1); // Logs: true
console.log("Combination 2: ", combination2); // Logs: true
console.log("Combination 3: ", combination3); // Logs: true

// Displaying results in the HTML
document.getElementById("AND").innerHTML = "AND: " + AND;
document.getElementById("OR").innerHTML = "OR: " + OR;
document.getElementById("NOT").innerHTML = "NOT: " + NOT;

document.getElementById("combination1").innerHTML = "Combination 1: " + combination1;
document.getElementById("combination2").innerHTML = "Combination 2: " + combination2;
document.getElementById("combination3").innerHTML = "Combination 3: " + combination3;
