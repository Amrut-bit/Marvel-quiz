
var readlineSync = require("readline-sync");
var score=0;
var welcome=readlineSync.question("Whats your Name ");
console.log("Welcome "+welcome+" to the Marvel Quiz !")


var mainque=[{
  question: "What's the full and original name of Captain America?",
  answer: "Steve Rogers"
}, {
  question: "What's Thor's hammer called?",
  answer: "Mjolnir"
},
{
  question: "Do you know what's Spiderman's real name?",
  answer: "Peter Parker"
}];

for (var i=0;i<mainque.length;i++){
  var currentque=mainque[i];
  play(currentque.question,currentque.answer);
};

function play(questions,answer){
  var useranswer=readlineSync.question(questions);

  if (useranswer.toUpperCase()==answer.toUpperCase()){
    console.log("You are Right!")
    score++
    console.log("current score",score);
  }else{
    console.log("you are wrong!");
  }
  console.log("-------------")
}
console.log("Your Final Score",score);