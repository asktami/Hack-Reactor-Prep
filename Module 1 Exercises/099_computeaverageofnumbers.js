/*
Write a function called "computeAverageOfNumbers".

Given an array of numbers, "computeAverageOfNumbers" returns their average. 

Notes:
* If given an empty array, it should return 0.

var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3
*/

function computeAverageOfNumbers(nums) {
  // your code here
  let sum = 0;
  let count = nums.length;
 
  for(let i = 0; i < nums.length; i++){
    sum += nums[i];
  }

  return count > 0 ? sum/count : 0;
 
}