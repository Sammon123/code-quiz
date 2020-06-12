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
// global scope of var
var currentQuestionIndex = 0;
var quizTime = questions.length * 15;
var quizTimer;


// DOM Manipulation
var questionsEl = document.getElementById("questions");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var startBtn = document.getElementById("start");
var feedbackEl = document.getElementById('feedback');
var nextBtn = document.getElementById('next-button');
var initialsEl = document.getElementById('initials');
var submitBtn = document.getElementById('submit');




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
    console.log('success');

}



function displayQuestions() {
    // get current question object from the array
    var currentQuestion = questions[currentQuestionIndex];
    // update title with the current question
    var titleEl = document.getElementById('question-title');
    titleEl.textContent = currentQuestion.title;
    // clear out any old questions
    choicesEl.innerHTML = "";
    //loop over choices
    currentQuestion.choices.forEach(function (choice, i) {
        var choiceNode = document.createElement('button');
        choiceNode.setAttribute('class', 'choice');
        choiceNode.setAttribute('value', choice);
        choiceNode.textContent = i + 1 + '. ' + choice;
        // attach click event listener to each choice
        choiceNode.onclick = questionClick;
        // display on the page 
        choicesEl.appendChild(choiceNode);
        console.log('success');

    })
};

function questionClick() {
    // check if the user guessed wrong
    if (this.value !== questions[currentQuestionIndex].answer) {
        // penalize time
        quizTime -= 15;

        if (quizTime < 0) {
            quizTime = 0;
        }
        //display new time on the page
        timerEl.textContent = quizTime;




    }
    console.log('success');

    // flash right/wrong feedback on the page for half a second
    feedbackEl.setAttribute('class', 'feedback');
    setTimeout(function () {
        feedbackEl.setAttribute('class', 'feedback hide');
    }, 1000);
    // move to the next question
    currentQuestionIndex++;
    // check if we've run out of questions
    if (currentQuestionIndex === questions.length) {
        quizEnd();
    } else {
        displayQuestions();
    }

}
function quizEnd() {
    // stop timer
    clearInterval(quizTimer);
    // show end screen 
    var endScreenEl = document.getElementById('end-screen');
    endScreenEl.removeAttribute('class');
    // show final score
    var finalScoreEl = document.getElementById('final-score');
    finalScoreEl.textContent = quizTime;
    // hide questions section
    questionsEl.setAttribute('class', 'hide');
}
function clockTick() {
    // update time
    quizTime--;
    timerEl.textContent = quizTime;
    // check if the user ran out of time
    if (quizTime <= 0) {
        quizEnd();
    }
}

function saveHighScore() {
    // get value of input box
    var initials = initialsEl.value.trim();
    // make sure value wasn't empty
    if (initials !== "") {
        // get saved scores from local storage, or if not any, set to an empty array
        var highscores = JSON.parse(window.localStorage.getItem('highscores')) || [];
        //format new score object for current user
        var newScore = {
            score: quizTime,
            initials: initials
        };
        // save to local storage 
        highscores.push(newScore);
        window.localStorage.setItem('highscores', JSON.stringify(highscores));
        // redirect to next page
        window.location.href = 'highscores.html';
    }
}

function checkForEnter(event) {
    if (event.key === 'Enter') {
        saveHighScore();
    }
}

// user clicks button to submit initials
submitBtn.onclick = saveHighScore;
//user clicks button to start the quiz
startBtn.onclick = startQuiz;

initialsEl.onkeyup = checkForEnter;


