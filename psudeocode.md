# when the user first accesses the page, they are shown an intro message

- in the html we could have a div with the intro

# user can click on the start button, which will start the game timer

- variable to store the current count, set to zero by default
- variable to store the current question they are answering
- variable to store the array of questions
- array possible answers (list)
- question (string)
- correct answer (number, index of the answer from the array of possible answers)

  ```javascript
  var questions = [
  {
  question: "commonly used data types DO NOT include",
  answers: ["strings", "booleans", "alerts", "numbers"]
  correctAnswer : 2

  },
  {question: "the condition in an if / else statement is enclosed within ____",
  answers: ["strings", "booleans", "alerts", "numbers"]
  correctAnswer : 2
  }

  ];
  ```

* when the user clicks on start:
* hide the intro div
* create a setInterval of 75000 ms
* update the current count to 75
* every time the interval runs, we need to decrement the current count by 1. re-render the current count
* render the first question
* using DOM manipulation, create a new element (document.createElement) with the question info, and display it on the screen(appendChild)

# once the game has started, display the first question, with buttons for the answers

# when a user clicks on one of those questions, determine if it is correct or incorrect, display the next question, and display the status of their answer ( correct/incorrect, for a short period of time)

# end condition

- user answers all questions
- time runs out

# when the game ends, allow the user to enter their initials, and store their score

# redirect the user to the high scores page, which will display all of their stored high scores
