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
    question: `Where Do I live?
  a: Bengaluru
  b: Delhi
  c: Gurgaon `,
    answer: "Gurgaon",
  },
  {
    question: `Where Do I work? 
  a: Apple
  b: Google
  c: Currently on myself `,
    answer: "currently On myself",
  },
  {
    question: `What Do I like to do in my spare time? 
  a: Reading
  b: Binge watching
  c: Mindlessly scrolling `,
    answer: "Reading",
  },
  {
    question: `Which one is my favourite band out of these?
    a: Coldplay
    b: BTS
    c: Imagine Dragons `,
    answer: "Coldplay",
  },
  {
    question: `My favourite Dish? 
    a: Chole Bhature
    b: Idli Sambhar
    c: Dosa `,
    answer: "Chole bhature",
  },
];
for (let i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}
