/*
Write a function called "filterOddElements".

Given an array of numbers, "filterOddElements" returns an array containing only the odd numbers of the given array.

var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]
*/

function filterOddElements(arr) {
  // your code here
  let result = [];
  for (let i = 0; i < arr.length; i++){
    if(arr[i] % 2) result.push(arr[i]);
  }
  
  return result;
}