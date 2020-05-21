// When user first accesses the page, they are shown an intro message
// a seperate link to the high scores page
//  -in the html we have a div in the intro
// 	- set the questions and it's answers to an array
// 	- timer is set to 75s
// 	- hide next button
// when the user clicks start:
var startButton = document.getElementById('start-btn');
// when clicked on, run function, startQuiz
startButton.addEventListener('click', startQuiz);

function startQuiz() {
	console.log('started');
	// 	- the starting div gets hidden
	$('#question-container').hide();
	// 	- timer starts on first question
	// 		- timer is getting decrement by one second
	// 		- deduct x amount of time when question is answered wrong
	// 		- if correct do nothing
	// 	- append questions with it's corresponding multiple choices
	// loop through the array of the questions
	// when the next button is clicked on the next item in the array is shown
	// when the entire array is ran through completely, the quiz is over
	// 	- when quiz is over:
	// 		- hide questions
	// 		- a form input to type initials is shown
	// 		- when initials is typed in, click submit
	// 		- when submit is clicked on got to highscores page
	// and the values are set inside of local storage
	// 		- when 'go back' is clicked go back to the starting div and are able to begin the quiz again

	// list of initials(from local storage) and their scores are displayed  onto the high scores page
	// clear high scores button
	// 	- when clear high scores is clicked on, clear values that were gotten from local storage
}
