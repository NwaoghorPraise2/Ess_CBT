const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");

const mostRecentScore = localStorage.getItem("mostRecentScore");
const highscore = JSON.parse(localStorage.getItem("highScore")) || [];

const MAX_HIGH_SCORES = 5;
//console.log(highscore);
//console.log(JSON.parse(localStorage.getItem("highScore")));
finalScore.innerText = mostRecentScore;
username.addEventListener("keyup", () => {
    //console.log(username.value);
    saveScoreBtn.disabled = !username.value;
});

saveScore = e => {
    console.log("svae btn clicked");
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    };
    highscore.push(score);
    highscore.sort((a, b) => b.score - a.score);
    highscore.splice(30);
    localStorage.setItem("highscores", JSON.stringify(highscore));
    window.location.assign("/index.html"); //take note of this going back home instaed make it display a printable page..
    //console.log(highscore);
};