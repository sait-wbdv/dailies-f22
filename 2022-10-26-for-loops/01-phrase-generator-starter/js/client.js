import { nouns } from './nouns.js';
import { randomInteger } from './utilities.js';

const form = document.querySelector('form');
const output = document.querySelector('.output');

const handleSubmit = function(event) {
  event.preventDefault();

  console.log(nouns);
  console.log(form.count.value);

  console.log();

  output.textContent = nouns[randomInteger(nouns.length)];
}

form.addEventListener('submit', handleSubmit);