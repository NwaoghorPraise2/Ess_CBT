const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { pool } = require("./dbconfig");
const path = require('path');
const morgan = require('morgan');
// const { pusher } = require("./public UI/Scripts/ej");
// console.log(pusher);

const app = express();
const port = 4500;

app.use(morgan('short'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Just trying to see if the base works
app.use(express.static('./public UI'));

//routes
const getBooks = (request, response) => {
    const id = request.params.id;
    pool.query("SELECT * FROM questions",(error, results) => {
        if (error) {
            throw error;
        }

        response.status(200).json(results);
    });
};

app.post('/add_question', (req, res) => {
    const question = req.body.question; 
    const choice1 =req.body.choice1;
    const choice2 =req.body.choice2;
    const choice3 =req.body.choice3; 
    const choice4 =req.body.choice4;
    const answer =req.body.answer;

    pool.query(
        "INSERT INTO questions (question, choice1 , choice2 ,choice3 ,choice4 ,answer) VALUES($1, $2, $3, $4, $5, $6)", [question, choice1, choice2, choice3, choice4, answer],
        error => {
            if (error) {
        alert('error occurred'+ error);
            }
            res.status(201);
        }
    );
    res.end();
});

app.get("/questions",getBooks);

app.get('/questions/:id', (request, response) => {
    const id = request.params.id;
    pool.query("SELECT * FROM questions WHERE id = $1",[id] ,(error, results) => {
        if (error) {
            throw error;
        }

        response.status(200).json(results);
    });
});

app.post('/user_exam', (req, res) => {
    const name = req.body.FirstName; 
    const lname =req.body.LastName;
    const email =req.body.Email;
    const phone =req.body.Phone; 
    pool.query(
        "INSERT INTO user_exam (firstname, lastname , phonenumber , email) VALUES($1, $2, $3, $4)", [name, lname, phone, email],
        error => {
            if (error) {
            throw(error);
        // alert('error occurred'+ error);
            }
            res.status(201).sendFile(__dirname + '/public UI/pop.html');
        //    res.status(201);
        }
    );
    // res.end();
});
app.get('/user_name', (request, response) => {
    pool.query("SELECT lastname FROM user_exam ORDER BY id DESC LIMIT 1",(error, results) => {
        if (error) {
            throw error;
        }

        response.status(200).json(results);
    });
});

app.listen(process.env.PORT || port, () => {
    console.log(`server started on ${port}`);
});
