'use strict';

// Selecting element

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--0');
const diceEL = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

let currentScore = 0;

// Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEL.classList.add('hidden');

// Rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1. Generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;
  // 2. Display dice
  diceEL.classList.remove('hidden');
  diceEL.src = `dice-${dice}.png`;
  // 3. Check for rolled 1
  if (dice !== 1) {
    // Add dice to current score
    currentScore += dice;
    current0El.textContent = currentScore; // Change later
  } else {
    // Switch to next player
  }
});
