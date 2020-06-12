# Code Quiz

### Description

<p>As you proceed in your career as a web developer, you will probably be
asked to complete a coding assessment, which is typically a combination of multiple-choice questions and interactive challenges.
Build a timed code quiz with multiple-choice questions. This app will run in the browser and feature dynamically updated HTML and CSS powered by your JavaScript code. It will also feature a clean and polished user interface and be responsive, ensuring that it adapts to multiple screen sizes</p

### Code Sample

```
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
```

## App Demostration

<iframe src="https://drive.google.com/file/d/1LeaviUC3XG3BWylxEnLAKggh_tDlOqdp/preview" width="640" height="480"></iframe>

### Developer

##### Peter Sammon
