const moods = ['happy', 'sad', 'excited'];

/******************/
/* Named function */
/******************/

const handleItem = function(item, index) {
  console.log(index, item);
}

moods.forEach(handleItem);

/**********************/
/* Anonymous function */
/**********************/

moods.forEach(function(item, index) {
  console.log(index, item);
})

/**********************/
/* Anonymous function */
/**********************/

moods.forEach((item, index) => {
  console.log(index, item);
})