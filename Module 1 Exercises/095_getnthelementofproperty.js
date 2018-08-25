/*
Write a function called "getNthElementOfProperty".

Given an object and a key, "getNthElementOfProperty" returns the nth element of an array located at the given key.

Notes:
* If the array is empty, it should return undefined.
* If n is out of range, it should return undefined.
* If the property at the given key is not an array, it should return undefined.
* If there is no property at the key, it should return undefined.

var obj = {
  key: [1, 2, 6]
};
var output = getNthElementOfProperty(obj, 'key', 1);
console.log(output); // --> 2
*/
function getNthElementOfProperty(obj, key, n) {
  // your code here
  let arr = obj[key];
  let result = '';
  
  if(Array.isArray(arr)) {
    return arr[n];
  } else {
    return undefined;
  }
}