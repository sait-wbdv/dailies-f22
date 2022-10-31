const moods = ['happy', 'sad', 'excited'];

let output = '';

const handleItem = function(item) {
  console.log(item);
  output += `<li>${item}</li>`
}

moods.forEach(handleItem);

document.querySelector('body').innerHTML = `<ul>${output}</ul>`;