// Create form and button variables here


const capitalize = function() {
  // Refactor to assign value from form field
  let string = "mIsSIssIPPi";

  string = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  
  // Refactor to output response to paragraph element
  console.log(string);
}

// Add `submit` event listener to button here