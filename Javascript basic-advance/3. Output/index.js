// 1. Writing into an HTML element using innerHTML
document.getElementById("demo_dis1").innerHTML = "Mohammad Al-Amin";
// 2. Log the content of the element with id "demo_dis1" to the console
console.log("Content of 'demo_dis1':", document.getElementById("demo_dis1").innerHTML);
// 3. Display an alert box with a message
window.alert("Danger! This is an alert message.");
// 4. Writing directly into the HTML output using document.write (replaced with innerHTML to avoid disrupting the page)
document.getElementById("demo_dis2").innerHTML = "100 + 200 = " + (100 + 200);
