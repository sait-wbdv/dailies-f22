
const randomItem = function(myArray) {
  const myItem = myArray[Math.floor(Math.random() * myArray.length)];
  return myItem;
}

const hobbies = [
  'pinball', 
  'programming', 
  'disc golf', 
  'live streaming', 
  'darts'
];


const randomHobby = randomItem(hobbies);
console.log(randomHobby);

const cartoonCharacters = [
  'Rick',
  'Morty',
  'Garfield',
  'Bugs Bunny',
  'Stewey',
  'Mickey Mouse'
];

const randomCharacter = randomItem(cartoonCharacters);
console.log(randomCharacter);