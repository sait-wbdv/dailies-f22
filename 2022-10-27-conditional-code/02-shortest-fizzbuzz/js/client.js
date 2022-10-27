'use strict';

// const fizzbuzzOriginal = [...Array(100)].map((_,i)=>(++i%3?"":"Fizz")+(i%5?"":"Buzz")||i);

const fizzbuzzFormatted = [...Array(100)].map(
  (_,i)=> // 1. Loop through every item and create a new array by pushing a new item to fizzbuzzFormatted
  // For each item:
  // 5. Increment i after lines 10-16 execute
  (++ 
  // 2. If divisible by 3, print Fizz else ""
  i%3?"":"Fizz")
  // 4. Add Step 2 and 3 into one string
  + 
  // 3. If divisible by 5, print Buzz else ""
  (i%5?"":"Buzz") 
  // 6. Print i if "" + "", otherwise print "Fizz", "Buzz" or "FizzBuzz"
  ||
  i); 

console.log(fizzbuzzFormatted);

