var startBtn = document.querySelector("#startQuizBtn");
var startContent = document.querySelector(".startInfo");
var questions = document.querySelector(".questions");

startBtn.addEventListener("click", function(event) {
    startContent.style.display = "none";
    questions.style.display = "grid";
});