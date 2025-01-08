/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const uniqueNums = new Set(nums);
    
    if(nums.length !== uniqueNums.size) {
        return true;
    }
    return false;
};

const result = containsDuplicate([1,2,3,4]);
console.log(result);