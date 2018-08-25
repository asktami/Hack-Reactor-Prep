/*
Write a function called "isEvenWithoutModulo".

Given a number, "isEvenWithoutModulo" returns whether it is even. 

Notes:
* It does so without using the modulo operator (%). 
* It should work for negative numbers and zero.

var output = isEvenWithoutModulo(8);
console.log(output); // --> true
*/
function modulo(num1, num2) {
  // my code from a previous problem
  if(num1 === 0) return 0;
  if(num2 === 0) return 'NaN';
  if(isNaN(num1) || isNaN(num2)) return 'NaN';
  
  q = parseInt(num1 / num2);  //finding quotient (integer part only)
  p = q * num2;     //finding product
  return num1 - p;  //finding modulus
}


function isEvenWithoutModulo(num) {
  // your code here
  if (num === 0) return true;
  
  if (modulo(Math.abs(num), 2) === 0) return true;
  
  return false;
}