/*
Write a function called "multiply".

Given 2 numbers, "multiply" returns their product.

Notes:
* It should not use the multiply operator (*).\

var output = multiply(4, 7);
console.log(output); // --> 28
*/

function multiply(num1, num2) {
  // your code here
      
    if(num1 === 0 || num2 === 0) return 0;
    if(isNaN(num1) || isNaN(num2)) return 'NaN';

    if (num2 > 0) return num1 + multiply(num1, num2 - 1);

    // HANDLE IF EITHER NUMBER IS NEGATIVE
    if (num2 < 0) return -multiply(num1, -num2);
}