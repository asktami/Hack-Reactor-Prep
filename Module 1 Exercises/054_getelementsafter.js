/*
Write a function called "getElementsAfter".

Given an array and an index, "getElementsAfter" returns a new array with all the elements after (but not including) the given index.

var output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output); // --> ['d', 'e']
*/

function getElementsAfter(array, n) {
  // your code here
  let newArray = array.slice(n + 1);
  return newArray;

}