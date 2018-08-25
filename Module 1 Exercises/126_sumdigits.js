/*
Write a function called "sumDigits".

Given a number, "sumDigits" returns the sum of all its digits.

var output = sumDigits(1148);
console.log(output); // --> 14

If the number is negative, the first digit should count as negative.

var output = sumDigits(-316);
console.log(output); // --> 4

Notes:
* In order to use some of the methods that will be most helpful to you, you will most likely want to do some string to number conversion and vice versa.
* Be sure to familiarize yourself with the "toString" method, as well as the "Number" function.

*/

function sumDigits(num) {
  // your code here  
  let str = String(num);
  let sum = 0;
  let start = 0;
  
  if(str[0] === '-'){
    sum = Number(str[1]) * -1;
    start = 2;
  }
  
  for (let i = start; i < str.length; i++){
      sum += Number(str[i]);
    }

  return sum;
}