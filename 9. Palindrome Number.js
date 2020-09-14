/*
https://leetcode.com/problems/palindrome-number/

9. Palindrome Number
Easy
Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.

Example 1:
Input: 121
Output: true

Example 2:
Input: -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.

Example 3:
Input: 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
Follow up:
Coud you solve it without converting the integer to a string?
*/




/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) { //my solutino 1
    if(x<0) return false;
    if(x.toString().split("").reverse().join("")==x) return true;
    return false;
};
// Runtime: 224 ms, faster than 60.84% of JavaScript online submissions for Palindrome Number.
// Memory Usage: 46.9 MB, less than 31.51% of JavaScript online submissions for Palindrome Number.


var isPalindrome2 = function(x) { //my solution 2
    if(x<0) return false;
    let map1 = x.toString().split("");
    for(let i=0;i<map1.length;i++){
        if(map1[i]!=map1[map1.length-1-i]) return false;
    }
    return true;
};
/*
Runtime: 212 ms, faster than 78.56% of JavaScript online submissions for Palindrome Number.
Memory Usage: 46.3 MB, less than 61.67% of JavaScript online submissions for Palindrome Number.
*/



console.log(isPalindrome("111101111"));
