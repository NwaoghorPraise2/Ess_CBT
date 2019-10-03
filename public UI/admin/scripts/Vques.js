const qid = document.getElementById("Qid");
const  question = document.getElementById("question");
const A = document.getElementById("ch1");
const B = document.getElementById("ch2");
const C = document.getElementById("ch3");
const D = document.getElementById("ch4");
const ans = document.getElementById("ans");

let arraydd = 0;
let ress = [];


fetch("http://localhost:4500/questions")
    .then(res => {
        console.log(res);
        return res.json();
        
    })
    .then(loadedQuestions => {
       questions = loadedQuestions.rows;
       console.log(questions);
       console.log(questions[5]);
       ress = questions[arraydd];
       console.log(ress);
        // console.log(res);
        // arraydd ++ ;
qid.innerHTML= ress.id;
question.innerHTML= ress.question;
A.innerHTML= ress.choice1;
B.innerHTML= ress.choice2;
C.innerHTML= ress.choice3;
D.innerHTML= ress.choice4;
ans.innerHTML= ress.answer;

    })
    .catch(error => {
    
    alert(error+" "+"That is the last question");
    
    });
    
    ekj = () => {
ress = questions[arraydd++];
qid.innerHTML= ress.id;
question.innerHTML= ress.question;
A.innerHTML= ress.choice1;
B.innerHTML= ress.choice2;
C.innerHTML= ress.choice3;
D.innerHTML= ress.choice4;
ans.innerHTML= ress.answer;
if (ress === ress.lenght) {
    alert("This is the Last Question");
}
};
    
    ekb = () =>{
        ress = questions[arraydd--];
        qid.innerHTML= ress.id;
        question.innerHTML= ress.question;
        A.innerHTML= ress.choice1;
        B.innerHTML= ress.choice2;
        C.innerHTML= ress.choice3;
        D.innerHTML= ress.choice4;
        ans.innerHTML= ress.answer;
        if (ress === 0) {
        alert("We can't move this way");
        }

    
    };
    
    //work on user exprience....