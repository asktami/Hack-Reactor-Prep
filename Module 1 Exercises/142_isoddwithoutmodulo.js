/*
Write a function called "isOddWithoutModulo".

Given a number, "isOddWithoutModulo" returns whether the passed in number is odd.

Note:
* It does so without using the modulo operator (%). 
* It should work for negative numbers and zero.

var output = isOddWithoutModulo(17);
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


function isOddWithoutModulo(num) {
  // your code here
  if (num === 0) return false;
  
  if (modulo(Math.abs(num), 2) !== 0) return true;
  
  return false;

}