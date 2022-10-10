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
    answerB

);
// Question 3
var questionThree = new Question(
    "Arrays In JavaScript can be used to store?",
    "Numbers and Strings",
    "Other Arrays",
    "Booleans",
    "All of the Above",
    answerD
);
// Question 4
var questionFour = new Question(
    "String values must be enclosed within___ when being assigned to variables?",
    "Commas",
    "Curly Brackets",
    "Quotes",
    "Parentheses",
    answerC
);
// Question 5
var questionFive = new Question(
    "A very useful tool used during development and debugging for printing content to debugger is",
    "Console Logs",
    "Terminal/Bash",
    "For Loops",
    "JavaScript",
    answerA
);

function answerOnClick(button, question) {
    // Capters the answer button click and check if it is correct.
    button.addEventListener("click", function (event) {
        if (question.correctAnswer == button.textContent) {
            validation.textContent = "Correct!";
        } else {
            validation.textContent = "Wrong!";
        }
        console.log(question.correctAnswer);
        console.log(button.textContent);
    });
}

function nextQuestion() {
    // after question is answered gos to the next one. 
}

startBtn.addEventListener("click", function (event) {
    // when start button is clicked
    startContent.style.display = "none";
    questionsPage.style.display = "grid";
    questionOne.displayQuestion();
});

//TODO: NextQuestion function
