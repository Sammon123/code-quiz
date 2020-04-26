alert('the quiz is hard');
// When user first accesses the page, they are shown an intro message
//  -in the html we have a div in the intro

// define a quizTimer variable that has no value. We're doing this because
// we want the gameTimer to be scoped globally, but we don't want to assign
// it a value until the quiz starts

// when the #start-quiz button is clicked:
//  - call the startQuiz function
//  - store the quiz timer, set to zero by default
//  - store the current question that is being answered
//  - array of possible answers (lists)
//  - questions (string)
//  - correct answers (number, index of the answer from the array of possible answers)
// Hide the #intro div
// create a setInterval of 75000ms
// update the current count to 75
// every time the interval runs, we need to decrement the current count by 1. re-render the current count
// render the first question
// by using DOM manipulation, create a new element(document.createElement) with the question info, and display it on the screen(appendChild)

// once the game has started, display the first question, with the buttons for the answers

// when a user clicks on one of those questions, determine if it is correct or incorrect, display the next question, and display the status of the answer (correct/incorrect, for a short period of time)

// end condition 
//  - user answers all questions
//      1. function for handling the end of quiz
//      2. stop the interval, so that the timer does not continue
//      3. get our results
//      4. display the results and initials to the user
//      5. save the results to local storage
//          - get any current results, so that we can maintain those results
//          - add the new results to that list if results
//      6. create object that has the current result, number of questions, number of answers and how long it took the user to take the quiz
//      7. resave all of the results with the new array we've added to

//  - time runs out

// get current results
// get the results from local storage, this should be a JSON string of an array
// there are any results
//  - parse the JSON string back into the array
// if there were no results found in local storage, just return an empty array

//  when the game ends, allow the user to enter their initials, and store their score
// calculate our results based on number of questions correct, and amount of time left
//  - generate our results
//  - if the calculated result is less than 0, return the result
//  - return the minimum result
//  - otherwise return calculated score

// reset the quiz vars
// hide the result container
// start the quiz again

// make sure the results list is empty in case were displaying it another time
// get all of the results
// hide the result container
// create a new table element with an id
// create a thread element with all of the headings
// add the tableHead to the table element
// create a new tbody element that all of out datais going to be added to

//  redirect the user to the high scores page, which will display all of their stored high scores
// loop over all of the results
// create a new row element
// create a td for the results, and set it's text
// create a td for questionCorrect and set it's text
// create a td for time, and set it's text
// append all of our tds to the row
// append the row to the table body
// append the table body to the table element
// put the entire table element on the document
// display the results list




