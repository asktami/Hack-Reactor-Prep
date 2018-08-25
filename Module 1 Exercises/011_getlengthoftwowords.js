/*
Write a function called "getLengthOfTwoWords".
Given 2 words, "getLengthOfTwoWords" returns the sum of their lengths.
var output = getLengthOfTwoWords('some', 'words');
console.log(output); // --> 9
*/

function getLengthOfTwoWords(word1, word2) {
  // your code here
  
  return Number(word1.length) + Number(word2.length);
}