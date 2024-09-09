// find all odd number between 1 to 100 
let num = 1; // Start at 1
do {
    if (num % 2== 0) { // Check for odd numbers
        document.getElementById("demo1").innerHTML += "Even: " + num + "<br/>";
        console.log("Odd: " + num);
    }
    num++; // Increment the number
} while (num <= 100); // Correct the condition to check up to 100


