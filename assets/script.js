var startButton = document.getElementById("start");
var introCard = document.getElementById("intro");
var quizCard = document.getElementById("card");
var time = document.getElementById("timer");

var question = document.getElementById("question");
var btnOne = document.getElementById("buttonOne");
var btnTwo = document.getElementById("buttonTwo");
var btnThree = document.getElementById("buttonThree");
var btnFour = document.getElementById("buttonFour");

var timeLeft = 60;
var i = 0;

var arrayQuestion = [
       "What language is used for over-all structure of a webpage?",
       "I need to make a button. What is the correct HTML syntax?",
       "arrayNum = [1, 2, 3, 4] console.log(XXX) Using the length property of the array, how can we print the last index of the array to the console?", 
       "I need to make the entire webpage a blue color. What is the correct css style to use?",
       "for (var i = 0; i < 5; i -= 2) console.log(i); i++; How many times will this loop iterate?"
    ];
var arrayOptionOne = ["JavaScript", "<btn></btn>", "arrayNum[4]", "color:blue;", "An infinite amount of times"];
var arrayOptionTwo = ["CSS", "<button = button></button>", "arrayNum[3]", "background-color:blue;", "4 times"];
var arrayOptionThree = ["C++", "<button></button>", "arrayNum.length", "background-color = blue;", "Error"];
var arrayOptionFour = ["HTML", "<btn = button></btn>", "arrayNum.length - 1", "color = blue;", "5 times"];

var arrayAnswers = ["HTML", "<button></button>", "arrayNum.length - 1", "background-color:blue;", "An infinite amount of times"]
var userAnswer = "";

function switchQuestion(cardNum){
    if (i < arrayQuestion.length){
        question.textContent = arrayQuestion[cardNum];
        btnOne.textContent = arrayOptionOne[cardNum];
        btnTwo.textContent = arrayOptionTwo[cardNum];
        btnThree.textContent = arrayOptionThree[cardNum];
        btnFour.textContent = arrayOptionFour[cardNum];
        i++;
    }

    return;
}

function checkAnswer(answerNum){
    if (userAnswer == arrayAnswers[answerNum]){
        console.log("true");
    }
    else{
        console.log("false");
    }
    return;
}

function startClicked() {
    introCard.setAttribute("style", "display:none;");
    quizCard.removeAttribute("style");
    switchQuestion(i);
}

startButton.addEventListener("click", startClicked);
btnOne.addEventListener("click", function(){
    userAnswer = arrayOptionOne[i-1];
    checkAnswer(i-1);
    switchQuestion(i);
});
btnTwo.addEventListener("click", function(){
    userAnswer = arrayOptionTwo[i-1];
    checkAnswer(i-1);
    switchQuestion(i);
});
btnThree.addEventListener("click", function(){
    userAnswer = arrayOptionThree[i-1];
    checkAnswer(i-1);
    switchQuestion(i);
});
btnFour.addEventListener("click", function(){
    userAnswer = arrayOptionFour[i-1];
    checkAnswer(i-1);
    switchQuestion(i);
});