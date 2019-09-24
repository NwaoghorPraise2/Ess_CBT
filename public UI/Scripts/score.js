const score = document.getElementById("score");

const mostRecentScore = localStorage.getItem("mostRecentScore");
score.innerText = mostRecentScore;