/**
 * @param {number[]} nums
 * @return {number[]}
 */

const productExceptSelf = function(nums) {
    const output = [];
    let prefixSum = 1;
    let sufixSum = 1;

    for (let j = nums.length - 1; j >= 0; j--) {
        output[j] = sufixSum;
        sufixSum *= nums[j];
    }

    for (let i = 0; i < nums.length; i++) {
        output[i] *= prefixSum;
        prefixSum *= nums[i];
    }

    return output;
};

const result = productExceptSelf([1,2,3,4]);
console.log(result);