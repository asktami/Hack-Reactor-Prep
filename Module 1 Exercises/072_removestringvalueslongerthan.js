/*
Write a function called "removeStringValuesLongerThan".

Given an number and an object, "removeStringValuesLongerThan" removes any properties on the given object whose values are strings longer than the given number.

var obj = {
  name: 'Montana',
  age: 20,
  location: 'Texas'
};
removeStringValuesLongerThan(6, obj);
console.log(obj); // { age: 20, location: 'Texas' }
*/

function removeStringValuesLongerThan(num, obj) {
  // your code here
  for (let key in obj){
    if(typeof obj[key] === 'string' && obj[key].length > num) delete obj[key];
  }

}