const UserID = document.getElementById("UserID");
const Fname = document.getElementById("Fname");
const Lname = document.getElementById("Lname");
const Phone = document.getElementById("Pnumber");
const Email = document.getElementById("Email");
const score = document.getElementById("Score");
const ans = document.getElementById("ans");
const Score = document.getElementById("score");
const name = document.getElementById("name");

let arraydd = 0;
let ress ;


fetch("http://localhost:4500/user_infor")
    .then(res => {
        console.log(res);
        return res.json();
        
    })
    .then(user_infor => {
      let users = user_infor.rows;
       console.log(users);
       console.log(users[5]);
       ress = users[arraydd];
       console.log(ress);
UserID.innerHTML= ress.id;
Fname.innerHTML= ress.firstname;
Lname.innerHTML= ress.lastname;
Phone.innerHTML= ress.phonenumber;
Email.innerHTML= ress.email;
// score.innerHTML= ress.choice4;

    })
    .catch(error => {
    
    alert(error+" "+"That is the last question");
    
    });
    
    ekj = () => {
ress = users[arraydd++];
UserID.innerHTML= ress.id;
Fname.innerHTML= ress.firstname;
Lname.innerHTML= ress.lastname;
Phone.innerHTML= ress.phonenumber;
Email.innerHTML= ress.email;
// score.innerHTML= ress.choice4;

if (ress === ress.lenght) {
    alert("This is the Last Question");
}
};
    
    ekb = () => {
        ress = users[arraydd--];
        UserID.innerHTML= ress.id;
        Fname.innerHTML= ress.firstname;
        Lname.innerHTML= ress.lastname;
        Phone.innerHTML= ress.phonenumber;
        Email.innerHTML= ress.email;
        // score.innerHTML= ress.choice4;
        if (ress === 0) {
        alert("We can't move this way");
        }

    
    };
    gen = () => {
    
fetch("http://localhost:4500/user_infor")
.then(res => {
    console.log(res);
    return res.json();
    
})
.then(user_infor => {
  let users = user_infor.rows;
   console.log(users);
   console.log(users[5]);
   ress = users[arraydd];
   console.log(ress);
UserID.innerHTML= ress.id;
Fname.innerHTML= ress.firstname;
Lname.innerHTML= ress.lastname;
Phone.innerHTML= ress.phonenumber;
Email.innerHTML= ress.email;
// score.innerHTML= ress.choice4;

})
.catch(error => {

alert(error+" "+"That is the last question");

});
ekj = () => {
    ress = users[arraydd++];
    UserID.innerHTML= ress.id;
    Fname.innerHTML= ress.firstname;
    Lname.innerHTML= ress.lastname;
    Phone.innerHTML= ress.phonenumber;
    Email.innerHTML= ress.email;
    // score.innerHTML= ress.choice4;
    
    if (ress === ress.lenght) {
        alert("This is the Last Question");
    }
    };
        
        ekb = () => {
            ress = users[arraydd--];
            UserID.innerHTML= ress.id;
            Fname.innerHTML= ress.firstname;
            Lname.innerHTML= ress.lastname;
            Phone.innerHTML= ress.phonenumber;
            Email.innerHTML= ress.email;
            // score.innerHTML= ress.choice4;
            if (ress === 0) {
            alert("We can't move this way");
            }
    
        
        };
    
        // let name =  Lname.innerHTML= ress.lastname;
        console.log(ress.lastname);
        // Fname.innerHTML= ress.firstname;
    // console.log( Lname.innerHTML= ress.lastname);
        // console.log(name1);
        // console.log(name2);
        // console.log(name);
        // name.innerHTML = name1 + " " + name2;
    };
    
    genPage = () => {
    
        window.location.assign("../pages/result.html");
        console.log( Lname.innerHTML= ress.lastname);
    
    };
    //work on user exprience....