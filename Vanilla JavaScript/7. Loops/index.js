//print 1 to 10 in consloe without loop
document.getElementById("demo1").innerHTML = "print: " + 1;
document.getElementById("demo2").innerHTML = "print: " + 2;
document.getElementById("demo3").innerHTML = "print: " + 3;
document.getElementById("demo4").innerHTML = "print: " + 4;
document.getElementById("demo5").innerHTML = "print: " + 5;
document.getElementById("demo6").innerHTML = "print: " + 6;
document.getElementById("demo7").innerHTML = "print: " + 7;
document.getElementById("demo8").innerHTML = "print: " + 8;
document.getElementById("demo9").innerHTML = "print: " + 9;
document.getElementById("demo10").innerHTML = "print: " +10;

console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);
console.log("\n\n");

//print 1 to 10 in consloe with loop
for (let i = 0; i <= 10; i++) {
    if (i > 10) {
        break;
    }
    else {
        // Append the new value instead of overwriting
        document.getElementById("demo11").innerHTML += "print: " + i + "<br>";
        console.log(i);
    }
}


