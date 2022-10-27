'use strict';

// https://avantutor.com/blog/10-simple-javascript-for-loop-exercises/

// Exercise 1
// Get the sum of two arrays…actually the sum of all their elements.
// P.S. Each array includes only integer numbers. Output is a number too.

const arr1 = [3, 5, 22, 5,  7,  2,  45, 75, 89, 21, 2]; // --> 276

// Array 1
let sum1 = 0;
for (let i = 0; i < arr1.length; i++) {
  console.log(sum1);
  sum1 += arr1[i];
}
console.log('Sum 1: ', sum1);

// Array 2
const arr2 = [9, 2, 42, 55, 71, 22, 4,  5,  90, 25, 26]; // --> 351

let sum2 = 0;
for (let i = 0; i < arr2.length; i++) {
  console.log(sum2);
  sum2 += arr2[i];
}
console.log('Sum 2: ', sum2);

// Example output: 
// 276 + 351 = 627
const sumTotal = sum1 + sum2;
console.log(sumTotal);


// Exercise 3
// Using a for loop output the elements in reverse order

let array = [43, "what", 9, true, "cannot", false, "be", 3, true];
// Example output: 
// true 3  be  false cannot  true 9 what 43 OR each item on a new line

let newArray = [];
for (let i = array.length - 1; i >= 0; i--) {
  newArray.push(array[i]);
}

console.log(newArray); // The 90's way

console.log(array.reverse()); // The Javascript Way