'use strict';

// Assign initial values
const billTotal = 40;
const tipRate = .18;
const tipPercentage = `${tipRate * 100}%`;


// Calculate tip
const tipAmount = billTotal * tipRate;
const paymentTotal = billTotal + tipAmount;

console.log(tipPercentage, tipAmount.toFixed(2), paymentTotal.toFixed(2));

// Recommended: Output result with template literals (ES6)
console.log(`${tipPercentage} tip on $${billTotal.toFixed(2)} is $${paymentTotal.toFixed(2)}`);

// Old, tedious way (ES5)
console.log(tipPercentage + " tip on $" + billTotal.toFixed(2) + " is $" + paymentTotal.toFixed(2));