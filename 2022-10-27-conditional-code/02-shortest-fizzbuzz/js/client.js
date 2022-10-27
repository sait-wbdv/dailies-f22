'use strict';

const fizzbuzzOriginal = [...Array(100)].map((_,i)=>(++i%3?"":"Fizz")+(i%5?"":"Buzz")||i);

const fizzbuzzFormatted = [...Array(100)].map(
  (_,i)=> // 1. Loop through every item and create a new array
  // For each item:
  // 6. Increment i after lines 5-9 execute
  (++ 
  // 2. If divisible by 3, print Fizz else ""
  i%3?"":"Fizz")
  // 4. Add Step 1 and 2 into one string
  + 
  // 3. If divisible by 5, print Buzz else ""
  (i%5?"":"Buzz") 
  // 5. Print i if "" + ""
  ||
  i); 

console.log(fizzbuzzFormatted);

