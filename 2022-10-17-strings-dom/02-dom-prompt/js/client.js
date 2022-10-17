const paragraph = document.querySelector('.cats');
const paragraphContent = paragraph.innerHTML;

const searchTerm = prompt('Is this word in this paragraph? Pick a word to search for!');
const answer = document.querySelector('.answer');


/*************/
/* Example 1 */
/*************/

// const result = paragraphContent.includes(searchTerm);
// if (result === true) {
//   answer.innerHTML = "Yes! Your word is in the paragraph!"
// } else {
//   answer.innerHTML = "Nope! Hit refresh and try again!"
// }

/*************/
/* Example 2 */
/*************/
const result = paragraphContent.search(searchTerm);
answer.innerHTML = `The first occurrence of ${searchTerm} is at character ${result}!`

paragraph.innerHTML = paragraphContent.replace(searchTerm, `<strong>${searchTerm}</strong>`);
