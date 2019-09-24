const question = document.getElementById("question");
const choosen = Array.from(document.getElementsByClassName("choosen"));
const progressText = document.getElementById("progressText");
const scoreText = document.getElementById("score");
const progressbarfull = document.getElementById("progress-bar-full");
const test = document.getElementById("test");
const loader = document.getElementById("loader");
const lastname = document.getElementById("lastname");
const timer = document.getElementById("timers");
// console.log(choosen);

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
    // console.log(timer.value);

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
        console.log(res);
        return res.json();
    })
    .then(loadedQuestions => {
        console.log(loadedQuestions.rows);
        questions = loadedQuestions.rows;

        fetch("http://localhost:4500/user_name")
            .then(res => {
                console.log(res);
                return res.json();
            })
            .then(lastName => {
                let ele = lastName.rows[0];
                lastname.innerText = ele.lastname;
            });
        startTest();
    })
    .catch(err => {
        console.log(err);
    });

const CORRECT_SCORE = 10;
//console.log(MAX_QUESTIONS);

startTest = () => {
    questionCounter = 0;
    score = 0;
    avaialbleQuestions = [...questions];
    console.log(avaialbleQuestions);
    getNewQuestion();
    test.classList.remove("hidden");
    loader.classList.add("hidden");

    countDown = setInterval(() => {
        secpass();
    }, 1000);
};

getNewQuestion = () => {
    // if (avaialbleQuestions.lenght === 0 || questionCounter >= MAX_QUESTIONS) {
    // sconsole.log(timer.value);

    // const push = {
    // score:score
    // };
    if (questionCounter >= MAX_QUESTIONS) {
        // const pull = {
        // son:score
        //
        // console.log(pull.son);
        let final = score;
        console.log(final);
        let p1 = CORRECT_SCORE * MAX_QUESTIONS;
        console.log(p1);
        let p2 = final / p1;
        console.log(p2);
        let p3 = p2 * 100;
        // console.log(Math.floor(p3));
        let finalScore = Math.floor(p3);
        // let convert =final / CORRECT_SCORE * MAX_QUESTIONS * 100;
        // console.log(convert);
        // }
        localStorage.setItem("mostRecentScore", finalScore);
        // if()

        // console.log(push.score);
        test.classList.remove("hidden");
        loader.classList.add("hidden");
        return window.location.assign(`./score.html`);
    }

    questionCounter++;
    progressText.innerText = `Question: ${questionCounter}/${MAX_QUESTIONS}`;
    // console.log((questionCounter / MAX_QUESTIONS) * 100);
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
        //console.log(e.target);
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
        //console.log(classApply);
    });
});

increaseScore = num => {
    score += num;
    // console.log(score);
    scoreText.innerText = score;
};

// module.exports={push};
// console.log(timer);

//
// window.onbeforeunload = () => {
//     return "Your work will be lost.";
// };
// startTest();