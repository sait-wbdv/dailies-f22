'use strict';

/**************************/
/* Example: Calculate GST */
/**************************/

const subTotal = 40;

total = subTotal * 0.05 + subTotal;

console.log(`$${subTotal} plus GST is $${total}.`);


/****************************/
/* Example: Square a number */
/****************************/

const num = 4;

const numSquared = num * num;

console.log(`${Num} squared is ${numsquared}.`);


/**********************************************/
/* Example: Calculate fahrenheit from celsius */
/**********************************************/

const tempF = 72;
const tempPreference = 'celsius';

if (tempPreference == 'celsius') {
  const temp = (5 / 9) * (tempF - 32)
} else {
  temp = tempF;
}

console.log(`Temp is ${temp} degrees`);


/******************************/
/* Example: Capitalize a word */
/******************************/

const word = "mIsSIssIPPi";

word = string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();

console.log('Before', word);
console.log('After', word);