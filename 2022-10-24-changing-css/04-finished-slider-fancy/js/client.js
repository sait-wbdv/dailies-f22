'use strict';

// Create form element variables
// Checkbox
const darkMode = document.querySelector('input[type=checkbox]');
const darkModeLabel = document.querySelector('label[for-dark-mode]');

// Slider
const slider = document.querySelector('input[type=range]');
const root = document.querySelector(':root');

// Create body variable
const body = document.querySelector('body');

const toggleDarkMode = function() {
  if (darkMode.checked) {
    body.classList.replace('light','dark');
    darkModeLabel.innerHTML = "Light Mode";
  } else {
    body.classList.replace('dark','light');
    darkModeLabel.innerHTML = "Dark Mode";
  }
}

const handleSlider = function() {
  // set variable on inline style
  root.style.setProperty("--hue", slider.value);

}

darkMode.addEventListener('click', toggleDarkMode);
slider.addEventListener('input', handleSlider);