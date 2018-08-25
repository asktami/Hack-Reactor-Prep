/*
Write a function called "transformEmployeeData" that transforms some employee data from one format to another.

The argument will look something like this:
[
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
]

Given that input, the return value should look like this:
[
    {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
    {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
]

Note that the input may have a different number of rows or different keys than the given sample. 

For example, let's say the HR department adds a "tshirtSize" field to each employee record. Your code should flexibly accommodate that.

Starter Code :
*/

function transformEmployeeData(array) {
  // your code here
  let returnArray = [];
  
  // loop thru the parent array
  for (let i = 0; i< array.length; i++) {
    
    let currentElement = array[i];
    let returnObj = {};

     // loop thru the nested array
    for (let j=0; j < currentElement.length; j++) {
      
    let currentPair = currentElement[j];
    
        if(Array.isArray(currentPair)) {
          let eKey = currentPair[0];
          let eVal = currentPair[1];
        
          returnObj[eKey] = eVal;
        }
    }
    
    returnArray.push(returnObj);
  }
    return returnArray;
}