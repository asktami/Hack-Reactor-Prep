/*
Write a function called "getEvenLengthWordsAtProperty".

Given an object and a key, "getEvenLengthWordsAtProperty" returns an array containing all the even length word elements of the array located at the given key.

Notes:
* If the array is empty, it should return an empty array.
* If it contains no even length elements, it should return an empty array.
* If the property at the given key is not an array, it should return an empty array.
* If there is no property at the key, it should return an empty array.

var obj = {
  key: ['a', 'long', 'game']
};
var output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']
*/

function getEvenLengthWordsAtProperty(obj, key) {
  // your code here
  let evenWords = [];
  let arr= obj[key];
  
  if(Array.isArray(arr)){
    for (let i = 0; i < arr.length; i++){
      if(arr[i].length % 2 === 0) evenWords.push(arr[i]);
    }
    
  }

  return evenWords;
}