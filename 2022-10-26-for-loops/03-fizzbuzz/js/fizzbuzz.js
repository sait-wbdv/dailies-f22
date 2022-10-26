// const isDiviz = (operand, divisor) => {
//   if (operand % divisor === 0) {
//     return true;
//   } else {
//     return false;
//   }
// } 
const isDiviz = (operand, divisor) => {
  // Tests if operand is divisible by divisor
  return operand % divisor === 0;
} 

for (let i = 1; i <= 100; i++) {
  if (isDiviz(i, 15)) {
    console.log('FizzBuzz');
  } else if (isDiviz(i, 5)) {
    console.log('Buzz');
  } else if (isDiviz(i, 3)) {
    console.log('Fizz');
  } else {
    console.log(i);
  }
}