// function Question(text, choices, answer) {
//     this.text = text;
//     this.choices = choices;
//     this.answer = answer;
// }
// // prototype checkanswer
// Question.prototype.checkAnswer = function(answer) {
//         return this.answer === answer;
//     }
//     // quiz constructor
// function Quiz(Questions) {
//     this.Questions = Questions;
//     this.score = 0;
//     this.QuestionIndex = 0
// }
// // quiz prototype
// Quiz.prototype.getQuestion = function() {
//     return this.Questions[this.QuestionIndex];
// }

// // quiz isfinish
// Quiz.prototype.isFinish = function() {
//     return this.Questions.length === this.QuestionIndex;
// }

// //quiz guess
// Quiz.prototype.guess = function(answer) {
//     var Question = this.getQuestion();
//     if (Question.checkAnswer(answer)) {
//         this.score++;
//     }
//     this.QuestionIndex++;
// }

// var q1 = new Question("what's the best programming language", ['c#', 'javasicript', 'phyton', "asp.net"], 'javasicript');
// var q2 = new Question("what's the most popular programming language", ['c#', 'visual basic', 'node.js', 'javasicript'], 'javasicript');
// var q3 = new Question("what's the best modern programming language", ['c#', 'javasicript', 'phyton', "asp.net"], 'javasicript');

// var Questions = [q1, q2, q3];


// // start quiz
// var quiz = new Quiz(Questions);

// loadQuestion();

// function loadQuestion() {
//     if (quiz.isFinish()) {
//         showScore();
//     } else {

//         var question = quiz.getQuestion();
//         let choices = question.choices;
//         // console.log(choices);

//         document.querySelector("#question").textContent = question.text;

//         for (var i = 0; i < choices.length; i++) {
//             // console.log(choices[i]);
//             var element = document.querySelector('#choices' + i);
//             element.innerHTML = choices[i];
//             guess(('btn' + i), (choices[i]));

//         }
//         // showProgress();

//     }
// }

// function guess(id, guess) {
//     var btn = document.getElementById(id);
//     btn.oncick = function() {
//         quiz.guess(guess)
//         loadQuestion();

//     }
// };
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

// Question prototype
Question.prototype.checkAnswer = function(answer) {
    return this.answer === answer;
}

// Quiz Constructor
function Quiz(questions) {
    this.questions = questions;
    this.score = 0;
    this.questionIndex = 0
}

// Quiz Prototype
Quiz.prototype.getQuestion = function() {
    return this.questions[this.questionIndex];
}

// Quiz isFinish
Quiz.prototype.isFinish = function() {
    return this.questions.length === this.questionIndex;

}

// Quiz guess
Quiz.prototype.guess = function(answer) {
    var question = this.getQuestion();

    if (question.checkAnswer(answer)) {
        this.score++;
    }
    this.questionIndex++;
}


var q1 = new Question("what's the best programming language ?", ["C#", "javascript", "pyhton", "asp.net"], "javascript");

var q2 = new Question("what's the most popular programming language ?", ["c#", "visual basic", "nodejs", "javascript"], "javascript");

var q3 = new Question("what's the best modern programming language ?", ["C#", "javascript", "pyhton", "asp.net"], "javascript");


var questions = [q1, q2, q3];


// Start Quiz

var quiz = new Quiz(questions);

loadQuestion();


function loadQuestion() {
    if (quiz.isFinish()) {
        showScore();
    } else {

        var question = quiz.getQuestion();
        var choices = question.choices;

        document.querySelector('#question').textContent = question.text;

        for (var i = 0; i < choices.length; i++) {
            var element = document.querySelector('#choice' + i);
            element.innerHTML = choices[i];
            guess('btn' + i, choices[i]);
        }

        showProgress();
    }
}

function guess(id, guess) {
    var btn = document.getElementById(id);
    btn.onclick = function() {
        quiz.guess(guess);
        loadQuestion()
    }
}

function showScore() {
    var html = `<h2>Score</h2><h4>${quiz.score}</h4>`;
    document.querySelector('.card-body').innerHTML = html;
}

function showProgress() {
    var Totalquestion = quiz.questions.length;
    var questionnumber = quiz.questionIndex + 1;

    if (Totalquestion === questionnumber) {
        document.querySelector("#progress").innerHTML = `Quiz is Ended`;

    } else {
        document.querySelector("#progress").innerHTML = `Question ${questionnumber} of ${Totalquestion}`;

    }
}