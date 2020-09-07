// https://leetcode.com/problems/implement-strstr/


// 28. Implement strStr()
// Easy

// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:
// Input: haystack = "hello", needle = "ll"
// Output: 2

// Example 2:
// Input: haystack = "aaaaa", needle = "bba"
// Output: -1

// Clarification:
// What should we return when needle is an empty string? This is a great question to ask during an interview.
// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to C's strstr() and Java's indexOf().

// Constraints:
// haystack and needle consist only of lowercase English characters.


var strStr = function(haystack, needle) {
	if (!needle.length) {
		return 0;
	}

	for (let i = 0; i <= haystack.length - needle.length; i++) {
		if (haystack[i] === needle[0]) {
			if (haystack.substring(i, i + needle.length) === needle) {
				return i;
			}
		}
	}
	return -1;
};
// Runtime: 72 ms, faster than 86.85% of JavaScript online submissions for Implement strStr().
// Memory Usage: 37 MB, less than 64.01% of JavaScript online submissions for Implement strStr().



var strStr2 = function(haystack, needle) { //my solution
    if(needle=="") return 0;
    if(haystack=="") return -1;
    let return_ind = -1,i=0;
    while(i<haystack.length){
        let elm = haystack[i];
        for(let j=0;j<needle.length;j++){
//             console.log({i,j,elm},haystack[j+i],needle[j])
            if(haystack[j+i]!=needle[j]){
                return_ind = -1;
                break;
            }
            if(j==0) return_ind = i;
        }
        if(return_ind!=-1) return return_ind;
        i++;
    }
    return return_ind; 
};
// Runtime: 2672 ms, faster than 10.64% of JavaScript online submissions for Implement strStr().
// Memory Usage: 37.5 MB, less than 42.35% of JavaScript online submissions for Implement strStr().



//two pointers solution
var strStr3 = function(haystack, needle) {
  if (needle === '') return 0;
  if (haystack.length < needle.length) return -1;
  let i = 0, j = 0;
  for (; i < haystack.length; i += 1) {
    if (haystack[i] === needle[j]) {
      if (j === needle.length - 1) return i - j;
      j += 1;
    } else {
      i -= j;
      j = 0;
    }
  }
  return -1;
};
// Runtime: 76 ms, faster than 74.58% of JavaScript online submissions for Implement strStr().
// Memory Usage: 37 MB, less than 60.33% of JavaScript online submissions for Implement strStr().




