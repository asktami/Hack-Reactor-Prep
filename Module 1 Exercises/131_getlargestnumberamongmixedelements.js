/*
Write a function called "getLargestNumberAmongMixedElements". 

Given any array, "getLargestNumberAmongMixedElements" returns the largest number in the given array.

Notes:
* The array might contain values of a type other than numbers.
* If the array is empty, it should return 0.
* If the array contains no numbers, it should return 0.

var output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
*/

function getLargestNumberAmongMixedElements(arr) {
  
  if(arr.length === 0) return 0;
  
  // do NOT set default to 0 b/c need to handle negative numbers
  let largestNum = null;
  
  for (let i = 0; i < arr.length; i++){
    
   // set comparison largestNum
   if(typeof arr[i] === 'number' && largestNum === null){
     largestNum = arr[i];
     
   } else if(typeof arr[i] === 'number' && arr[i] > largestNum){
        largestNum = arr[i];
    }
    
  }
  
  // handle no numbers found in array
  return largestNum === null ? 0 : largestNum ;
}