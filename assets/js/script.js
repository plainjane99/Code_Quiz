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

    // this displays the message
    startMessageEl.innerHTML = message;

    // this displays the start button
    var buttonEl = createStartButton();
    startButtonEl.appendChild(buttonEl);



}

var createStartButton = function() {

    // this is creating the start button
    var startButtonEl = document.createElement("button");
    startButtonEl.textContent = "Start";
    startButtonEl.className = "start-btn";
    startButtonEl.setAttribute("id", 'start');

    return startButtonEl;

}

// Question function
// Questions are in an array.

function startQuiz() {

    // these are the questions
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
        }
        {
            q: 'What sport is Danny MacAskill known for?',
            a: 'Street trials',
            b: 'Snowboarding',
            c: 'Rock climbing',
            d: 'Surfing',
            answer: 'a'
        }
        {
            q: 'Which of the following trails is the longest?',
            a: 'Pacific Crest Trail',
            b: 'Continental Divide Trail',
            c: 'Appalachian Trail',
            d: 'John Muir Trail',
            answer: 'b'
        }
    ];

    // Start with timer != 0 && TRUE
    // Keep track of the index and print current question.
    // Questions require user to click a button to respond.
    // If question is answered correctly (TRUE), goes to next question (++).
    // Else incorrectly (FALSE) answered question decreases time then goes to next question if time is not 0.
    // If timer = 0, returns out of function to game over function.

    // copied this from the class exercise.  need to revise for my quiz.
    for (var i = 0; i < questions.length; i++) {
        // Display current question to user and ask OK/Cancel

        // Compare answers
        if (
          (answer === true && questions[i].a === 't') ||
          (answer === false && questions[i].a === 'f')
        ) {
          // Increase score
          score++;
          alert('Correct!');
        } else {
          alert('Wrong!');
        }
      }




// Game Over function shows user's final score asks for user initials
// Provides a field to input user initials
// Uses a Button to save the initials and high score to local storage.


// High score function shows user's final score and initials in a list


// Calling function

displayStart();

