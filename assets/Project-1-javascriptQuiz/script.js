"use strict";

alert("Welcome to JAVASCRIPT QUIZ")

const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Paris", "Madrid", "Rome"],
        correctAnswer: "Paris",
    },
    {
        question: "Which programming language is this quiz written in?",
        options: ["Java", "Python", "JavaScript", "C++"],
        correctAnswer: "JavaScript",
    },
    {
        question: "Node.js is a ...?",
        options: ["Framework", "Language", "Runtime Enviroment"],
        correctAnswer: "Runtime Enviroment"
    }
];

let currentQuestion = 0; // Used as index
let score = 0;

// main funccction
function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("options-container");
    const currentQuizData = quizData[currentQuestion]; // Get current question

    questionElement.innerText = currentQuizData.question;
    optionsContainer.innerHTML = ""; // Show only current answers

    // Dynamically create options buttons
    currentQuizData.options.forEach((option) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });
}

// function to check answer
function checkAnswer(selectedOption) {
    const currentQuizData = quizData[currentQuestion];
    if (selectedOption === currentQuizData.correctAnswer) {
        score++; // increment score if answer is correct
    }

    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        alert(`Quiz completed! Your score is ${score}/${quizData.length}`);
    }
}

function nextQuestion() {
    if (currentQuestion < quizData.length - 1) {
        currentQuestion++;
        loadQuestion();
    } else {
        alert("End of quiz. Please start again.");
    }
}

// Start quiz again || Reset everything
function refreshQuiz() {
    currentQuestion = 0;
    score = 0
    loadQuestion();
}

// Invoke main function
loadQuestion();
