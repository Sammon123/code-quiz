// global scope of var
var quizTime = questions.length * 15;
var quizTimer;


// DOM Manipulation
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
// array of questions
var questions = [
    {
        title: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        title: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        title: "Arrays in JavaScript can be used to store ____.",
        choices: [
            "numbers and strings",
            "other arrays",
            "booleans",
            "all of the above"
        ],
        answer: "all of the above"
    },
    {
        title:
            "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parentheses"],
        answer: "quotes"
    },
    {
        title:
            "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["JavaScript", "terminal / bash", "for loops", "console.log"],
        answer: "console.log"
    }
];


// WHEN I click the start button: 
function startQuiz() {
    // hide start screen
    var startScreenEl = document.getElementById('start-screen');
    startScreenEl.setAttribute("class", "hide")
    // un-hide questions section
    questionsEl.removeAttribute("class")
    // start Timer
    quizTimer = setInterval(clockTick, 1000)
    //show starting time
    timerEl.textContent = quizTime;
    displayQuestions();
}



function displayQuestions() {

};
// the user is shown the first question of the quiz

// WHEN I answer a question
//
// determine whether an answer to specific question is correct or incorrect when answer is clicked on
// if question is correct, timer remains untouched. when the user clicks 'nextButton' is shown the next question
// if question is incorrect, deduct some of the time from the timer. when user clicks 'nextButton' the user is presented the next question

// WHEN the game is over the user can:
// 	- view high scores
// 	- take quiz again
// THEN I can save my initials and score
