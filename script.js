'use strict';

const input = document.querySelector('input');
const form = document.querySelector('form');

function getValue(e) {
  e.preventDefault();
  console.log(input.value);
}

form.addEventListener('submit', getValue);
