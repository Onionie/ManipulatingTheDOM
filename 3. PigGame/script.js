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

let scores, currentScore, activePlayer, playing;

// Starting conditions
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0Element.textContent = 0;
  score1Element.textContent = 0;
  current0Element.textContent = 0;
  current1Element.textContent = 0;

  diceElement.classList.add('hidden');
  player0Element.classList.remove('player--winner');
  player1Element.classList.remove('player--winner');
  player0Element.classList.add('player--active');
  player1Element.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  // Set previous player's score to 0
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;

  // Switch to next player
  activePlayer = activePlayer === 0 ? 1 : 0;

  // Switch light background to active player
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');
};

// Rolling Dice Functionality
btnRoll.addEventListener('click', function () {
  if (playing) {
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
      switchPlayer();
    }
  }
});

// Hold Score
btnHold.addEventListener('click', function () {
  if (playing) {
    // Add current score to active player's score
    scores[activePlayer] += currentScore;

    //Display respective score to player
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      // Finish the game, set playing to false
      playing = false;

      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--active');
    } else {
      // Switch to next player if score is not equal 100 yet.
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', init);
