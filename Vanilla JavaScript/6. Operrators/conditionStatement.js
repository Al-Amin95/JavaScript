function calculation(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 85) {
        return "A-";
    } else if (score >= 83) {
        return "B+";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 77) {
        return "B-";
    } else if (score >= 73) {
        return "C+";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

function calculateGrade() {
    // Get the user's input
    let userInput = document.getElementById("score").value;
    
    // Convert the input to a number
    let score = Number(userInput);

    // Ensure that the input is a valid number
    if (isNaN(score) || score < 0 || score > 100) {
        document.getElementById("result").innerHTML = "Please enter a valid score between (0 to 100)";
        return;
    }

    // Calculate the grade
    let grade = calculation(score);

    // Display the grade
    document.getElementById("result").innerHTML = "Your Grade is: " + grade;
}
