// Create form and button variables here


// Fat arrow ES6 Syntax
const calculateTip = () => {
  // Refactor to assign value from form fields
  const billTotal = 60;
  const tipRate = 0.18;

  const tip = subTotal * rate;
  const tipPercentage = `${rate * 100}%`
  
  // Refactor to output response to paragraph element  
  console.log(`${tipPercentage} tip on $${subTotal} is $${tip.toFixed(2)}.`);
}

// Add `submit` event listener to button here