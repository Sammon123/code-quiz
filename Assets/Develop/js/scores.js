function printHighScores() {
    // either get scores from local storage or set to an empty array 
    var highscores = JSON.parse(window.localStorage.getItem('highscores')) || [];
    // sort high scores by score property in descending order
    highscores.sort(function (a, b) {
        return b.score - a.score;
    })

    highscores.forEach(function (score) {
        // create li tag for each high score
        var liTag = document.createElement('li');
        liTag.textContent = score.initials + ' - ' + score.score;
        // display on the page
        var olEl = document.getElementById('highscores');
        olEl.appendChild(liTag);
    })
}

printHighScores();
