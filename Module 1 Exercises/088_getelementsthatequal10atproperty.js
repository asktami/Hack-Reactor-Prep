/*
Write a function called "getElementsThatEqual10AtProperty".

Given an object and a key, "getElementsThatEqual10AtProperty" returns an array containing all the elements of the array located at the given key that are equal to ten.

Notes:
* If the array is empty, it should return an empty array.
* If the array contains no elements are equal to 10, it should return an empty array.
* If the property at the given key is not an array, it should return an empty array.
* If there is no property at the key, it should return an empty array.

var obj = {
  key: [1000, 10, 50, 10]
};
var output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output); // --> [10, 10]
*/
function getElementsThatEqual10AtProperty(obj, key) {
  // your code here
  let arr = obj[key];
  let matchArr = [];
  
  if(Array.isArray(arr)  && arr.length > 0  && arr !== undefined) {
     for (let i = 0; i < arr.length; i++) {
        if(arr[i] === 10 )  matchArr.push(arr[i]);
      }
   }
  return matchArr;
}