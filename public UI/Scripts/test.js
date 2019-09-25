const question = document.getElementById("question");
const choosen = Array.from(document.getElementsByClassName("choosen"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressbarfull = document.getElementById("progress-bar-full");
const test = document.getElementById("test");
const loader = document.getElementById("loader");
const lastname = document.getElementById("lastname");
const timer = document.getElementById("timers");


let currentQuestion = {};
let acceptingAnswer = false;
let score = 0;
let questionCounter = 0;
let avaialbleQuestions = [];

let questions = [];
const MAX_QUESTIONS = 12;

let sec = 1800;

secpass = () => {
    let min = Math.floor(sec / 60);
    let remSec = sec % 60;

    if (remSec < 10) {
        remSec = "0" + remSec;
    }

    if (min < 10) {
        min = "0" + min;
    }
    timer.innerHTML = min + ":" + remSec + " " + "LEFT";


    if (sec > 0) {
        sec = sec - 1;
    } else {
        clearInterval(countDown);
        timer.innerHTML = "TimeOut!!!!";
        window.location.assign("/score.html");
    }
};

fetch("http://localhost:4500/questions")
    .then(res => {
        return res.json();
    })
    .then(loadedQuestions => {
        questions = loadedQuestions.rows;

        fetch("http://localhost:4500/user_name")
            .then(res => {
                return res.json();
            })
            .then(lastName => {
                let ele = lastName.rows[0];
                lastname.innerText = ele.lastname;
            });
        startTest();
    })
    .catch(err => {
        alert(err);
    });

const CORRECT_SCORE = 10;

startTest = () => {
    questionCounter = 0;
    score = 0;
    avaialbleQuestions = [...questions];
    getNewQuestion();
    test.classList.remove("hidden");
    loader.classList.add("hidden");
    countDown = setInterval(() => {
        secpass();
    }, 1000);
};

getNewQuestion = () => {
    if (questionCounter >= MAX_QUESTIONS) {
        let final = score;
        let p1 = CORRECT_SCORE * MAX_QUESTIONS;
        let p2 = final / p1;
        let p3 = p2 * 100;
        let finalScore = Math.floor(p3);
        localStorage.setItem("mostRecentScore", finalScore);
        test.classList.remove("hidden");
        loader.classList.add("hidden");
        return window.location.assign(`./score.html`);
    }

    questionCounter++;
    progressText.innerText = `Question: ${questionCounter}/${MAX_QUESTIONS}`;
    progressbarfull.style.width = `${(questionCounter / MAX_QUESTIONS) * 100}%`;
    const questionIndex = Math.floor(Math.random() * avaialbleQuestions.length);
    currentQuestion = avaialbleQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choosen.forEach(choice => {
        const number = choice.dataset[`number`];
        choice.innerText = currentQuestion[`choice` + number];
    });
    avaialbleQuestions.splice(questionIndex, 1);
    acceptingAnswer = true;
};

choosen.forEach(choice => {
    choice.addEventListener(`click`, e => {
        if (!acceptingAnswer) return;
        acceptingAnswer = false;
        const selectedChioce = e.target;
        const selectedAnswer = selectedChioce.dataset[`number`];
        let classApply = `incorrect`;
        if (selectedAnswer == currentQuestion.answer) {
            classApply = `correct`;
        }
        if (classApply === "correct") {
            increaseScore(CORRECT_SCORE);
        }

        selectedChioce.parentElement.classList.add(classApply);
        setTimeout(() => {
            selectedChioce.parentElement.classList.remove(classApply);
            getNewQuestion();
        }, 1000);
    });
});

increaseScore = num => {
    score += num;
    scoreText.innerText = score;
};
