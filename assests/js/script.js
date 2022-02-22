var StartBtn  = document.getElementById("start-btn");
var text = document.getElementById("text");
var question = document.getElementById("question");
var choices = document.getElementById("choices");
var timeLeft = document.getElementById("time-left");
var answer = document.getElementById("answer");
var module = document.getElementById("module");
var choiceanswers=document.getElementsByClassName("choiceanswer");
var timer;
var questionCounter = 0;
var prevQuestion
var finishquiz = false;


var questions = [
    {
        question: "JavaScript File Has An Extension of:",
        choice1:".javascript" ,
        choice2: ".Java" ,
        choice3: ".Js" ,
        choice4:".xml" ,
        correct: 3,
    },
    {
        question: "What are semicolons used for, in Javascript?",
        choice1:"Separating statements" ,
        choice2: "Confirming values" ,
        choice3: "To create booleans",
        choice4:"all of the above" ,
        correct: 1,
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        choice1:"commas" ,
        choice2: "curly brackets",
        choice3: "parenthesis",
        choice4:"quotes" ,
        correct: 4,
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        choice1:"quotes",
        choice2: "square brackets",
        choice3: "parentheses",
        choice4:"curly brackets",
        correct: 3,
    }, {
        question: "Commonly used data types DO NOT include:",
        choice1:"booleans",
        choice2: "alerts" ,
        choice3: "numbers",
        choice4:"strings" ,
        correct: 2,
    },
];


function  QuizStart() {
    timer = 75;
    var timeInterval = setInterval(function(){
    if(timer===75){
    finishquiz = false;
    timeLeft.textContent=timer;
    quiz();
    timer--;
}
else if(timer===0){
    timeLeft.textCountent=timer;
    clearInterval(timeInterval);
    quizfinished();
    return;
}   else {
    if(finishquiz){
    clearInterval(timeInterval);
    return;
}
            timeLeft.textContent=timer;
                timer--;
}
}, 1000);
};


function quiz() {
    if(questionCounter==5){
        quizfinished();
        return
    }
    text.textContent="";
        question.textContent=questions[questionCounter].question;
        choices.innerHTML = "";

var choiceA=document.createElement("a");
    choiceA.className="choiceanswer";
    choiceA.textContent=questions[questionCounter].choice1;
    choiceA.setAttribute("choice-id", 1);
    choices.appendChild(choiceA);
    choiceA.addEventListener("click", solveanswer);

var choiceB=document.createElement("a");
    choiceB.className="choiceanswer";
    choiceB.textContent=questions[questionCounter].choice2;
    choiceB.setAttribute("choice-id", 2);
    choices.appendChild(choiceB);
    choiceB.addEventListener("click", solveanswer);

var choiceC=document.createElement("a");
    choiceC.className="choiceanswer";
    choiceC.textContent=questions[questionCounter].choice3;
    choiceC.setAttribute("choice-id", 3);
    choices.appendChild(choiceC);
    choiceC.addEventListener("click", solveanswer);

var choiceD=document.createElement("a");
    choiceD.className="choiceanswer";
    choiceD.textContent=questions[questionCounter].choice4;
    choiceD.setAttribute("choice-id", 4);
    choices.appendChild(choiceD);
    choiceD.addEventListener("click", solveanswer);
}

function solveanswer(event){
var picked = event.target.getAttribute("choice-id");
if (picked == questions[questionCounter].correct){
answer.textContent="Correct Answer!";
        questionCounter++;
        quiz();
        return
    } 
    else {
        answer.textContent="Wrong Choice!";
        timer-=10;
        questionCounter++;
        quiz();
        return
    }
}

function quizfinished(){
finishquiz=true;
question.textContent = "Quiz Finished";
choices.innerHTML="";
    text.textContent = "Your final score is "+timer+". Enter your initials.";
    choices.innerHTML="<input type='text' maxlength='2' name='initials'><p class='button' id = 'submit-button'>Submit</p>";
    var submitButton = document.getElementById("submit-button");
    submitButton.addEventListener("click");
    console.log(Scores);
}
function displayscores(){
    finishquiz=true;
    question.textContent="the final scores"
    choices.innerHTML="<p class='button' id='back-button'>Take Quiz</p><p class='button' id='clear-button'>Clear</p>";
    var backButton = document.getElementById("back-button");
    backButton.addEventListener("click", QuizStart);
    var clearButton = document.getElementById("clear-button");
    clearButton.addEventListener("click");
    
}



StartBtn.addEventListener("click", QuizStart);

