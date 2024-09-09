// Declare a number array
let marks = [60, 70, 80, 90, 99];

// Use for-of loop to iterate over the array: directly access value
for (let mark of marks) {
    document.getElementById("demo1").innerHTML += "Marks: " + mark + "<br>";
    console.log("Marks: " + mark);
}