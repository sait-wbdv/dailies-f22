'use strict';

// Goal: take a sub-total and calculate GST with optional PST
const subTotal = 50; // Amount of bill before taxes
const gstTotal = 50 * 0.05; // Amount of GST
let total = subTotal + gstTotal; // Amount after GST added

// Just the facts
console.log(subTotal, gstTotal, total);

// Fancy
console.log(`The tax on $${subTotal.toFixed(2)} is $${gstTotal.toFixed(2)} for a total of $${total.toFixed(2)}.`)