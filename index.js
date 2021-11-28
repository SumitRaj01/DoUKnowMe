var readlineSync = require("readline-sync");
var score = 0;
var userName = readlineSync.question("May I have your name?");
console.log("Welcome " + userName + " to Do you Know Raj?");
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("You are right!");
    score++;
  } else {
    console.log("You are wrong");
    score;
  }
  console.log("current score: ", score);
}

var questions = [
  {
    question: "Where Do I live? ",
    answer: "Gurgaon",
  },
  {
    question: "Where Do I work? ",
    answer: "On myself",
  },
  {
    question: "What Do I like to do in my spare time? ",
    answer: "Reading",
  },
];
for (let i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}
