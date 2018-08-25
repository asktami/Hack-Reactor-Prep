/*
Write a function called "getOddElementsAtProperty".

Given an object and a key, "getOddElementsAtProperty" returns an array containing all the odd elements of the array located at the given key. 

Notes:
* If the array is empty, it should return an empty array.
* If it contains no odd elements, it should return an empty array.
* If the property at the given key is not an array, it should return an empty array.
* If there is no property at the key, it should return an empty array.

var obj = {
  key: [1, 2, 3, 4, 5]
};
var output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]
*/

function getOddElementsAtProperty(obj, key) {
  // your code here
  let arr = obj[key];
  let result = [];
  
  if(Array.isArray(arr)){
    for (let i = 0; i < arr.length; i++){
      if(arr[i] % 2) result.push(arr[i]);
    }
  }

  return result;
}