/*
https://leetcode.com/problems/remove-duplicates-from-sorted-array/


26. Remove Duplicates from Sorted Array
Easy

Given a sorted array nums, remove the duplicates in-place such that each element appear only once and return the new length.
Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Example 1:
Given nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
It doesn't matter what you leave beyond the returned length.

Example 2:
Given nums = [0,0,1,1,1,2,2,3,3,4],
Your function should return length = 5, with the first five elements of nums being modified to 0, 1, 2, 3, and 4 respectively.

It doesn't matter what values are set beyond the returned length.

Clarification:
Confused why the returned value is an integer but your answer is an array?

Note that the input array is passed in by reference, which means modification to the input array will be known to the caller as well.

Internally you can think of this:
// nums is passed in by reference. (i.e., without making a copy)
int len = removeDuplicates(nums);

// any modification to nums in your function would be known by the caller.
// using the length returned by your function, it prints the first len elements.
for (int i = 0; i < len; i++) {
    print(nums[i]);
}


*/


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {  //my solution
    let counter = {}, i=0;
    while(i<nums.length){
        if(counter[nums[i]]!=undefined){ 
            nums.splice(i,1);
            i--;
        }
        else counter[nums[i]] = true;
        i++;
    }
    return nums.length;
};
// Runtime: 140 ms, faster than 17.07% of JavaScript online submissions for Remove Duplicates from Sorted Array.
// Memory Usage: 40.8 MB, less than 5.01% of JavaScript online submissions for Remove Duplicates from Sorted Array.



var removeDuplicates = function(nums) { //fastest solution
    if(nums.length <= 1) {
        return nums.length;
    }
    var k = 1;
    for(var i = 1; i < nums.length; i++) {
        if(nums[i] != nums[i-1]){
            nums[k++] = nums[i];
        }
    }
    return k;
};
// Runtime: 84 ms, faster than 91.43% of JavaScript online submissions for Remove Duplicates from Sorted Array.
// Memory Usage: 39.5 MB, less than 14.76% of JavaScript online submissions for Remove Duplicates from Sorted Array.
