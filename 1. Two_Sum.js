var twoSum = function(nums, target) {
    const accum = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (accum.has(target - nums[i])) {
            return [accum.get(target - nums[i]), i]
        } 
        
        accum.set(nums[i], i);
    }

    return [];
};

const res = twoSum([2,11,15,7], 9);

console.log(res);