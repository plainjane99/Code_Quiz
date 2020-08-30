// All Global Variables go here
var timerEl = document.getElementById('timer');
var startMessageEl = document.getElementById('question-text');
var startButtonEl = document.getElementById('choices');


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
  
countdown();

// Start screen gives the user a summary of the quiz and scoring
// Start screen requires user to click the "Start" button to proceed to questions

function displayStart() {

    // this is the start message
    var message = 
        'Welcome to Code Quiz!<br><br> \
        (Even though this is called Code Quiz, this is actually a quiz on random facts that I know better than code...for now, at least.)<br><br> \
        Each correct answer will take you to the next question.<br> \
        Each wrong answer will dock you 10 seconds of time.<br> \
        Your score will be the time left after all questions have been answered.<br><br> \
        Good luck!'
    ;

    startMessageEl.innerHTML = message;

    var buttonEl = createStartButton();
    startButtonEl.appendChild(buttonEl);

}

var createStartButton = function() {
    
    // this is creating the start button
    var startButtonEl = document.createElement("button");
    startButtonEl.textContent = "Start";
    startButtonEl.className = "start-btn";
    // editButtonEl.setAttribute("data-task-id", taskId);

    return startButtonEl;

}


displayStart();


// Question function
// Questions are in an array.
// Start with timer != 0 && TRUE
// Keep track of the index and print current question.
// Questions require user to click a button to respond.
// If question is answered correctly (TRUE), goes to next question (++).
// Else incorrectly (FALSE) answered question decreases time then goes to next question if time is not 0.
// If timer = 0, returns out of function to game over function.

var display



// Game Over function shows user's final score asks for user initials
// Provides a field to input user initials
// Uses a Button to save the initials and high score to local storage.


// High score function shows user's final score and initials in a list