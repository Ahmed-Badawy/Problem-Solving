/*
https://leetcode.com/problems/longest-common-prefix/

14. Longest Common Prefix
Easy

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
Note:

All given inputs are in lowercase letters a-z.

*/



/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) { //fastest solution
    if(!strs.length) return "";
    let prefix = strs[0];
    let i = 1;
    while(i < strs.length && prefix.length ){
        let str = strs[i];
        if(str.indexOf(prefix)==0){
            i++;
        } else {
            let temp_prefix = prefix.split("");
            temp_prefix.pop();
            temp_prefix = temp_prefix.join("");
            prefix = temp_prefix;
        }
    }
    return prefix;
};
// Runtime: 72 ms, faster than 94.23% of JavaScript online submissions for Longest Common Prefix.
// Memory Usage: 37.3 MB, less than 59.86% of JavaScript online submissions for Longest Common Prefix.


var longestCommonPrefix = function(strs) {
    if(!strs.length) return "";
    if(strs.length == 1) return strs[0];

    let arrays = strs.map(str=>str.split(""));
    let i = 0, prefix = "";
    while(i<arrays[0].length && prefix!==false){
        for(let j=1; j<arrays.length ;j++){
            if(arrays[0][i]!=arrays[j][i]){
                return prefix;
            }
            if(j==arrays.length-1) prefix += arrays[0][i];
        }
        i++;
    }    
    return prefix;
};
// Runtime: 88 ms, faster than 50.79% of JavaScript online submissions for Longest Common Prefix.
// Memory Usage: 39.3 MB, less than 8.82% of JavaScript online submissions for Longest Common Prefix.



var longestCommonPrefix = function(strs) { //mysolution
    let prefixes = {};
    for(let str of strs){
        for(let c_ind in str){
            c_ind = parseInt(c_ind);
            prefixes[[...str].splice(0,c_ind+1).join("")] = prefixes[[...str].splice(0,c_ind+1).join("")]+1 || 1;
        }
    }
    let longestPrefix = "";
    let longestPrefixLength = 0;
    for(let key in prefixes){
        let val = prefixes[key];
        if(val>=longestPrefixLength){
//             console.log({key,val,prefixes});
            if(key.length>longestPrefix.length){
                longestPrefixLength = val;
                longestPrefix = key;
            }
        }
    }
    return longestPrefixLength==strs.length ? longestPrefix : "";
};
// Runtime: 308 ms, faster than 5.79% of JavaScript online submissions for Longest Common Prefix.
// Memory Usage: 43.9 MB, less than 5.03% of JavaScript online submissions for Longest Common Prefix.



console.log(longestCommonPrefix(["flower","flow","flight","floor"]));
console.log(longestCommonPrefix([]));
console.log(longestCommonPrefix(["flower"]));
console.log(longestCommonPrefix(["flower","flow","lafla"]));

