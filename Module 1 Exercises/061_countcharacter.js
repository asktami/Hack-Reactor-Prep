/*
Write a function called "countCharacter".

Given a string input and a character, "countCharacter" returns the number of occurences of a given character in the given string.

var output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3
*/

function countCharacter(str, char) {
  let counter = 0;
  
  // your code here
  for (let i = 0; i < str.length; i++){
    if(str[i] === char) counter++;
  }
  return counter;
}