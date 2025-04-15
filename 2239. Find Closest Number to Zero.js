/**
 * @param {number[]} nums
 * @return {number}
 */
var findClosestNumber = function(nums) {
    let closestNum = nums[0];

    for (let i = 0; i < nums.length; i++) {
        if (Math.abs(nums[i]) < Math.abs(closestNum)) {
            closestNum = nums[i]
        }
    }

    if (closestNum < 0 && nums.includes(Math.abs(closestNum))) {
        return Math.abs(closestNum);
    }

    return closestNum
};