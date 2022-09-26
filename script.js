//declare vars
var score = 0;
var questionIndex = 0;
var currentTime = 0;


var timerEl = document.getElementById("timer");
var start = document.getElementById("start");
var question = document.getElementById("question");

//countdown from 76
function countdown() {
    var timeLeft = 76;
    var penalty = 10;
    var timeInterval = setInterval(function () {
        if (timeLeft >= 1) {
            // display remaining seconds
            timerEl.textContent = timeLeft + ' seconds remaining';
            timeLeft--;
        } else {
            timerEl.textContent = ''
            clearInterval(timeInterval);
            // endGame();
        }
    }, 1000);
}
countdown();

var questionList = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        question: "Arrays in Javascript can be used to store ____.",
        choices: ["numbers and strings", "other arrays", "booleans", "all of the above"],
        answer: "all of the above"
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        choices: ["commas", "curly brackets", "quotes", "parenthesis"],
        answer: "quotes"
    },
    {
        question: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: "console log"
    },

];



  



//get all elements from HTML

//start quiz

//select first question

//correct/incorrect

//score+- time+-

//next question

//repeat

//times up

//timer

//time up

//submit score

//add score to local storage

//append score onto highscores html

//restart game after highscores viewtime