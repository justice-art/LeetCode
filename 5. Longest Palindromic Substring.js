// brute force solution: TC: O(n^3)
var longestPalindrome = function(s) {
    let maxPal = s[0];
    let start = 0;

    while (start < s.length - 1) {
        for (let end=start; end < s.length; end++) {
            const currentStr = s.substring(start, end + 1);

            if (isPalindrome(currentStr)) {
                maxPal = maxPal.length < currentStr.length ? currentStr : maxPal
            }
        }

        start++;
    }

    return maxPal
};

function isPalindrome(str) {
    return str === str.split('').reverse().join('');
}

console.log(longestPalindrome('babad'));