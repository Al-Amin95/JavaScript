// Writing into an HTML element using innerHTML
document.getElementById("demo_dis1").innerHTML = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic, reiciendis!";

// Log the content of the element with id "demo_dis1"
console.log("Content of 'demo_dis1':", document.getElementById("demo_dis1").innerHTML);

// Display an alert box with a message
window.alert("Danger! This is an alert message.");

// Use document.write() carefully; it will overwrite the entire document if used after initial page load
// Displaying results in a specific div instead of overwriting the document
document.getElementById("write_output").innerHTML = "100 + 200 = " + (100 + 200);

// Function to print the current page
function print_doc() {
    window.print();
}
document.write("Hello, JavaScript");