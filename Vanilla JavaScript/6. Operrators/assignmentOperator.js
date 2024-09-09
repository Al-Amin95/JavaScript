let number1 = 2; // assignm value into number1 
let number2 = 3;// assignm value into number2

number1 += number2; // addition
document.getElementById("sum").innerHTML = "Summation: "+number1;
console.log("Number: ", number1); // number1=5

number1 -= number2; // substraction
document.getElementById("sub").innerHTML = "Substraction: "+number1;
console.log("Number: ", number1);// number1=5-3=2

number1 *= number2; // multiplication
document.getElementById("mul").innerHTML = "Multiplication: "+number1;
console.log("Number: ",number1);// number1=2*3=6

number1 /= number2; // division
document.getElementById("div").innerHTML = "Division: "+number1;
console.log("Number: ",number1);// number1=6/3=2

number1 %= number2; // remainder
document.getElementById("rem").innerHTML = "Remainder: "+number1;
console.log("Number: ",number1);// number1=2%2=2

number1 **= number2; // exponention(power)
document.getElementById("exp").innerHTML = "Remainder: "+number1;
console.log("Number: ",number1);// number1=2%2=2