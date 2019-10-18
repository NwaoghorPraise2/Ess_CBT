CREATE TABLE questions (
id BIGSERIAL NOT NULL PRIMARY KEY,
question VARCHAR(400) NOT NULL,
choice1 VARCHAR(400) NOT NULL,
choice2 VARCHAR(400) NOT NULL,
choice3 VARCHAR(400) NOT NULL,
choice4 VARCHAR(400) NOT NULL,
answer INT NOT NULL
);
INSERT INTO questions (question, choice1 , choice2 ,choice3 ,choice4 ,answer) VALUES('What is an Operating System ?', 'An interface between the user and the computer.', 'A management software.','A system designed for operations.','It enables a computer handle operations request if the computer is inactive.','1');