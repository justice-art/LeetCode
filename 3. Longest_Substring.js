/**
 * @param {string} s
 * @return {number}
 */

const lengthOfLongestSubstring = function(s) {
    if (s.length < 2) {
        return s.length;
    }

    let start = 0;
    let maxSize = 0;
    let charSet = new Set();

    for(let end = 0; end < s.length; end++) {

        while(charSet.has(s[end])) {
            charSet.delete(s[start]);
            start++;
        }

        charSet.add(s[end]);
        maxSize = Math.max(maxSize, end - start + 1);
    }

    return maxSize;
};


const result = lengthOfLongestSubstring("abkkklpp");
console.log(result);