/*
Write a function called "removeNumbersLargerThan".

Given a number and an object, "removeNumbersLargerThan" removes any properties whose values are numbers greater than the given number.

var obj = {
  a: 8,
  b: 2,
  c: 'montana'
}
removeNumbersLargerThan(5, obj);
console.log(obj); // --> { b: 2, c: 'montana' }
*/

function removeNumbersLargerThan(num, obj) {
  // your code here
  /* START SOLUTION */
  
  for (let key in obj) {
    if(obj[key] > num) delete obj[key];
  }
}