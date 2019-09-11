const highScoreslist = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highscores")) || [];

highScoreslist.innerHTML = highScores
    .map(score => {
        return `<li class="scoreh">${score.name} - ${score.score}</li>`;
    })
    .join("");
// console.log(highScores);