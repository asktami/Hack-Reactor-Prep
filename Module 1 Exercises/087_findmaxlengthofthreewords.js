/*
Write a function called "findMaxLengthOfThreeWords".

Given 3 words, "findMaxLengthOfThreeWords" returns the length of the longest word.

var output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output); // --> 3
*/

function findMaxLengthOfThreeWords(word1, word2, word3) {
  // your code here
  
  let longest = word1.length;
  
  if(word2.length > longest){
    longest = word2.length;
  }
  
  if(word3.length > longest){
    longest = word3.length;
  }
  
  return longest;
}