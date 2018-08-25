/*
Write a function called "getIndexOf".

Given a character and a string, "getIndexOf" returns the first position of the given character in the given string.

Notes:
* Strings are zero indexed, meaning the first character in a string is at position 0.
* When a string contains more than one occurrence of a character, it should return the index of its first occurrence.
* If the character does not exist in the string, it should return -1.
* Do not use the native indexOf function in your implementation.

var output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2
*/

function getIndexOf(char, str) {
  // your code here
 
  let result = -1;
  
  for( let i = 0; i < str.length; i++){
    
    if(str[i] === char){
      result = i;
      break;
    }
  }
 
  return result;
}