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