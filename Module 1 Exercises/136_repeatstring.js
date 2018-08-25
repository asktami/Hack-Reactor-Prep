/*
Write a function called "repeatString".

Given a string and a number, "repeatString" returns the given string repeated the given number of times.

var output = repeatString('code', 3);
console.log(output); // --> 'codecodecode'
*/

function repeatString(string, num) {
  // your code here
  
  if(num === 0) return '';
  if(num === 1) return string;
  
  return string + repeatString(string, num - 1) 

}