/*
https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

167. Two Sum II - Input array is sorted
Easy

Given an array of integers that is already sorted in ascending order, find two numbers such that they add up to a specific target number.
The function twoSum should return indices of the two numbers such that they add up to the target, where index1 must be less than index2.

Note:
Your returned answers (both index1 and index2) are not zero-based.
You may assume that each input would have exactly one solution and you may not use the same element twice.
 

Example 1:
Input: numbers = [2,7,11,15], target = 9
Output: [1,2]
Explanation: The sum of 2 and 7 is 9. Therefore index1 = 1, index2 = 2.

Example 2:
Input: numbers = [2,3,4], target = 6
Output: [1,3]

Example 3:
Input: numbers = [-1,0], target = -1
Output: [1,2]
 

Constraints:
2 <= nums.length <= 3 * 104
-1000 <= nums[i] <= 1000
nums is sorted in increasing order.
-1000 <= target <= 1000


*/


/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) { //my solution
    let i=0;
    while(i<numbers.length){
        if(numbers[i]>target) break;
        let j = i+1, sum = Number.NEGATIVE_INFINITY;
        while(j<numbers.length && sum<=target){
        	sum = numbers[i] + numbers[j];
            if(sum == target) return [i+1,j+1];
            j++;
        }
        i++;
    }
    return [];
};
// Runtime: 148 ms, faster than 20.81% of JavaScript online submissions for Two Sum II - Input array is sorted.
// Memory Usage: 37 MB, less than 70.27% of JavaScript online submissions for Two Sum II - Input array is sorted.


//two pointers
var twoSum = function(numbers, target) {  //best solution
    let left = 0, right = numbers.length-1;
    while(left<right){
        let sum = numbers[left] + numbers[right];
        if(sum==target){
            return [left+1,right+1];
        }else if(sum>target){
            right--;
        }else left++;
    }
    return "Not Found";
};
// Runtime: 60 ms, faster than 99.79% of JavaScript online submissions for Two Sum II - Input array is sorted.
// Memory Usage: 36.5 MB, less than 96.44% of JavaScript online submissions for Two Sum II - Input array is sorted.




