/*
Write a function called "getAllElementsButNth".

Given an array and an index, "getAllElementsButNth" returns an array with all the elements but the nth.

var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']
*/

function getAllElementsButNth(array, n) {
  // your code here
  
  let result = [];
  
  for(let i = 0; i < array.length; i++){
    if(i !== n) result.push(array[i]);
  }

  return result;
}