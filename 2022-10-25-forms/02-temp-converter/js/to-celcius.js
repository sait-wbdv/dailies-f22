// Create form and output variables here
const form = document.querySelector('form');
const output = document.querySelector('.output');

const toCelcius = function(event) {
  // Refactor to assign value from form field
  event.preventDefault();

  const tempF = form.temp.value;

  const tempC = (5 / 9) * (tempF - 32);

  // Refactor to output response to paragraph element  
  output.innerHTML = `${tempF} degrees Fahrenheit is ${tempC.toFixed(1)} degrees Celcius!`;

}

// Add `submit` event listener to button here
form.addEventListener('submit', toCelcius);