
const searchParagraph = function() {
  const paragraph = document.querySelector('.cats');
  const paragraphContent = paragraph.innerHTML;
  
  const searchTerm = prompt('Is this word in this paragraph? Pick a word to search for!');
  const answer = document.querySelector('.answer');
  
  const result = paragraphContent.search(searchTerm);
  answer.innerHTML = `The first occurrence of ${searchTerm} is at character ${result}!`
  
  paragraph.innerHTML = paragraphContent.replace(searchTerm, `<strong>${searchTerm}</strong>`);
}

const button = document.querySelector('button');

button.addEventListener('click', searchParagraph);