const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { pool } = require("./dbconfig");
const path = require("path");
const morgan = require("morgan");

const app = express();
const port = 4500;

app.use(morgan("short"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());


app.use(express.static("./public UI"));

//routes
const getBooks = (request, response) => {
    const id = request.params.id;
    pool.query("SELECT * FROM questions", (error, results) => {
        if (error) {
            throw error;
        }

        response.status(200).json(results);
    });
};

app.post("/add_question", (req, res) => {
    const question = req.body.Question;
    const choice1 = req.body.Chioce1;
    const choice2 = req.body.Chioce2;
    const choice3 = req.body.Chioce3;
    const choice4 = req.body.Chioce4;
    const answer = req.body.Answer;

    pool.query(
        "INSERT INTO questions (question, choice1 , choice2 ,choice3 ,choice4 ,answer) VALUES($1, $2, $3, $4, $5, $6)", [question, choice1, choice2, choice3, choice4, answer],
        error => {
            if (error) {
                throw error;
            }
            res.status(201);
        }
    );
    res.end();
});

app.get("/questions", getBooks);

app.get("/questions/:id", (request, response) => {
    const id = request.params.id;
    pool.query(
        "SELECT * FROM questions WHERE id = $1", [id],
        (error, results) => {
            if (error) {
                throw error;
            }

            response.status(200).json(results);
        }
    );
});

app.post("/user_exam", (req, res) => {
    const name = req.body.firstName;
    const lname = req.body.lastName;
    const email = req.body.email;
    const phone = req.body.phone;
    pool.query(
        "INSERT INTO user_exam (firstname, lastname , phonenumber , email) VALUES($1, $2, $3, $4)", [name, lname, phone, email],
        error => {
            if (error) {
                throw error;
            }
            res.status(201).sendFile(__dirname + "/public UI/pop.html");
        }
    );
    res.end();
});


app.get("/user_name", (request, response) => {
    pool.query(
        "SELECT lastname, id FROM user_exam ORDER BY id DESC LIMIT 1",
        (error, results) => {
            if (error) {
                throw error;
            }

            response.status(200).json(results);
        }
    );
});

app.get("/exam_score", (request, response) => {
    pool.query(
        " SELECT lastname, firstname , score FROM user_exam ORDER BY id DESC LIMIT 1",
        (error, results) => {
            if (error) {
                throw error;
            }

            response.status(200).json(results);
        }
    );
});

app.post("/save_score", (req, res) => {
    let id = req.body.id;
    let score = req.body.element;
    pool.query(
        "UPDATE user_exam SET score = $1 WHERE id =$2", [score, id],
        error => {
            if (error) {
                throw error;
            }
            res.status(201);
        }
    );
    res.end();
});

app.get("/user_infor", (request, response) => {
    pool.query("SELECT * FROM user_exam", (error, results) => {
        if (error) {
            throw error;
        }

        response.status(200).json(results);
    });
});

app.listen(process.env.PORT || port, () => {
    console.log(`server started on ${port}`);
});