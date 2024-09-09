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
    // Get the user's input
    let userInput = document.getElementById("score").value;

    // Convert the input to a number
    let score = Number(userInput);

    // Validate the score input
    if (isNaN(score) || score < 0 || score > 100) {
        document.getElementById("result").innerHTML = "Please enter a valid score between 0 and 100.";
        return;
    }

    // Calculate the grade
    let grade = calculation(score);

    // Display the grade
    document.getElementById("result").innerHTML = "Your grade is: " + grade;
}
