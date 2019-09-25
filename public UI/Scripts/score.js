const score = document.getElementById("score");
// const Bar = document.getElementById("progressBar");
const resultBar = document.getElementById("Result-bar");
const naddy = document.getElementById("name");
const perform = document.getElementById("perform");

const mostRecentScore = localStorage.getItem("mostRecentScore");
resultBar.style.width = `${mostRecentScore}%`;
score.innerText = mostRecentScore + "%";

if(mostRecentScore >= 70) {
    perform.innerHTML = "Excellent Performance !!!";
    } 
    else if (mostRecentScore >= 60 && mostRecentScore < 69){
    perform.innerHTML = "Very Good Performance !!!";
    
    }
    else if (mostRecentScore  >= 50 && mostRecentScore  < 59){
        perform.innerHTML = "Good Performance !!!";
        
        }
        else if (mostRecentScore  >= 45 && mostRecentScore  < 49){
           perform.innerHTML = "Fair Performance !!!";
            
          }
          
         else if(mostRecentScore  < 45) {
                 perform.innerHTML = "Poor Performance !!!";
                
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
    
    