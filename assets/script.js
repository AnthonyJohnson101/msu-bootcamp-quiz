//setting variables for timer and quiz questions
let timeLeft = document.querySelector(".time-left");
let startButton = document.querySelector(".start-button");
let questions = document.querySelector(".text");
//multiple choice buttons
let buttonA = document.querySelector(".button-a");
let buttonB = document.querySelector(".button-b");
let buttonC = document.querySelector(".button-c");
let buttonD = document.querySelector(".button-d");
//options
let optionA = document.querySelector(".option-a")
let optionB = document.querySelector(".option-b")
let optionC = document.querySelector(".option-c")
let optionD = document.querySelector(".option-d")
//default hidden buttons

function hideChoices() {
    buttonA.style.display = "none";
    buttonB.style.display = "none";
    buttonC.style.display = "none";
    buttonD.style.display = "none";
};
hideChoices();

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
    questionOne();
});


//timer

let secondsLeft = 90;

function setTime() {
  let timerInterval = setInterval(function() {
    secondsLeft--;
    timeLeft.textContent = secondsLeft + " Seconds";

    //will need a conditional for game over or seconds reaching 0

  }, 1000);
};



// Questions

function questionOne () {
    questions.textContent = "What is JavaScript's main purpose?"
    optionA.textContent = "A. Creating Videogames"
    optionB.textContent = "B. Creating Interactive Web Content"
    optionC.textContent = "C. Creating A Cup of Coffee"
    optionD.textContent = "D. Torturing Developers"

    buttonA.addEventListener("click", function(event) {
        secondsLeft -= 10
        questionTwo ();
    });

    buttonB.addEventListener("click", function(event) {
        questionTwo ();
    });

    buttonC.addEventListener("click", function(event) {
        secondsLeft -= 10
        questionTwo ();
    });

    buttonD.addEventListener("click", function(event) {
        secondsLeft -= 10
        questionTwo ();
    });

}

function questionTwo () {
    questions.textContent = "Where is the best place to link your JavaScript in your HTML?"
    optionA.textContent = "A. Within the Head Tag"
    optionB.textContent = "B. Within the Body Tag at the Top"
    optionC.textContent = "C. Within the Body Tag at the Bottom"
    optionD.textContent = "D. All of the Above"

    buttonA.addEventListener("click", function(event) {
        secondsLeft -= 10
        questionThree ();
    });

    buttonB.addEventListener("click", function(event) {
        secondsLeft -= 10
        questionThree ();
    });

    buttonC.addEventListener("click", function(event) {
        questionThree ();
    });

    buttonD.addEventListener("click", function(event) {
        secondsLeft -= 10
        questionThree ();
    });

}

function questionThree () {
    questions.textContent = "When was JavaScript created"
    optionA.textContent = "A. The Dawn of Time"
    optionB.textContent = "B. 1981"
    optionC.textContent = "C. 1995"
    optionD.textContent = "D. The Land Before Time"

    buttonA.addEventListener("click", function(event) {
        secondsLeft -= 10
        questionFour ();
    });

    buttonB.addEventListener("click", function(event) {
        secondsLeft -= 10
        questionFour ();
    });

    buttonC.addEventListener("click", function(event) {
        questionFour ();
    });

    buttonD.addEventListener("click", function(event) {
        secondsLeft -= 10
        questionFour ();
    });

}