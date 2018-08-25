/*
Write a function called "getLongestWordOfMixedElements".

Given an array of mixed types, "getLongestWordOfMixedElements" returns the longest string in the given array.

Notes:
* If the array is empty, it should return an empty string (""). 
* If the array contains no strings; it should return an empty string.

var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'
*/

function getLongestWordOfMixedElements(arr) {
  // your code here
  if(arr.length === 0) return "";
  
  let longest = '';
  
  for(let i = 0; i < arr.length ; i++){
    if(typeof arr[i] === 'string'){
      
      if(longest === '') {
        longest = arr[i];
      } else if(arr[i].length > longest.length) {
        longest = arr[i];
      }
      
    }
  }

  return longest;
}