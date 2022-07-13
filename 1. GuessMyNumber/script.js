'use strict';

// Selecting the DOM
const gameMessage = document.querySelector('.message');
const theNumber = document.querySelector('.number');
const playerScore = document.querySelector('.score');
const playerInput = document.querySelector('.guess');
const againButton = document.querySelector('.again');
const checkButton = document.querySelector('.check');
const htmlBody = document.querySelector('body');

let possibleScore = 20;

const secretNumber = Math.trunc(Math.random() * 20 + 1);

// When Check Button is clicked
checkButton.addEventListener('click', function () {
  // In input fields, it's not textContent, but value
  const guess = Number(playerInput.value);
  console.log(guess);

  // If no input
  if (!guess) {
    gameMessage.textContent = '⛔ No Number!';
  }

  // If Player wins
  else if (guess === secretNumber) {
    gameMessage.textContent = '🎉 Correct Number!';

    // Manipulate CSS: Turn background color to greenish
    htmlBody.style.backgroundColor = '#60b347';

    // Show secret number
    theNumber.textContent = secretNumber;
  }

  // If guess is too high
  else if (guess > secretNumber) {
    if (possibleScore > 1) {
      gameMessage.textContent = '📈 Too high!';
      possibleScore--;
    } else {
      gameMessage.textContent = '💥 You lost the game!';
      possibleScore = 0;
    }
    playerScore.textContent = possibleScore;
  }

  // If guess is too low
  else if (guess < secretNumber) {
    if (possibleScore > 1) {
      gameMessage.textContent = '📉 Too low!';
      possibleScore--;
    } else {
      gameMessage.textContent = '💥 You lost the game!';
      possibleScore = 0;
    }
    playerScore.textContent = possibleScore;
  }
});

againButton.addEventListener('click', function () {
  console.log('Again is Clicked and working');
  const secretNumber = Math.trunc(Math.random() * 20 + 1);
  theNumber.textContent = '?';
  possibleScore = 20;
  gameMessage.textContent = 'Start guessing...';
  playerScore.textContent = possibleScore;
  playerInput.value = '';
  htmlBody.style.backgroundColor = '#222';
});
