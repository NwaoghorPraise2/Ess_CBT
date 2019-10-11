const UserID = document.getElementById("UserID");
const Fname = document.getElementById("Fname");
const Lname = document.getElementById("Lname");
const Phone = document.getElementById("Pnumber");
const Email = document.getElementById("Email");
const Score = document.getElementById("Score");

let arraydd = 0;
let ress = [];

fetch("http://localhost:4500/user_infor")
    .then(res => {
        return res.json();
    })
    .then(user_infor => {
        users = user_infor.rows;
        ress = users[arraydd];
        UserID.innerHTML = ress.id;
        Fname.innerHTML = ress.firstname;
        Lname.innerHTML = ress.lastname;
        Phone.innerHTML = ress.phonenumber;
        Email.innerHTML = ress.email;
        if (ress.score === null) {
            Score.innerHTML = "No score to display";
        } else {
            Score.innerHTML = ress.score;
        }
    })
    .catch(error => {
        if (error) {
            throw error;
        }
    });

ekj = () => {
    ress = users[arraydd++];
    UserID.innerHTML = ress.id;
    Fname.innerHTML = ress.firstname;
    Lname.innerHTML = ress.lastname;
    Phone.innerHTML = ress.phonenumber;
    Email.innerHTML = ress.email;
    if (ress.score === null) {
        Score.innerHTML = "No score to display";
    } else {
        Score.innerHTML = ress.score;
    }
};

ekb = () => {
    ress = users[arraydd--];
    UserID.innerHTML = ress.id;
    Fname.innerHTML = ress.firstname;
    Lname.innerHTML = ress.lastname;
    Phone.innerHTML = ress.phonenumber;
    Email.innerHTML = ress.email;
    if (ress.score === null) {
        Score.innerHTML = "No score to display";
    } else {
        Score.innerHTML = ress.score;
    }
};

Next = () => {
    const Dscore = document.getElementById("score");
    const Dname = document.getElementById("name");
    Dscore.innerHTML = ress.score;
    Dname.innerHTML = ress.firstname + " " + ress.lastname;
    window.location.assign("result.html");
};
genPage = () => {};