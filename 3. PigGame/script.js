'use strict';

// Selecting Elements
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

let currentScore = 0;

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
    current0Element.textContent = currentScore;
  } else {
    // Switch to next player
  }
});
