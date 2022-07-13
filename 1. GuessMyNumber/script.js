'use strict';

// Selecting the DOM
const gameMessage = document.querySelector('.message');
const theNumber = document.querySelector('.number');
const playerScore = document.querySelector('.score');
const playerInput = document.querySelector('.guess');
const checkButton = document.querySelector('.check');

// theNumber.textContent = 13;
// playerScore.textContent = 10;

const secretNumber = Math.trunc(Math.random() * 20 + 1);

theNumber.textContent = secretNumber;

// When Check Button is clicked
checkButton.addEventListener('click', function () {
  // In input fields, it's not textContent, but value
  const guess = Number(playerInput.value);
  console.log(guess);

  if (!guess) {
    gameMessage.textContent = '⛔ No Number!';
  }
});
