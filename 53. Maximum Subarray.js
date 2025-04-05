/**
 * @param {number[]} nums
 * @return {number}
 */


const maxSubArray = nums => {
    let max = nums[0];
    let current = Math.max(max, 0);
    
    for (let i = 1; i < nums.length; i += 1) {
        current += nums[i];
        max = Math.max(max, current);
        current = Math.max(current, 0);
    }
    
    return max;
};

console.log(maxSubArray([-8, -2, -3, -10, -100]));