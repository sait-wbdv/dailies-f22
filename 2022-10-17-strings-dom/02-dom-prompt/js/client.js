const paragraph = document.querySelector('.cats');
const answer = document.querySelector('.answer');

const searchTerm = prompt('Is this word in this parapragh? Pick a word.');

/*************/
/* Example 1 */
/*************/

// const result = paragraph.innerHTML.includes(searchTerm);
// if (result === true) {
//   answer.innerHTML = "Yes! Your word is in the paragraph!"
// } else {
//   answer.innerHTML = "Nope! Hit refresh and try again!"
// }

/*************/
/* Example 2 */
/*************/
const result = paragraph.innerHTML.search(searchTerm);
answer.innerHTML = `The first occurrence of ${searchTerm} is at character ${result}!`

paragraph.innerHTML = paragraph.innerHTML.replace(searchTerm, `<strong>${searchTerm}</strong>`);
