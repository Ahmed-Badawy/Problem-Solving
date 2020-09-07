/*

https://leetcode.com/problems/two-sum/

1. Two Sum
Easy

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

 
Example 1:
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:
Input: nums = [3,2,4], target = 6
Output: [1,2]

Example 3:
Input: nums = [3,3], target = 6
Output: [0,1]
 
Constraints:
2 <= nums.length <= 105
-109 <= nums[i] <= 109
-109 <= target <= 109
Only one valid answer exists.


*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) { //best solution ()
    let i = 0;
    let hashMap = {}
    while(i<nums.length){
        if(hashMap[nums[i]]!=undefined) return [i,hashMap[nums[i]]]; 
        hashMap[target-nums[i]] = i;
        i++;
    }
    return [];
};
// Runtime: 68 ms, faster than 97.62% of JavaScript online submissions for Two Sum.
// Memory Usage: 37.5 MB, less than 44.05% of JavaScript online submissions for Two Sum.
// Time complexity : O(n)O(n). We traverse the list containing nn elements exactly twice. Since the hash table reduces the look up time to O(1)O(1), the time complexity is O(n)O(n).
// Space complexity : O(n)O(n). The extra space required depends on the number of items stored in the hash table, which stores exactly nn elements.



var twoSum = function(nums, target) { //mysolution (brutal force) O(n^2)
    let i = 0;
    while(i<=nums.length-2){
        for(let j=0 ; j<=nums.length-1 ; j++){
            if(i==j) continue;
            if(nums[i]+nums[j]==target) return [i,j]
        }
        i++;
    }
    return [0,0];
};
// Runtime: 192 ms, faster than 19.98% of JavaScript online submissions for Two Sum.
// Memory Usage: 37.1 MB, less than 67.37% of JavaScript online submissions for Two Sum.





console.log(twoSum([3,2,4],5));
console.log(twoSum([3,2,3],6));




