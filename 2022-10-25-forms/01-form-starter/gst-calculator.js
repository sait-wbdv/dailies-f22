// Create form and button variables here


// Note: Fat arrow ES6 Syntax
const calculateGST = () => {
  // Refactor to assign value from form field
  const subTotal = 42;

  const total = subTotal * 0.05 + subTotal;
  
  // Refactor to output response to paragraph element  
  console.log(`$${subTotal} plus GST is $${total.toFixed(2)}.`);
}

// Add `submit` event listener to button here