// Define an object with some properties or keys(i)
let perosn = {
    firstName: "Mohammad",
    lastName: "AL-Amin",
    age: 29,
    occupation: "Software Enginner",
};
// Use the for-in loop to iterate over the properties (keys=i) of the object
for (let i in perosn) {
    document.getElementById("demo1").innerHTML += i + ": " + perosn[i] + "</br>";
    console.log(i + ": " + perosn[i] + "\n");
}

