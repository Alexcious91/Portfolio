"use strict";
let words = ["javascript", "monkey", "amazing", "pancake"];
let word = pickWord();
let answerArray = [];
setupAnswerArray();

let remainingLetters = word.length;
let guess;
let lives = 3;
 
alert("Welcome to the HANGMAN game")

while (remainingLetters > 0 && lives > 0) {
    showPlayerProgress();
    guess = getGuess();

    if (guess === null || guess === "quit") {
        break;
    } else if (guess.length !== 1) {
        alert("Please enter a single letter.");
    } else {
        // Update game state and subract remaining letters
        let correctGuesses = updateGameState();
        remainingLetters -= correctGuesses;

    }
}

showAnswerAndCongratulatePlayer();


// Functions Start
function pickWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function setupAnswerArray() {
    for (let i = 0; i < word.length; i++) {
        answerArray[i] = "_";
    }

    return answerArray;
}

function showPlayerProgress() {
    alert(answerArray.join(" ") + " - lives left: " + lives);
}

function getGuess() {
    return guess = prompt("Guess the word or type \"Quit\" to exit");
}

function updateGameState() {
    let correctGuesses = 0;

    // Iterate through each word[index] to check if guess letter is in the word
    for (let i = 0; i < word.length; i++) {
        if (guess === word[i]) {
            if (answerArray[i] !== "_") {
                alert("You've already guessed this letter " + guess);
                break;
            } else {
                answerArray[i] = guess;
                correctGuesses++;
            }
        } 
    }
    if (correctGuesses === 0) {
        lives--;
    }

    return correctGuesses;
}

function showAnswerAndCongratulatePlayer() {
    if (guess === null || guess === 'quit') {
        alert("Sorry to see go :(\nThe word was: " + word)
    } else if (remainingLetters === 0) {
        alert("Congratulations! The word is: " + word);
    } else {
        alert("You've ran out of lives. The word was: " + word);
    }
}


// function that doesn't return something
// function greetPerson(firstName) {
//     console.log(`Hello, ${firstName}`);
// }

// // function that return something
// function subractNumber(num1, num2) {
//     return num1 - num2;
// }

// let newMethod = subractNumber(5, 5);
// console.log(newMethod);

// greetPerson("John");

