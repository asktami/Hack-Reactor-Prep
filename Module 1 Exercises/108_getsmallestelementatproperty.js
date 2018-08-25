/*
Write a function called "getSmallestElementAtProperty".

Given an object and a key, "getSmallestElementAtProperty" returns the smallest element in the array located at the given key. 

Notes:
* If the array is empty, it should return undefined.
* If the property at the given key is not an array, it should return undefined. 
* If there is no property at the key, it should return undefined.

var obj = {
  key: [2, 1, 5]
};
var output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1
*/

function getSmallestElementAtProperty(obj, key) {
  // your code here
  let arr = obj[key];
  
  if(Array.isArray(arr)){
    
  let smallest = arr[0];
    
    for (let i = 0; i < arr.length; i++) {
      if(arr[i].length < smallest.length) smallest = arr[i];
    }
    
    return smallest;
    
  } else {
    
    return undefined;
  }
}