var startBtn = document.querySelector("#startQuizBtn");
var startContent = document.querySelector(".startInfo");
var questionsPage = document.querySelector(".questionsPage");
var onScreenQuestion = document.querySelector("#question");
var onScreenAnswerA = document.querySelector("#answerA");
var onScreenAnswerB = document.querySelector("#answerB");
var onScreenAnswerC = document.querySelector("#answerC");
var onScreenAnswerD = document.querySelector("#answerD");
var validation = document.querySelector("#validate");

class Question {
    // This class will crate a question
    constructor(question, answerA, answerB, answerC, answerD, correctAnswer) {
        this.question = question;
        this.answerA = answerA;
        this.answerB = answerB;
        this.answerC = answerC;
        this.answerD = answerD;
        this.correctAnswer = correctAnswer;
    }

    displayQuestion() {
        // displays the question to the screen
        onScreenQuestion.textContent = this.question;
        onScreenAnswerA.textContent = "A: " + this.answerA;
        onScreenAnswerB.textContent = "B: " + this.answerB;
        onScreenAnswerC.textContent = "C: " + this.answerC;
        onScreenAnswerD.textContent = "D: " + this.answerD;
    }
}

// Question 1
var questionOne = new Question(
    "Commonly used data types DO NOT include?",
    "String",
    "Boolean",
    "Alerts",
    "Number",
    "C: Alerts"
);
// Question 2
var questionTwo = new Question(
    "The condition in an if/else statement is enclosed with ____.",
    "Quotes",
    "Parentheses",
    "Curly Brackets",
    "Square Brackets",
    "B: Parentheses"

);
// Question 3
var questionThree = new Question(
    "Arrays In JavaScript can be used to store?",
    "Numbers and Strings",
    "Other Arrays",
    "Booleans",
    "All of the Above",
    "D: All of the Above"
);
// Question 4
var questionFour = new Question(
    "String values must be enclosed within___ when being assigned to variables?",
    "Commas",
    "Curly Brackets",
    "Quotes",
    "Parentheses",
    "C: Quotes"
);
// Question 5
var questionFive = new Question(
    "A very useful tool used during development and debugging for printing content to debugger is",
    "Console Logs",
    "Terminal/Bash",
    "For Loops",
    "JavaScript",
    "A: Console Logs"
);
function currentQuestion() {
    // checks what the correctAnswer is
    var currentQuestion = ''
    if (onScreenQuestion.textContent == questionOne.question) {
        currentQuestion = questionOne.correctAnswer
    } else if (onScreenQuestion.textContent == questionTwo.question) {
        currentQuestion = questionTwo.correctAnswer
    } else if (onScreenQuestion.textContent == questionThree.question) {
        currentQuestion = questionThree.correctAnswer
    } else if (onScreenQuestion.textContent == questionFour.question) {
        currentQuestion = questionFour.correctAnswer
    } else if (onScreenQuestion.textContent == questionFive.question) {
        currentQuestion = questionFive.correctAnswer
    } else {}
    return currentQuestion
}

function getDisplay() {
    // Checks which question is displayed and displays the next question
    if (onScreenQuestion.textContent == questionOne.question) {
        questionTwo.displayQuestion();
    } else if (onScreenQuestion.textContent == questionTwo.question) {
        questionThree.displayQuestion();
    } else if (onScreenQuestion.textContent == questionThree.question) {
        questionFour.displayQuestion();
    } else if (onScreenQuestion.textContent == questionFour.question) {
        questionFive.displayQuestion();
    } else if (onScreenQuestion.textContent == questionFive.question) {
        console.log("Last page");
    } else {
        questionOne.displayQuestion();
    }
}
// Start Button click
startBtn.addEventListener("click", function (event) {
    // when start button is clicked
    startContent.style.display = "none";
    questionsPage.style.display = "grid";
    getDisplay();
});

// Answer buttons click
onScreenAnswerA.addEventListener("click", function (event) {
    if (currentQuestion() == onScreenAnswerA.textContent) {
        validation.textContent = "Correct!";
    } else {
        validation.textContent = "Wrong!";
    }
    getDisplay()
});
onScreenAnswerB.addEventListener("click", function (event) {
    if (currentQuestion() == onScreenAnswerB.textContent) {
        validation.textContent = "Correct!";
    } else {
        validation.textContent = "Wrong!";
    }
    getDisplay()
});
onScreenAnswerC.addEventListener("click", function (event) {
    if (currentQuestion() == onScreenAnswerC.textContent) {
        validation.textContent = "Correct!";
    } else {
        validation.textContent = "Wrong!";
    }
    getDisplay()
});
onScreenAnswerD.addEventListener("click", function (event) {
    if (currentQuestion() == onScreenAnswerD.textContent) {
        validation.textContent = "Correct!";
    } else {
        validation.textContent = "Wrong!";
    }
    getDisplay()
});