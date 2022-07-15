'use strict';

// Selecting Elements
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');
const score0Element = document.querySelector('#score--0');
const score1Element = document.querySelector('#score--1');
const diceElement = document.querySelector('.dice');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

// Starting Condition
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

const score = [0, 0];
let currentScore = 0;
let activePlayer = 0;

// Rolling Dice Functionality
btnRoll.addEventListener('click', function () {
  // Roll Random dice number
  const newDiceRoll = Math.trunc(Math.random() * 6 + 1);

  // Display Dice
  diceElement.classList.remove('hidden');
  diceElement.src = `./public/images/dice-${newDiceRoll}.png`;

  // Check for rolled 1
  if (newDiceRoll != 1) {
    // Add dice to current score
    currentScore += newDiceRoll;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    // Set previous player's score to 0
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;

    // Switch to next player
    activePlayer = activePlayer === 0 ? 1 : 0;

    // Switch light background to active player
    player0Element.classList.toggle('player--active');
    player1Element.classList.toggle('player--active');
  }
});
