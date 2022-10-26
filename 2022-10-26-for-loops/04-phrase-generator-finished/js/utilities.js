export const randomInteger = function(max) {
  const randNumber = Math.random(); // Between 0 and 1
  console.log('Between 0 and 1: ', randNumber);

  const ratio = randNumber * max; // Between 0 and max0
  console.log('Between 0 and max: ', ratio);

  const integer = Math.floor(ratio); // Round down to nearest integer
  console.log('Rounded integer: ', integer);

  return integer;
}