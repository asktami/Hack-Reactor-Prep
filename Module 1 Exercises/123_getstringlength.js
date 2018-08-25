/*
Write a function called "getStringLength".

Given a string, "getStringLength" returns the length of the given string.

Notes:
* Do NOT use any native 'length' methods.
* You might consider using 'substring' or 'slice' as alternatives.

var output = getStringLength('hello');
console.log(output); // --> 5
*/

function getStringLength(string) {
  // your code here
   var size = 0;
  
   while(string !== "") {
        string = string.slice(1);    // This is the key line.  It takes a slice of the string with all but the first character.
        
        size++;
    }
    
    return size;
}