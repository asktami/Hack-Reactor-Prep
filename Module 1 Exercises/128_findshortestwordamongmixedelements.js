/*
Write a function called "findShortestWordAmongMixedElements".

Given an array, "findShortestWordAmongMixedElements" returns the shortest string within the given array.

Notes:
* If there are ties, it should return the first element to appear in the given array.
* Expect the given array to have values other than strings.
* If the given array is empty, it should return an empty string.
* If the given array contains no strings, it should return an empty string.

var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
*/
function findShortestWordAmongMixedElements(arr) {
  // your code here
  let shortWord = '';
  if(arr.length === 0) return '';
  
  for (let i = 0; i < arr.length; i++){
    if(typeof arr[i] === 'string') {
      if(shortWord === '') {
        shortWord = arr[i];
      } else if(arr[i].length < shortWord.length) {
         shortWord = arr[i];
      }
    }
  }
  
return shortWord;
}