/*
Problem-2: Create a game where you start with any random game number. Ask the user to keep guessing the game number until the user enters the correct value
*/
let player1 = prompt("Player1: ");
console.log("Player1: ", player1);
let chance = prompt("Chance: "); 
console.log("Chance: ", chance,"\n\n");
let player2 = prompt("Player2: ");
console.log("Player2: ", player2);
while (player1 !== player2 && chance > 0) {
    console.log("Loss! You entered the number: " + player2 + ". Try Again.");
    chance--;
    console.log("Left chance: " + chance,"\n\n");

    if (chance > 0) {
        // player2 = prompt("Player2: ");
        console.log("Player2: ", player2);
    } else {
        console.log("No chances left. You lost!");
        break; // Exit the loop if no chances are left
    }
}
if (player1 === player2) {
    console.log("Win! You entered the number: " + player2);
}

