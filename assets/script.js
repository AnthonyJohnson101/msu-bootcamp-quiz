//setting variables for timer and quiz questions
let timeLeft = document.querySelector(".time-left");
let startButton = document.querySelector(".start-button");
let questions = document.querySelector(".text");
let questionCount = 0
let answer = document.querySelectorAll(".answer");
let quizContent = document.querySelector(".quiz-content");
let leaderboardEl = document.querySelector(".leaderboard");
let inputField = document.querySelector(".input-field");
let submitButton = document.querySelector(".submit-button");
let submitArea = document.querySelector(".score-input")
let highScoreButton = document.querySelector(".high-score-button")
let scoreList = document.querySelector(".score-ol")
//multiple choice buttons
let buttonA = document.querySelector(".button-a");
let buttonB = document.querySelector(".button-b");
let buttonC = document.querySelector(".button-c");
let buttonD = document.querySelector(".button-d");
//global variables to make manipulation easier
let initialsAndScore;
let timerInterval;



//default hidden buttons

function defaultHidden() {
    buttonA.style.display = "none";
    buttonB.style.display = "none";
    buttonC.style.display = "none";
    buttonD.style.display = "none";
    leaderboardEl.style.display = "none";
    submitArea.style.display = "none";
};
defaultHidden();





// unhides choices buttons on start button click

function unhideChoices () {
    buttonA.style.display = "";
    buttonB.style.display = "";
    buttonC.style.display = "";
    buttonD.style.display = "";
};

//hide start button
function hideStart () {
    startButton.style.display = "none";

};


//start button
startButton.addEventListener("click", function(event) {
    setTime();
    hideStart();
    unhideChoices();
    writeQuestion();
});


//timer

let secondsLeft = 90;

function setTime() {
    timerInterval = setInterval(function() {
        if (secondsLeft < 1) {
            gameOver();
            
        } else {
            secondsLeft--; 
        }   
    
    timeLeft.textContent = secondsLeft + " Seconds";
    
    
    

  }, 1000);
};


//list of questions to loop through

let questionList = [{
    question: "What is JavaScript's main purpose?",
    optionA: "A. Creating Videogames",
    optionB: "B. Creating Interactive Content",
    optionC: "C. Creating A Cup of Coffee",
    optionD: "D. Torturing Developers",
    correctAnswer: "B. Creating Interactive Content",
},
{
    question: "Where is the most conventional place to link your JavaScript in your HTML?",
    optionA: "A. Within the Head Tag",
    optionB: "B. Within the Body Tag at the Top",
    optionC: "C. Within the Body Tag at the Bottom",
    optionD: "D. All of the Above",
    correctAnswer: "C. Within the Body Tag at the Bottom",
},
{
    question: "When was JavaScript created?",
    optionA: "A. The Dawn of Time",
    optionB: "B. 1981",
    optionC: "C. 1995",
    optionD: "D. The Land Before Time",
    correctAnswer: "C. 1995",

},
{
    question: "Which One of These Examples is a 'for loop'?",
    optionA: "A. for (i = 0; i < xyz.length; i++)",
    optionB: "B. let question = xyz",
    optionC: "C. let randomIndex = Math.floor(Math.random() * concatArray.length)",
    optionD: "D. generateBtn.addEventListener('click', writePassword);",
    correctAnswer: "A. for (i = 0; i < xyz.length; i++)",

},
{
    question: "Which of the Following Indicates a Universal Selector in CSS?",
    optionA: "A. '#'",
    optionB: "B. '^'",
    optionC: "C. '&'",
    optionD: "D. '*'",
    correctAnswer: "D. '*'",

},
{
    question: "Which of the Following is/are Considered a Semantic HTML Tag?",
    optionA: "A. <Div>",
    optionB: "B. <html>",
    optionC: "C. <Aside>",
    optionD: "D. All of the Above",
    correctAnswer: "C. <Aside>",

},
{
    question: "How do You Autofill the Start of an HTML Document?",
    optionA: "A. ! + Enter",
    optionB: "B. Ctrl + J",
    optionC: "C. Alt + F4",
    optionD: "D. Ctrl + Shift + Del",
    correctAnswer: "A. ! + Enter",

},
{
    question: "What is 1 + 1",
    optionA: "A. 4",
    optionB: "B. 7",
    optionC: "C. 4,294,967,295",
    optionD: "D. 2",
    correctAnswer: "D. 2",

}];

//function to cycle through question objects

function writeQuestion () {
    questions.innerText = questionList[questionCount].question
    buttonA.innerText = questionList[questionCount].optionA
    buttonB.innerText = questionList[questionCount].optionB
    buttonC.innerText = questionList[questionCount].optionC
    buttonD.innerText = questionList[questionCount].optionD
};

//selects all choice buttons to be checked against correct answer
answer.forEach ((A) => {
    A.addEventListener ("click", checkAnswer)
});

//compares user's answer to the correct answer
function checkAnswer (e) {
    let userAnswer = e.target.innerText;

    if (userAnswer !== questionList[questionCount].correctAnswer) {
    secondsLeft = secondsLeft - 10}

    if (questionCount == 7){
        gameOver();
        return;
    }


    questionCount++
    writeQuestion();
};

//when time reaches 0 or answered all questions. If timer reaches 0, reload page to restart quiz
function gameOver () {
    if (secondsLeft !== 0) {
        clearInterval(timerInterval)
        submitArea.style.display = "";
        quizContent.style.display = "none";
    } else {
        
        location.reload();
    }
};

//submit score
submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    userInitials =  inputField.value.trim();
    

    initialsAndScore = {
        score: secondsLeft,
        initials: userInitials
    };

    localStorage.setItem("initialsAndScore", JSON.stringify(initialsAndScore));
    
    displayleaderboard();
});


//displays leader when called
function displayleaderboard () {
    let displayScores = localStorage.getItem("initialsAndScore")
    quizContent.style.display = "none";
    leaderboardEl.style.display = "";
    displayScores = JSON.parse(displayScores)
    let scoreLi = document.createElement("li")
    scoreLi.textContent = displayScores.score + " " + displayScores.initials
    scoreList.appendChild(scoreLi)
    submitArea.style.display = "none";
};

//displays your previous score
highScoreButton.addEventListener("click", function (){
    displayleaderboard();

});






