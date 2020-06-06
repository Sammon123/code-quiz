var quizTime = 0;
// GIVEN I am taking a code quiz:
// upon loading the document, the user is going to see the instructions to the quiz
// these instructions are part of the html. we'll wrap all of the instructions
// in a div , with an class of .container



// WHEN I click the start button: 
function startQuiz() {
    // hide intro div and start button
    startTimer();
    displayQuestions();
    $(".container").hide();
}
$(".start-button").on("click", startQuiz);
// start timer decrementing from 75s
function startTimer() {
    // store the current time in a var called quizTime. the default is 75
    quizTime = 75;
    // use setInterval set to 1sec and assign it to a var
    quizTimer = setInterval(function () {
        quizTime--;
        console.log(quizTime);

    }, 1000);
};

function displayQuestions() { };
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
