/*
Write a function called "removeOddValues".

Given an object, "removeOddValues" removes any properties whose valuse are odd numbers.

var obj = {
  a: 2,
  b: 3,
  c: 4
};
removeOddValues(obj);
console.log(obj); // --> { a: 2, c: 4 }
*/

function removeOddValues(obj) {
  // your code here
  
  for (let key in obj){
    if(obj[key] % 2) delete obj[key];
  }
}