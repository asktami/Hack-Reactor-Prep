/*
Write a function called "getLargestElement".

Given an array, "getLargestElement" returns the largest number in the given array.

Notes:
* It should return 0 if the array is empty.

var output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;
*/

function getLargestElement(arr) {
  // your code here
  console.log('arr = ', arr);
 
  if(arr.length > 0){
    
  let largestNum = arr[0];
    
    for (let i = 1; i < arr.length; i++){
      if(arr[i] > largestNum) {
        largestNum = arr[i];
      }
    }
 
    return largestNum;
    
  } else {
    return 0;
  }
}