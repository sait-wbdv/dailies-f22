'use strict';

// Create form element variable
const darkMode = document.querySelector('input');
const darkModeLabel = document.querySelector('label');

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

darkMode.addEventListener('click', toggleDarkMode);