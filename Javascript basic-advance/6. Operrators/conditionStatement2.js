function calculation(score) {
    let grade;
    switch (true) {
        case (score >= 90):
            grade = "A";
            break;
        case (score >= 80):
            grade = "B"; // Corrected the letter case
            break;
        case (score >= 70):
            grade = "C";
            break;
        case (score >= 60):
            grade = "D";
            break;
        case (score <= 59):
            grade = "F";
            break;
        default:
            grade = "Invalid"; // To handle unexpected cases
            break;
    }
    return grade;
}

function calculateGrade() {
    let userInput = document.getElementById("score").value;     // Get the user's input
    let score = Number(userInput);   // Convert the input to a number
    if (isNaN(score) || score < 0 || score > 100) { // Validate the score input
        document.getElementById("result").innerHTML = "Please enter a valid score between 0 and 100.";
        return;
    }
    let grade = calculation(score);    // Calculate the grade
    document.getElementById("result").innerHTML = "Your grade is: " + grade;    // Display the grade
}
