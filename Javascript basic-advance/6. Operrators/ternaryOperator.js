function myFunction() {
    // Get the value from the input field
    let age = document.getElementById("ageInput").value;
   
    // Use the ternary operator to determine if the user is eligible to vote
    let eligible = (age >= 18) ? "Eligible" : "Not Eligible";
    
    // Display appropriate message based on eligibility
    if (age >= 18) {
        document.getElementById("demo1").innerHTML = eligible + " - You are eligible to vote.";
    } else {
        document.getElementById("demo1").innerHTML = eligible + " - You are not eligible to vote.";
    }
}
