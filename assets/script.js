var startBtn = document.querySelector("#startQuizBtn");
var startContent = document.querySelector(".startInfo");
var questionsPage = document.querySelector(".questionsPage");
var question = document.querySelector("#question");
var answerA = document.querySelector("#answerA");
var answerB = document.querySelector("#answerB");
var answerC = document.querySelector("#answerC");
var answerD = document.querySelector("#answerD");



// Question 1
var questionOne = "Commonly used data types DO NOT include?";
var questionOneAnswers = ["String", "Boolean", "Number", "Alerts"];

// Question 2
var questionTwo = "The condition in an if/else statement is enclosed in enclosed with ____.";
var questionTwoAnswers = ["Quotes", "Curly Brackets", "Parentheses", "Square Brackets"];

// Question 3
var questionThree = "Arrays In JavaScript can be used to store?";
var questionThreeAnswers = ["Numbers and Strings", "Other Arrays", "Booleans", "All of the Above"];

// Question 4
var questionFour = "String values must be enclosed within___ when being assigned to variables?";
var questionFourAnswers = ["Commas", "Curly Brackets", "Quotes", "Parentheses"];

// Question 5
var questionFive = "A very useful tool used during development and debugging for printing content to debugger is";
var questionFiveAnswers = ["JavaScript", "Terminal/Bash", "For Loops", "Console Logs"];

var listOfQuestions = [questionOne, questionTwo, questionThree, questionFour, questionFive];
var listOfQuestions_Order = [];

function getQuestion() {
    // randomly choose a question to display
    for (i = 0; i < listOfQuestions.length; i++) {
        var radques = Math.floor(Math.random() * listOfQuestions.length);
        listOfQuestions_Order.push(listOfQuestions[radques]);
        listOfQuestions.pop();
    }
    question.textContent = listOfQuestions_Order[0];

}

// when start button is clicked
startBtn.addEventListener("click", function (event) {
    startContent.style.display = "none";
    questionsPage.style.display = "grid";
    
    getQuestion();
});