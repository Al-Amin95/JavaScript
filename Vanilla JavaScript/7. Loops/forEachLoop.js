let marks = [60, 70, 80, 90, 99];

marks.forEach(function (mark) {
    document.getElementById("demo1").innerHTML += "Marks: " + mark + "</br>";
    console.log("Marks: " + mark + "\n");
});