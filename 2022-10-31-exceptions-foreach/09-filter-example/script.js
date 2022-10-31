const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

/************/
/* Verobose */
/************/

const handleItem = function(word) {

  if (word.length > 6) {
    // word is added to result
    return true;
  } else {
    // word is NOT added to result
    return false;
  }

}

const filteredResults = words.filter(handleItem);

console.log(filteredResults);

/*************************/
/* Anonymous ES6 function*/
/*************************/

const filteredResults2 = words.filter(word => {

    if (word.length > 6) {
      // word is added to result
      return true;
    } else {
      // word is NOT added to result
      return false;
    }

  });

console.log(filteredResults2);

/**************/
/* No if/else */
/**************/

const filteredResults4filteredResults3 = words.filter(word => {
  return word.length > 6;
});

console.log(filteredResults3);

/*************/
/* One-liner */
/*************/

const filteredResults4 = words.filter(word => word.length > 6);

console.log(filteredResults4);