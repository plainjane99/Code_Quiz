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
    answer: 'b'
  },
  {
    q: 'What is the distance run in a marathon?',
    a: '13.1 miles',
    b: '31.1 miles',
    c: '26.2 miles',
    d: '6.2 miles',
    answer: 'c'
  },
  {
    q: 'Who is the first woman to climb a route graded 5.15a?',
    a: 'Sasha DiGiulian',
    b: 'Alex Puccio',
    c: 'Nina Williams',
    d: 'Margo Hayes',
    answer: 'd'
  },
  {
    q: 'What sport is Danny MacAskill known for?',
    a: 'Street trials',
    b: 'Snowboarding',
    c: 'Rock climbing',
    d: 'Surfing',
    answer: 'a'
  },
  {
    q: 'Which of the following trails is the longest?',
    a: 'Pacific Crest Trail',
    b: 'Continental Divide Trail',
    c: 'Appalachian Trail',
    d: 'John Muir Trail',
    answer: 'b'
  }
];

// Countdown function to decrease timer
// needs to decrease at an interval
// Timer needs to stop at 0 and clear
function countdown() {

  var timeLeft = 10;
  timerEl.textContent = timeLeft;

  var timeInterval = setInterval(function() {
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft;
      timeLeft--;
    } else {
      timerEl.textContent = 0;
      clearInterval(timeInterval);
    }
  }, 1000);
}
  
// Start screen gives the user the quiz instructions 
// Start screen requires user to click the "Start" button to proceed to questions
function startScreen() {
  // this calls the function and displays the quiz instructions 
  var startTextEl = createStartMessage();
  questionTextEl.appendChild(startTextEl);

  // this displays the start button
  var buttonEl = createStartButton();
  startButtonEl.appendChild(buttonEl);
}

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

}

// this event listener allows the user to proceed to the quiz
startButtonEl.addEventListener("click", startQuiz);

// delete existing start data
var removeStartData = function() {
  // this removes the start screen instructions and button
  var removeStartMessageEl = document.getElementById('start-msg');
  questionTextEl.removeChild(removeStartMessageEl);

  var removeStartButtonEl = document.getElementById('start');
  choicesButtonEl.removeChild(removeStartButtonEl);
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
  choiceButtonEl.className = "choice-btn";
  choiceButtonEl.setAttribute("id", 'current-question');

  return choiceButtonEl;
}

// function for creating a div for answer B choice
var generateChoiceBEl = function(i) {

  var choiceButtonEl = document.createElement("button");
  choiceButtonEl.textContent = "b. " + questions[i].b;
  choiceButtonEl.className = "choice-btn";
  choiceButtonEl.setAttribute("id", 'current-question');

  return choiceButtonEl;
}

// function for creating a div for answer C choice
var generateChoiceCEl = function(i) {

  var choiceButtonEl = document.createElement("button");
  choiceButtonEl.textContent = "c. " + questions[i].c;
  choiceButtonEl.className = "choice-btn";
  choiceButtonEl.setAttribute("id", 'current-question');

  return choiceButtonEl;
}

// function for creating a div for answer D choice
var generateChoiceDEl = function(i) {

  var choiceButtonEl = document.createElement("button");
  choiceButtonEl.textContent = "d. " + questions[i].d;
  choiceButtonEl.className = "choice-btn";
  choiceButtonEl.setAttribute("id", 'current-question');

  return choiceButtonEl;
}

// this is the function that begins the quiz questions
function startQuiz() {

  removeStartData();

  countdown();

  // for (var i = 0; i < questions.length; i++) {  
  // }

  for (var i = 0; i < 1; i++) {  
    questionTextEl.append(generateQuestionEl(i));
    choicesButtonEl.append(generateChoiceAEl(i));  
    choicesButtonEl.append(generateChoiceBEl(i));  
    choicesButtonEl.append(generateChoiceCEl(i));  
    choicesButtonEl.append(generateChoiceDEl(i));  
  }


};

  // Keep track of the index and print current question.
  // Questions require user to click a button to respond.
  // If question is answered correctly (TRUE), goes to next question (++).
  // Else incorrectly (FALSE) answered question decreases time then goes to next question if time is not 0.
  // If timer = 0, returns out of function to game over function.



// Game Over function shows user's final score asks for user initials
// Provides a field to input user initials
// Uses a Button to save the initials and high score to local storage.


// High score function shows user's final score and initials in a list


// Calling function to start the application
startScreen();