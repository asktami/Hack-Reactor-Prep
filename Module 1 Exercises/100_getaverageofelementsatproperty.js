/*
Write a function called "getAverageOfElementsAtProperty".

Given an object and a key, "getAverageOfElementsAtProperty" returns the average of all the elements in the array located at the given key. 

Notes:
* If the array at the given key is empty, it should return 0.
* If the property at the given key is not an array, it should return 0.
* If there is no property at the given key, it should return 0.


var obj = {
  key: [1, 2, 3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2
*/

function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  let arr = obj[key];
  let sum = 0;
  let count = 0;
 
  if(Array.isArray(arr)) {
    count = arr.length;
    
    for(let i = 0; i < arr.length; i++){
      sum += arr[i];
    }
  }

  return count > 0  ? sum/count : 0;
}