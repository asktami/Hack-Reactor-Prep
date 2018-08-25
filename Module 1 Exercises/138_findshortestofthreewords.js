/*
Write a function called "findShortestOfOfThreeWords".

Given 3 strings, "findShortestOfOfThreeWords" returns the shortest of the given strings.

Notes:
* If there are ties, it should return the first word in the parameters list.

var output = findShortestOfOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'
*/

function findShortestOfOfThreeWords(word1, word2, word3) {
  // your code here

  let result = word1;
  
  if(word2.length < result.length) result = word2;
  
  if(word3.length < result.length) result = word3;
  
  return result;
}