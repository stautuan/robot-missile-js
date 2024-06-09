'use strict';

const input = document.querySelector('input');
const form = document.querySelector('form');
const output = document.querySelector('.output');

// Generate a random secret code when the game is initialized
const randomNum = Math.floor(Math.random() * 26) + 1;
const secretCode = (randomNum + 9).toString(36).toUpperCase();

console.log(secretCode);

let attempts = 4;

function getValue(e) {
  e.preventDefault();

  let guess = input.value.toUpperCase();

  attempts--;

  if (attempts === 0 && guess !== secretCode) {
    output.innerHTML = `BOOOOOOOMMM... YOU BLEW IT! THE CORRECT CODE WAS "${secretCode}"`;
    input.disabled = true;
  } else if (guess > secretCode) {
    output.innerHTML = 'EARLIER';
  } else if (guess < secretCode) {
    output.innerHTML = 'LATER';
  } else {
    output.innerHTML = 'TICK...FZZZZ...CLICK...YOU DID IT!';
    input.disabled = true;
  }

  input.value = '';
}

form.addEventListener('submit', getValue);
