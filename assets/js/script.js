// All Global Variables go here
var timerEl = document.getElementById('timer');
var questionTextEl = document.getElementById('question-text');
var startButtonEl = document.getElementById('choices');
var choicesButtonEl = document.getElementById('choices');

var questions = [
  {
    q: 'What is the most common sequence of events for a triathlon?',
    a: 'run, swim, bike',
    b: 'swim, bike, run',
    c: 'bike, run, swim',
    d: 'run, bike, swim',
    id: 'b'
  },
  {
    q: 'What is the distance run in a marathon?',
    a: '13.1 miles',
    b: '31.1 miles',
    c: '26.2 miles',
    d: '6.2 miles',
    id: 'c'
  },
  {
    q: 'Who is the first woman to climb a route graded 5.15a?',
    a: 'Sasha DiGiulian',
    b: 'Alex Puccio',
    c: 'Nina Williams',
    d: 'Margo Hayes',
    id: 'd'
  },
  {
    q: 'What sport is Danny MacAskill known for?',
    a: 'Street trials',
    b: 'Snowboarding',
    c: 'Rock climbing',
    d: 'Surfing',
    id: 'a'
  },
  {
    q: 'Which of the following trails is the longest?',
    a: 'Pacific Crest Trail',
    b: 'Continental Divide Trail',
    c: 'Appalachian Trail',
    d: 'John Muir Trail',
    id: 'b'
  }
];

// Countdown function to decrease timer
// needs to decrease at an interval
// Timer needs to stop at 0 and clear
function countdown() {

  var timeLeft = 120;
  timerEl.textContent = timeLeft;

  var timeInterval = setInterval(function() {
    if (timeLeft > 0) {
      timerEl.textContent = timeLeft;
      timeLeft--;
    } else {
      timerEl.textContent = 0;
      clearInterval(timeInterval);
    }
  }, 1000);

};

// this is the function for the quiz instructions 
var createStartMessage = function() {

  // this creates the div that will hold the quiz instructions
  var startMessageEl = document.createElement("div");
  startMessageEl.innerHTML = 
    'Welcome to Code Quiz!<br><br> \
    (Even though this is called Code Quiz, this is actually a quiz on random facts that I know better than code...for now, at least.)<br><br> \
    * Each correct answer will take you to the next question.<br> \
    * Each wrong answer will dock you 10 seconds of time.<br> \
    * Your score will be the time left after all questions have been answered.<br><br> \
    Good luck!'
  ;
  startMessageEl.className = "question-text";
  startMessageEl.setAttribute("id", 'start-msg');

  return startMessageEl;

};

// this is the function that creates the start button
var createStartButton = function() {

  var startButtonEl = document.createElement("button");
  startButtonEl.textContent = "Start Quiz";
  startButtonEl.className = "start-btn";
  startButtonEl.setAttribute("id", 'start');

  return startButtonEl;

};

// Start screen gives the user the quiz instructions 
// Start screen requires user to click the "Start" button to proceed to questions
function startScreen() {
  
  // this displays the quiz instructions 
  var startTextEl = createStartMessage();
  questionTextEl.appendChild(startTextEl);

  // this displays the start button
  var buttonEl = createStartButton();
  startButtonEl.appendChild(buttonEl);

  // this event listener awaits the user to click "Start Quiz" to proceed to the quiz
  startButtonEl.addEventListener("click", removeStartData);
};

// delete existing start data
function removeStartData() {
  
  // this removes the event listener associated with the start button
  startButtonEl.removeEventListener("click", removeStartData);

  // this removes the start screen instructions and button
  var removeStartMessageEl = document.getElementById('start-msg');
  questionTextEl.removeChild(removeStartMessageEl);

  var removeStartButtonEl = document.getElementById('start');
  choicesButtonEl.removeChild(removeStartButtonEl);

  startQuiz();
};

// function for creating a div for questions
var generateQuestionEl = function(i) {

  var currentQuestionEl = document.createElement("div");
  currentQuestionEl.textContent = questions[i].q;
  currentQuestionEl.className = "question-text";
  currentQuestionEl.setAttribute("id", 'current-question');

  return currentQuestionEl;
};

// function for creating a div for answer A choice
var generateChoiceAEl = function(i) {

  var choiceButtonEl = document.createElement("button");
  choiceButtonEl.textContent = "a. " + questions[i].a;
  choiceButtonEl.className = "choice-btn-a";
  choiceButtonEl.setAttribute("id", 'a');

  return choiceButtonEl;
};

// function for creating a div for answer B choice
var generateChoiceBEl = function(i) {

  var choiceButtonEl = document.createElement("button");
  choiceButtonEl.textContent = "b. " + questions[i].b;
  choiceButtonEl.className = "choice-btn-b";
  choiceButtonEl.setAttribute("id", 'b');

  return choiceButtonEl;
};

// function for creating a div for answer C choice
var generateChoiceCEl = function(i) {

  var choiceButtonEl = document.createElement("button");
  choiceButtonEl.textContent = "c. " + questions[i].c;
  choiceButtonEl.className = "choice-btn-c";
  choiceButtonEl.setAttribute("id", 'c');

  return choiceButtonEl;
};

// function for creating a div for answer D choice
var generateChoiceDEl = function(i) {

  var choiceButtonEl = document.createElement("button");
  choiceButtonEl.textContent = "d. " + questions[i].d;
  choiceButtonEl.className = "choice-btn-d";
  choiceButtonEl.setAttribute("id", 'd');

  return choiceButtonEl;
};

// this is the function that converts the user selection to an id
var multipleChoiceHandler = function(event) {
  console.log(event.target.id);
  return(event.target.id);
};

// this is the function that listens for the user selection
function answerListener() {
  choicesButtonEl.addEventListener("click", multipleChoiceHandler);
};

// this is the function that displays the questions and answer choices
function displayQuestions(i) {
  questionTextEl.append(generateQuestionEl(i));
  choicesButtonEl.append(generateChoiceAEl(i));  
  choicesButtonEl.append(generateChoiceBEl(i));  
  choicesButtonEl.append(generateChoiceCEl(i));  
  choicesButtonEl.append(generateChoiceDEl(i));

  answerListener();
}

// this is the function that begins the quiz questions
function startQuiz() {

  countdown();

  // for (var i = 0; i < questions.length; i++)
  for (i = 0; i < 1; i++) {  
    displayQuestions(i);

    // this saves the correct answer in a variable
    var correctAnswer = questions[i].id;
    console.log(correctAnswer);
    return(correctAnswer);

  }

};

// If question is answered correctly, go to next question (++).
// Else incorrectly answered question decreases time then goes to next question if time is not 0.
// If timer = 0, returns out of function to game over function.



// Game Over function shows user's final score asks for user initials
// Provides a field to input user initials
// Uses a Button to save the initials and high score to local storage.


// High score function shows user's final score and initials in a list

// This code is to pre-set local storage to demonstrate that I understand the concept
localStorage.setItem('initials', 'JH');
localStorage.setItem('high-score', '25');

// Calling function to start the application
startScreen();

