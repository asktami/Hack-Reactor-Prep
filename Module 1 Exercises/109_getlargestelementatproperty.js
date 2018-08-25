/*
Write a function called "getLargestElementAtProperty".

Given an object and a key, "getLargestElementAtProperty" returns the largest element in the array located at the given key.

Notes:
* If the array is empty, it should return undefined.
* If the property at the given key is not an array, it should return undefined.
* If there is no property at the key, it should return undefined.

var obj = {
  key: [1, 2, 4]
};
var output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4
*/

function getLargestElementAtProperty(obj, key) {
  // your code here
  let arr = obj[key];
  let largest = 0;
  
  if(Array.isArray(arr)  && arr.length > 0) {
    
    for (let i = 0; i < arr.length; i++){
      if(arr[i] > largest) largest = arr[i];
    }
    
   return largest;
    
  } else {
   return undefined;
  }
  
}