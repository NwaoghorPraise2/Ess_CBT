const score = document.getElementById("score");
const resultBar = document.getElementById("Result-bar");
const naddy = document.getElementById("name");
const perform = document.getElementById("perform");

const mostRecentScore = localStorage.getItem("mostRecentScore");
resultBar.style.width = `${mostRecentScore}%`;

score.innerText = mostRecentScore + "%";
let data = { element: mostRecentScore};
fetch("/save_score", {
method: "POST",
headers: {
'Content-Type': 'application/json'
},

body: JSON.stringify(data)
})
.then ( res => {
    console.log("Request", res);
}); 


if(mostRecentScore >= 70) {
    perform.innerHTML = "Excellent Performance !!!";
    resultBar.style.backgroundColor = `green`;
    } 
    else if (mostRecentScore >= 60 && mostRecentScore < 69){
        
    perform.innerHTML = "Very Good Performance !!!";
    resultBar.style.backgroundColor = `#3a6914e1`;
    
    
    }
    else if (mostRecentScore  >= 50 && mostRecentScore  < 59){
        perform.innerHTML = "Good Performance !!!";
        resultBar.style.backgroundColor = `#796d03e1`;
        
        }
        else if (mostRecentScore  >= 45 && mostRecentScore  < 49){
           perform.innerHTML = "Fair Performance !!!";
           resultBar.style.backgroundColor = `#993006e1`;
          }
          
         else if(mostRecentScore  < 45) {
                 perform.innerHTML = "Poor Performance !!!";
                 resultBar.style.backgroundColor = `#bd0505e1`;
                
                 }

fetch("http://localhost:4500/exam_score")
    .then(res => {
        console.log(res);
        return res.json();
    })
    .then( name => {
    let namm  = name.rows[0];
    naddy.innerText = namm.firstname + " " + namm.lastname;
    
    });
    
    