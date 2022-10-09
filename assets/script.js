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
var questionTwo = "The condition in an if/else statement is enclosed with ____.";
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
        var randques = Math.floor(Math.random() * listOfQuestions.length);
        listOfQuestions_Order.push(listOfQuestions[randques]);
        listOfQuestions.pop();
    }
    if (listOfQuestions_Order[randques] === questionOne) {
        randAnswers(questionOneAnswers);
    } else if (listOfQuestions_Order[randques] === questionTwo) {
        randAnswers(questionTwoAnswers);
    } else if (listOfQuestions_Order[randques] === questionThree) {
        randAnswers(questionThreeAnswers);
    } else if (listOfQuestions_Order[randques] === questionFour) {
        randAnswers(questionFourAnswers);
    } else if (listOfQuestions_Order[randques] === questionFive) {
        randAnswers(questionFiveAnswers);
    }

    question.textContent = listOfQuestions_Order[0];
}

function randAnswers(answer_list) {
    // Gets the question answers
    answerA.textContent = answer_list[0];
    answerB.textContent = answer_list[1];
    answerC.textContent = answer_list[2];
    answerD.textContent = answer_list[3];
}

startBtn.addEventListener("click", function(event) {
    // when start button is clicked
    startContent.style.display = "none";
    questionsPage.style.display = "grid";
    getQuestion();
});

//TODO: Make the awsers apper with the proper question 