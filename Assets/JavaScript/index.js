var header = document.querySelector("#header");
var start = document.querySelector("#start");
var questionsEl = document.querySelector("#questions");
var qTitle = document.querySelector("#question-title");
var answersEl = document.querySelector("#answers");
var time = document.querySelector("#time");
var timer;
var clock = 100;
var highScoreTotal = document.querySelector("#high-scores");
var initialsEl = document.querySelector("#initials");
var quizOver = true;
var score = document.querySelector("#score");
var done = document.querySelector("#done");
var gameOver = document.querySelector("#gameOver");
var submit = document.querySelector("#submit");
var viewScores = document.querySelector("#view-scores");
var finalScore = 0;
var scoreBoard = [];
if (localStorage.getItem("scoreBoard")) {
    scoreBoard = JSON.parse(localStorage.getItem("scoreBoard"))
};

