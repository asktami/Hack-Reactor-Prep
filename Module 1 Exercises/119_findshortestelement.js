/*
Write a function called "findShortestElement".

Given an array, "findShortestElement" returns the shortest string within the given array.

Notes:
* If there are ties, it should return the first element to appear.
* If the given array is empty, it should return an empty string.

var output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'
*/

function findShortestElement(arr) {
  // your code here

  let shortest = '';
  
  if(arr.length > 0){
    shortest = arr[0];
      
    for (let i = 1; i < arr.length; i++){
      if(arr[i].length < shortest.length) {
        shortest = arr[i];
      }
    }
  }
  
  return shortest;
}