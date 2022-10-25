// Create form and output variables here
const form = document.querySelector('form');
const output = document.querySelector('.output');

const tempConverter = function(event) {
  // Refactor to assign value from form field
  event.preventDefault();

  // TODO: Check for empty `conversion` value

  const temp = form.temp.value;
  const conversion = form.conversion.value;

  if (conversion === 'to-celsius') {
    const newTemp = (5 / 9) * (temp - 32);

    // Refactor to output response to paragraph element  
    output.innerHTML = `${temp} degrees Fahrenheit is ${newTemp.toFixed(1)} degrees Celsius!`;

  } else if (conversion === 'to-fahrenheit') {
    const newTemp = (temp * 9/5) + 32;

    // Refactor to output response to paragraph element  
    output.innerHTML = `${temp} degrees Celsius is ${newTemp.toFixed(1)} degrees Fahrenheit!`;
  }

}

// Add `submit` event listener to button here
form.addEventListener('submit', tempConverter);