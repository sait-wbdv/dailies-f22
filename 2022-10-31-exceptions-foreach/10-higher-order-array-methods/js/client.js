import { characters } from './disney-characters.js';

/*************/
/* .filter() */
/*************/

const filteredCharacters = characters.filter(function(character) {
  return character.films.length > 2;
});

console.log(filteredCharacters);

/**********/
/* .map() */
/**********/

const charactersSimplified = characters.map(function(character) {
  return {
    name: character.name,
    image: character.imageUrl,
    numFilms: character.films.length,
    numVideoGames: character.videoGames.length
  };
})

console.log(charactersSimplified);

/***********/
/* .find() */
/***********/

const absolum = characters.find(function(character) {
  return character.name === "Absolem";
})

console.log(absolum);

const filmStar = characters.find(function(character) {
  return character.films.length > 3;
})

console.log(filmStar);