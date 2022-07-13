'use strict';

// Selecting the DOM
const gameMessage = document.querySelector('.message');
const theNumber = document.querySelector('.number');
const playerScore = document.querySelector('.score');
const playerInput = document.querySelector('.guess');
const checkButton = document.querySelector('.check');

let possibleScore = 20;

// theNumber.textContent = 13;

const secretNumber = Math.trunc(Math.random() * 20 + 1);

theNumber.textContent = secretNumber;

// When Check Button is clicked
checkButton.addEventListener('click', function () {
  // In input fields, it's not textContent, but value
  const guess = Number(playerInput.value);
  console.log(guess);

  if (!guess) {
    gameMessage.textContent = '⛔ No Number!';
  } else if (guess === secretNumber) {
    gameMessage.textContent = '🎉 Correct Number!';
  } else if (guess > secretNumber) {
    if (possibleScore > 1) {
      gameMessage.textContent = '📈 Too high!';
      possibleScore--;
    } else {
      gameMessage.textContent = '💥 You lost the game!';
      possibleScore = 0;
    }
    playerScore.textContent = possibleScore;
  } else if (guess < secretNumber) {
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
