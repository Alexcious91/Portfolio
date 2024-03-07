// Randomize secretNumber 
let secretNumber = Math.floor(1 + Math.random() * 20);

// Prompt user to guess
let userAnswer;

alert("Welcome to Guessing Game.")
// Main loop
while (userAnswer !== secretNumber) {
    userAnswer = prompt("Please enter the secret number (1-20)"); 

    // If user click cancel, exit the game loop
    if (userAnswer === null) {
        break;
    }

    userAnswer = parseInt(userAnswer) // convert to interger

    if (userAnswer === secretNumber) {
        alert("Correct Guess!");
        break;
    } else if (userAnswer < secretNumber) {
        alert("Incorrect, too low");
    } else if (userAnswer > secretNumber) {
        alert("Incorrect, too high");
    } else {
        alert("Please enter a digit")
    }
}
