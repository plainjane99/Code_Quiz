// All Global Variables go here
var timerEl = document.getElementById('timer');
var questionTextEl = document.getElementById('question-text');
var startButtonEl = document.getElementById('choices');
var choicesButtonEl = document.getElementById('choices');

var questions = [
  {
    question: 'What is the most common sequence of events for a triathlon?',
    choices: ['a: run, swim, bike', 'b: swim, bike, run', 'c: bike, run, swim', 'd: run, bike, swim'],
    answer: 'swim, bike, run'
  },
  {
    question: 'What is the distance run in a marathon?',
    choices: ['a: 13.1 miles', 'b: 31.1 miles', 'c: 26.2 miles', 'd: 6.2 miles'],
    answer: '26.2 miles'
  },
  {
    question: 'Who is the first woman to climb a route graded 5.15a?',
    choices: ['a: Sasha DiGiulian', 'b: Alex Puccio', 'c: Nina Williams', 'd: Margo Hayes'],
    answer: 'Margo Hayes'
  },
  {
    question: 'What sport is Danny MacAskill known for?',
    choices: ['a: Street trials', 'b: Snowboarding', 'c: Rock climbing', 'd: Surfing'],
    answer: 'Street trials'
  },
  {
    question: 'Which of the following trails is the longest?',
    choices: ['a: Pacific Crest Trail', 'a: Continental Divide Trail', 'a: Appalachian Trail', 'a: John Muir Trail'],
    answer: 'Continental Divide Trail'
  }
];

// Countdown function to decrease timer
// needs to decrease at an interval
// Timer needs to stop at 0 and clear
function countdown() {

  var timeLeft = 10;
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

// this is the function that logs the user selection
var multipleChoiceHandler = function(event) {
  console.log(event.target);
  // return(event.target);
};

// function for creating a div for questions
var generateQuestion = function() {

  for (var i = 0; i < 1; i++) {
    // displays the question
    var displayQuestionEl = document.createElement("div");
    displayQuestionEl.textContent = questions[i].question;
    displayQuestionEl.className = "question-text";
    displayQuestionEl.value = questions[i].answer;
    console.log("the answer is: " + displayQuestionEl.value);

    questionTextEl.append(displayQuestionEl);

    // displays choice "a"
    var choiceAButtonEl = document.createElement("button");
    choiceAButtonEl.textContent = questions[i].choices[0];
    choiceAButtonEl.className = "choice-btn-a";
    choiceAButtonEl.value = questions[i].choices[0];
    console.log(choiceAButtonEl.value);

    questionTextEl.append(choiceAButtonEl);

    // displays choice "b"
    var choiceBButtonEl = document.createElement("button");
    choiceBButtonEl.textContent = questions[i].choices[1];
    choiceBButtonEl.className = "choice-btn-b";
    choiceBButtonEl.value = questions[i].choices[1];
    console.log(choiceBButtonEl.value);

    questionTextEl.append(choiceBButtonEl);
    
    // displays choice "c"
    var choiceCButtonEl = document.createElement("button");
    choiceCButtonEl.textContent = questions[i].choices[2];
    choiceCButtonEl.className = "choice-btn-c";
    choiceCButtonEl.value = questions[i].choices[2];
    console.log(choiceCButtonEl.value);

    questionTextEl.append(choiceCButtonEl);

    // displays choice "d"
    var choiceDButtonEl = document.createElement("button");
    choiceDButtonEl.textContent = questions[i].choices[3];
    choiceDButtonEl.className = "choice-btn-d";
    choiceDButtonEl.value = questions[i].choices[3];
    console.log(choiceDButtonEl.value);

    questionTextEl.append(choiceDButtonEl);

    // debugger;

    // awaits the user selection
    var userAnswer = choicesButtonEl.addEventListener("click", multipleChoiceHandler);
    console.log(userAnswer);

  }
    
};

// this is the function that begins the quiz questions
function startQuiz() {

  countdown();

  generateQuestion();

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

