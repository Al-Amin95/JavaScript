let num1 = 100;
let num2 = 200;

document.getElementById("demo1").innerHTML = "equal to: " + (num1==num2); // check only the value
console.log(num1 == num2);

document.getElementById("demo2").innerHTML = "equal value and type to: " + (num1===num2); // check only the value
console.log(num1 === num2);

document.getElementById("demo3").innerHTML = "check  not equal to: " + (num1!=num2); // check if only not equal  then true, otherwise false
console.log(num1 != num2);

document.getElementById("demo4").innerHTML = "num1 is greater than num2: " + (num1>num2); // check  only num1 is greater than num2
console.log(num1 > num2);

document.getElementById("demo5").innerHTML = "num1 is less than num2: " + (num1<num2); // check  only num1 is less than num2
console.log(num1 < num2);

document.getElementById("demo6").innerHTML = "num1 is greater than or equal num2: " + (num1>=num2); // check  only num1 is greater than or equal num2
console.log(num1 > num2);

document.getElementById("demo7").innerHTML = "num1 is less than or equal num2: " + (num1<=num2); // check  only num1 is less than or equal num2
console.log(num1 < num2);



