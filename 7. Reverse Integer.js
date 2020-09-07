/*
https://leetcode.com/problems/reverse-integer/

7. Reverse Integer
Easy

Given a 32-bit signed integer, reverse digits of an integer.

Example 1:
Input: 123
Output: 321

Example 2:
Input: -123
Output: -321

Example 3:
Input: 120
Output: 21

Note:
Assume we are dealing with an environment which could only store integers within the 32-bit signed integer range: [−231,  231 − 1]. 
For the purpose of this problem, assume that your function returns 0 when the reversed integer overflows.

*/

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) { //mysolution
    if(x==0) return 0;
    let num = x.toString().split("");
    let new_num = [];
    for(let i=num.length-1;i>=0;i--){
        let elm = num[i];
        if(new_num.length==0 && elm==0) continue;
        new_num.push(elm);  
    }
    if(new_num[new_num.length-1]=="-") new_num = -1 * parseInt(new_num.join(""));
    else new_num = parseInt(new_num.join(""));
    if ( (new_num < -(2**31)) || (new_num > (2**31)-1) ) return 0;
    return new_num;
};
// Runtime: 88 ms, faster than 88.60% of JavaScript online submissions for Reverse Integer.
// Memory Usage: 38.3 MB, less than 70.25% of JavaScript online submissions for Reverse Integer.



console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(120));
console.log(reverse(1));
console.log(reverse(1534236469));
console.log(reverse(0));


