//                                 //
//  Main Intro Card and Quiz Card  //
//                                 //
var startButton = document.getElementById("start");
var introCard = document.getElementById("intro");
var quizCard = document.getElementById("card");
var time = document.getElementById("timer");
var endScreen = document.getElementById("final-card");

//question and answer variables
var question = document.getElementById("question");
var btnOne = document.getElementById("buttonOne");
var btnTwo = document.getElementById("buttonTwo");
var btnThree = document.getElementById("buttonThree");
var btnFour = document.getElementById("buttonFour");

//wrong and right messages
var correctMessage = document.getElementById("correct");
var wrongMessage = document.getElementById("wrong");

//variables used for measurement
const startTime = 100;
var timeLeft = startTime;
var i = 0;
var finalScore = 0;
var lastCard = false;

//arrays for questions and multiple choice options
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

//array of correct answers and variable to keep track of users chosen answer
var arrayAnswers = ["HTML", "<button></button>", "arrayNum.length - 1", "background-color:blue;", "An infinite amount of times"]
var userAnswer = "";

var initialsInput = document.getElementById("initials");
var submitButton = document.getElementById("submit");
var score = document.getElementById("final-score");

var viewScores = document.getElementById("view-highscores");
var highscoreCard = document.getElementById("highscores");
var backButton = document.getElementById("back");
var clearButton = document.getElementById("clear");

var userList = document.querySelector("#user-list");

//screen for highscores
function highScores(){
    endScreen.setAttribute("style", "display:none;");
    highscoreCard.removeAttribute("style");
    
}

//screen for end of quiz and entering initials
function quizOver(){
    finalScore = timeLeft;
    quizCard.setAttribute("style", "display:none;");
    endScreen.removeAttribute("style");
    score.textContent = "Your final score is " + finalScore;
    return;
}

//when called this starts the timer for the quiz
function startTimer(){
    var timerInterval = setInterval(function(){
        timeLeft--;
        time.textContent = "Time: " + timeLeft;

        if (timeLeft <= 0 || lastCard == true){
            clearInterval(timerInterval);
            quizOver();
        }
    }, 1000);
    return;
}

//when called this switch the contents of the quiz card
//to display the next set of questions and answers
function switchQuestion(cardNum){
    if (i < arrayQuestion.length){
        question.textContent = arrayQuestion[cardNum];
        btnOne.textContent = arrayOptionOne[cardNum];
        btnTwo.textContent = arrayOptionTwo[cardNum];
        btnThree.textContent = arrayOptionThree[cardNum];
        btnFour.textContent = arrayOptionFour[cardNum];
        i++;
    }
    else{
        lastCard = true;
    }
    return;
}

//when an answer is chosen this function checks whether it matches
//the correct answer and then displays either a correct or wrong message
function checkAnswer(answerNum){
    if (userAnswer == arrayAnswers[answerNum]){
        correctMessage.removeAttribute("style");
        var displayMessage = setTimeout(function(){
            correctMessage.setAttribute("style", "display:none;");
        },1000);
    }
    else{
        if (timeLeft > 10){
            timeLeft -= 10;
        }
        else{
            timeLeft = 0;
        }
        wrongMessage.removeAttribute("style");
        var displayMessage = setTimeout(function(){
            wrongMessage.setAttribute("style", "display:none;");
        },1000);
    }
    return;
}

//hides intro card and begins quiz
function startClicked() {
    introCard.setAttribute("style", "display:none;");
    quizCard.removeAttribute("style");
    startTimer();
    switchQuestion(i);
}

//listens for start button on intro screen
startButton.addEventListener("click", startClicked);


//all listeners for the question answers
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

//button for submitting initials to the highscore board
submitButton.addEventListener("click", function(event){
    event.preventDefault();
    var name = initialsInput;
    localStorage.setItem("user", name);
    localStorage.setItem("score", finalScore);
    
    var tag = document.createElement("li");
    userList.appendChild(tag);
    highScores();
});

//back button on highscore board
backButton.addEventListener("click", function(){
    i = 0
    timeLeft = startTime;
    lastCard = false;
    time.textContent = "Time: " + timeLeft;
    highscoreCard.setAttribute("style", "display:none;");
    introCard.removeAttribute("style");
});

//view highscore board button
viewScores.addEventListener("click", function(){
    introCard.setAttribute("style", "display:none;");
    quizCard.setAttribute("style", "display:none;");
    endScreen.setAttribute("style", "display:none;");
    highscoreCard.removeAttribute("style");
});

//sets initial frozen timer on screen
time.textContent = "Time: " + timeLeft;