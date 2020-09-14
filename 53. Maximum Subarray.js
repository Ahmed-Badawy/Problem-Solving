/*
https://leetcode.com/problems/maximum-subarray/

53. Maximum Subarray
Easy

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

Example 1:
Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6

Explanation: [4,-1,2,1] has the largest sum = 6.
Example 2:
Input: nums = [1]
Output: 1

Example 3:
Input: nums = [0]
Output: 0

Example 4:
Input: nums = [-1]
Output: -1

Example 5:
Input: nums = [-2147483647]
Output: -2147483647
 

Constraints:
1 <= nums.length <= 2 * 104
-231 <= nums[i] <= 231 - 1

*/


var maxSubArray = function(nums) {
    let nums_length = nums.length;
    let streak = [nums[0]], final = nums[0], i=1;
    while(i<nums_length){
        let streak_last_ind = streak.length-1;
        if(nums[i] > (nums[i]+streak[streak_last_ind])) {
            streak.push(nums[i]);
        }else streak.push(nums[i]+streak[streak_last_ind]);
        if(streak[streak_last_ind+1]>final) final = streak[streak_last_ind+1];
        i++;
    }
    return final;
};
/*
Runtime: 84 ms, faster than 58.43% of JavaScript online submissions for Maximum Subarray.
Memory Usage: 38.6 MB, less than 14.44% of JavaScript online submissions for Maximum Subarray.
*/


//Kadane's Algorithm(DP)
var maxSubArray2 = function(nums) {
    let streak = nums[0], final = nums[0], i=1;
    while(i<nums.length){
        streak = Math.max(nums[i],nums[i]+streak);
        if(streak>final) final = streak;
        i++;
    }
    return final;
};
/*
Runtime: 64 ms, faster than 99.75% of JavaScript online submissions for Maximum Subarray.
Memory Usage: 36.6 MB, less than 96.62% of JavaScript online submissions for Maximum Subarray.
*/
console.log(maxSubArray2([-10,20,-40,1,2,3,-1,5,11]));




// Divide and Conquer
const maxSub = (nums, left, right) => {
    if(left === right)
        return nums[left]
    else if(left > right)
        return Number.NEGATIVE_INFINITY
    
    let mid = Math.floor((left + right) / 2)
    let lmax = maxSub(nums, left, mid - 1)
    let rmax = maxSub(nums, mid + 1, right)
    
    let leftExtendMaxSum = rightExtendMaxSum = 0
    for(let i = mid - 1, tempTotal = 0; i >= left; --i)
        leftExtendMaxSum = Math.max(tempTotal += nums[i], leftExtendMaxSum)

    for(let i = mid + 1, tempTotal = 0; i <= right; ++i)
        rightExtendMaxSum = Math.max(tempTotal += nums[i], rightExtendMaxSum)

    return Math.max(leftExtendMaxSum + nums[mid] + rightExtendMaxSum, lmax, rmax)
}

var maxSubArray = nums =>
    maxSub(nums, 0, nums.length - 1)