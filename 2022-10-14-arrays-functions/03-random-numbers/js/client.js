const hobbies = [
  'pinball', 
  'programming', 
  'disc golf', 
  'live streaming', 
  'darts'
]

// Find length of array
const length = hobbies.length;
console.log('Length', length);

// Find random num between 0-1
const randNumber = Math.random();
console.log('Random Number', randNumber);

// Find floating point number between 1 and array.length
const arrayRatio = randNumber * length;
console.log('Length ratio', arrayRatio);

// Round floating point num to integer (which will be between 0 and array.length)
const lowInteger = Math.floor(arrayRatio);
console.log('Random index', lowInteger);

// Find item based on the random integer (index)
const randomHobby = hobbies[lowInteger];
console.log('Random item', randomHobby);
