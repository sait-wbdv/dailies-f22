'use strict';

// Goal: take a sub-total and calculate GST with optional PST
const subTotal = 50; // Amount of bill before taxes
const gstTotal = 50 * 0.05; // Amount of GST
let total = subTotal + gstTotal; // Amount after GST added

const province = 'BC';
let pstTotal = 0; // Amount of PST

if (province === 'BC') {
  pstTotal = subTotal * 0.07;
  total = total + pstTotal;
}

console.log(subTotal.toFixed(2), gstTotal.toFixed(2), pstTotal.toFixed(2), total.toFixed(2));

console.log(`The tax on $${subTotal.toFixed(2)} is $${(gstTotal + pstTotal).toFixed(2)} for a total of $${total.toFixed(2)}.`)