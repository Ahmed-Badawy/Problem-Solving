/*

https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/submissions/


153. Find Minimum in Rotated Sorted Array
Medium

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
(i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).
Find the minimum element.

You may assume no duplicate exists in the array.

Example 1:
Input: [3,4,5,1,2] 
Output: 1

Example 2:
Input: [4,5,6,7,0,1,2]
Output: 0

*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) { //my solution
    let minimum = nums.reduce((acc,elm)=>{
        if(elm<acc || acc===false) return elm;
        return acc;
    },false)
    return minimum;
};

// Runtime: 72 ms, faster than 86.09% of JavaScript online submissions for Find Minimum in Rotated Sorted Array.
// Memory Usage: 36.9 MB, less than 34.19% of JavaScript online submissions for Find Minimum in Rotated Sorted Array.



console.log(findMin([3,4,5,1,2]));




