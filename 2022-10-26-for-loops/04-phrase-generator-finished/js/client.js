import { nouns } from './nouns.js';
import { randomInteger } from './utilities.js';

const form = document.querySelector('form');
const output = document.querySelector('.output');


const handleSubmit = function(event) {
  event.preventDefault();
  // Start with an empty array with each click
  let result = [];

  for (let i = 1; i <= form.count.value; i++) {

    const randomWord = nouns[randomInteger(nouns.length)];
    // Add a new word with every iteration
    result.push(randomWord);

  }
  // Print the words separated by a space
  output.textContent = result.join(' ');
}

form.addEventListener('submit', handleSubmit);