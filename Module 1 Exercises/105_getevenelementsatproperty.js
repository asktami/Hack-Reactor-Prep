/*
Write a function called "getEvenElementsAtProperty".

Given an object and a key, "getEvenElementsAtProperty" returns an array containing all the even elements of the array located at the given key.

Notes:
* If the array is empty, it should return an empty array.
* If the array contains no even elements, it should return an empty array.
* If the property at the given key is not an array, it should return an empty array.
* If there is no property at the given key, it should return an empty array.

var obj = {
  key: [1000, 11, 50, 17]
};
var output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]
*/

function getEvenElementsAtProperty(obj, key) {
  // your code here
  let arr = obj[key];
  let result = [];
  
  if(Array.isArray(arr)){
    for (let i = 0; i < arr.length; i++){
      if(arr[i] % 2 === 0) result.push(arr[i]);
    }
  }

  return result;
}