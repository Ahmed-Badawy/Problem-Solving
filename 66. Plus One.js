/*
https://leetcode.com/problems/plus-one/

66. Plus One
Easy

Given a non-empty array of digits representing a non-negative integer, increment one to the integer.
The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.
You may assume the integer does not contain any leading zero, except the number 0 itself.

 
Example 1:
Input: digits = [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.

Example 2:
Input: digits = [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.

Example 3:
Input: digits = [0]
Output: [1]
 

Constraints:
1 <= digits.length <= 100
0 <= digits[i] <= 9
*/



/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) { //mysolution
    if(digits.length==0) return [];
    let new_last = "";
    let last = digits.pop();
    if(last<9) digits.push(last+1);
    else{
       digits = plusOne(digits);
       if(digits.length==0) digits.push(1);
       digits.push(0);
    }
    return digits;
};
// Runtime: 80 ms, faster than 46.47% of JavaScript online submissions for Plus One.
// Memory Usage: 36.8 MB, less than 37.66% of JavaScript online submissions for Plus One.



var plusOne = function(digits) {  // best solution
    for(let i =digits.length-1; i>=0; i--){
        if(digits[i]!==9){
            digits[i]++
            return digits
        }
        else digits[i]=0; 
    }
    digits.unshift(1);
    return digits
};
// Runtime: 68 ms, faster than 93.96% of JavaScript online submissions for Plus One.
// Memory Usage: 36.8 MB, less than 33.83% of JavaScript online submissions for Plus One.


// console.log(plusOne([4,3,2,3]));
// console.log(plusOne([9]));
// console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,9]));
// console.log(plusOne([9,9,9,9]));



