/**
 * @param {number[]} height
 * @return {number}
 */

const maxArea = function(height) {
    let maxSquare = 0;
    let left = 0;
    let right = height.length - 1;

    while (left < right) {
        maxSquare = Math.max(maxSquare, (right - left) * Math.min(height[left], height[right]));

        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxSquare
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))