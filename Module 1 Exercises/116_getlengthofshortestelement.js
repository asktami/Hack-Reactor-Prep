/*
Write a function called "getLengthOfShortestElement".

Given an array, "getLengthOfShortestElement" returns the length of the shortest string in the given array.

Notes:
* It should return 0 if the array is empty.

var output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
*/

function getLengthOfShortestElement(arr) {
  // your code here
  let shortest = 0;
  
  if(arr.length > 0) {
    shortest = arr[0].length;
 
  for (let i = 1; i < arr.length; i++){
    if(arr[i].length < shortest ) {
      shortest = arr[i].length;
    }
  }
    
 }
  
  return shortest;
}