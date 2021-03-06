/*https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/

154. Find Minimum in Rotated Sorted Array II
Hard

Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
(i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).
Find the minimum element.
The array may contain duplicates.

Example 1:
Input: [1,3,5]
Output: 1

Example 2:
Input: [2,2,2,0,1]
Output: 0
Note:

This is a follow up problem to Find Minimum in Rotated Sorted Array.
Would allow duplicates affect the run-time complexity? How and why?*/


var findMin = function(nums) { //my solution
    let minimum = nums.reduce((acc,elm)=>{
//         console.log({acc,elm})
        if(elm<acc || acc===false) return elm;
        return acc;
    },false)
    return minimum;
};
// Runtime: 68 ms, faster than 95.83% of JavaScript online submissions for Find Minimum in Rotated Sorted Array II.
// Memory Usage: 37.2 MB, less than 31.37% of JavaScript online submissions for Find Minimum in Rotated Sorted Array II.
