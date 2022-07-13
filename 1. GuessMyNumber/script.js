'use strict';

// Selecting the DOM
const gameMessage = document.querySelector('.message');
const theNumber = document.querySelector('.number');
const playerScore = document.querySelector('.score');
const highScoreDiv = document.querySelector('.highscore');
const playerInput = document.querySelector('.guess');
const againButton = document.querySelector('.again');
const checkButton = document.querySelector('.check');
const htmlBody = document.querySelector('body');

let possibleScore = 20;
let highScore = 0;

let secretNumber = Math.trunc(Math.random() * 20 + 1);

// When Check Button is clicked
checkButton.addEventListener('click', function () {
  // In input fields, it's not textContent, but value
  const guess = Number(playerInput.value);

  // If no input
  if (!guess) {
    gameMessage.textContent = '⛔ No Number!';
  }

  // If Player wins
  else if (guess === secretNumber) {
    if (highScore <= possibleScore) {
      highScore = possibleScore;
    }
    gameMessage.textContent = '🎉 Correct Number!';

    // Manipulate CSS: Turn background color to greenish
    htmlBody.style.backgroundColor = '#60b347';

    // Show secret number
    theNumber.textContent = secretNumber;

    // Set Highscore
    highScoreDiv.textContent = highScore;
  }

  // If guess is too high
  else if (guess !== secretNumber) {
    if (possibleScore > 1) {
      gameMessage.textContent =
        guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
      possibleScore--;
      playerScore.textContent = possibleScore;
    } else {
      gameMessage.textContent = '💥 You lost the game!';
      possibleScore = 0;
    }
  }
});

againButton.addEventListener('click', function () {
  console.log('Again is Clicked and working');
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  theNumber.textContent = '?';
  possibleScore = 20;
  gameMessage.textContent = 'Start guessing...';
  playerScore.textContent = possibleScore;
  playerInput.value = '';
  htmlBody.style.backgroundColor = '#222';
});
