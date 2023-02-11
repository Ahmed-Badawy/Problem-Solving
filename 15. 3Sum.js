
/*
https://leetcode.com/problems/3sum/



15. 3Sum
Medium

Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
Notice that the solution set must not contain duplicate triplets.

Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]

Example 2:
Input: nums = []
Output: []

Example 3:
Input: nums = [0]
Output: []
 

Constraints:
0 <= nums.length <= 3000
-105 <= nums[i] <= 105

*/



var threeSum = function(nums) {
    let i=0, result = [];
    nums = nums.sort((a,b)=>a-b);
    while(i<nums.length){
        let left = i+1, right = nums.length-1;
        if(i>0 && nums[i]==nums[i-1]){ i++; continue; }
        while(left<right){
            let sum = nums[i]+nums[left]+nums[right];
            if(sum==0){
                result.push([nums[i], nums[left], nums[right] ]);
                while(nums[left]==nums[left+1]) left++;
                while(nums[right]==nums[right-1]) right--;
                left++;
                right--;
            }
            else if(sum>0) right--;
            else if(sum<0) left++;
        }
        i++;
    }
    return result;
};
// Runtime: 128 ms, faster than 99.37% of JavaScript online submissions for 3Sum.
// Memory Usage: 47.4 MB, less than 51.82% of JavaScript online submissions for 3Sum.

console.log(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4]));
// console.log(threeSum([-1,0,1,1,2,-1,-4]));


// & we can pass a target like this: 
var threeSum = function(nums,target) {
    let i=0, result = [];
    nums = nums.sort((a,b)=>a-b);
    while(i<nums.length){
        let left = i+1, right = nums.length-1;
        if(i>0 && nums[i]==nums[i-1]){ i++; continue; }
        while(left<right){
            let sum = nums[i]+nums[left]+nums[right];
            if(sum==target){
                result.push([nums[i], nums[left], nums[right] ]);
                while(nums[left]==nums[left+1]) left++;
                while(nums[right]==nums[right-1]) right--;
                left++;
                right--;
            }
            else if(sum>target) right--;
            else if(sum<target) left++;
        }
        i++;
    }
    return result;
};
// Runtime: 128 ms, faster than 99.37% of JavaScript online submissions for 3Sum.
// Memory Usage: 47.4 MB, less than 51.82% of JavaScript online submissions for 3Sum.

console.log(threeSum([-1,0,1,2,-1,-4,-2,-3,3,0,4],1));
// console.log(threeSum([-1,0,1,1,2,-1,-4]));

