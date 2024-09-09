// First task: print even and odd numbers together as they are encountered
let num1 = 1; // number initialization
while (num1 <= 100) { // Loop from 1 to 100
    if (num1 % 2 == 0) {
        document.getElementById("demo1").innerHTML += "Even: " + num1 + "<br>";
        console.log("Even: " + num1);
    } else {
        document.getElementById("demo1").innerHTML += "Odd: " + num1 + "<br>";
        console.log("Odd: " + num1);
    }
    num1++; // increment the number
}

// Second task: print all odd numbers first, then all even numbers
let num = 1; // number initialization
let oddNumbers = ""; // Store all odd numbers
let evenNumbers = ""; // Store all even numbers

while (num <= 100) { // Loop from 1 to 100
    if (num % 2 == 0) {
        evenNumbers += "Even: " + num + "<br>"; // Add even numbers to the evenNumbers string
        console.log("Even: " + num);
    } else {
        oddNumbers += "Odd: " + num + "<br>"; // Add odd numbers to the oddNumbers string
        console.log("Odd: " + num);
    }
    num++; // increment the number
}

// After the loop, print all odd numbers first, then all even numbers
document.getElementById("demo2").innerHTML += oddNumbers + evenNumbers;
