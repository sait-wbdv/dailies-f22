'use strict';

/**************************/
/* Example: Calculate GST */
/**************************/

const subTotal = 40;

const total = subTotal * 0.05 + subTotal;

console.log(`$${subTotal} plus GST is $${total}.`);


/****************************/
/* Example: Square a number */
/****************************/

const num = 4;

const numSquared = num * num;

console.log(`${num} squared is ${numSquared}.`);


/**********************************************/
/* Example: Calculate fahrenheit from celsius */
/**********************************************/

const tempF = 72;
const tempPreference = 'celsius';
let temp;

if (tempPreference == 'celsius') {
  temp = (5 / 9) * (tempF - 32)
} else {
  temp = tempF;
}

console.log(`Temp is ${temp.toFixed(1)} degrees`);


/******************************/
/* Example: Capitalize a word */
/******************************/

let word = "mIsSIssIPPi";
console.log('Before', word);

word = word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
console.log('After', word);