/*
Write a function called "findSmallestElement".

Given an array of numbers, "findSmallestElement" returns the smallest number within the given array.

Notes:
* If the given array is empty, it should return 0.

var output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1
*/

function findSmallestElement(arr) {
  // your code here
  
  let smallest = 0;
  
  if(arr.length > 0){
    
    smallest = arr[0];
    
    for (let i = 1; i < arr.length; i++){
      if(arr[i] < smallest) {
        smallest = arr[i];
      }
    }
  }

  return smallest;
}