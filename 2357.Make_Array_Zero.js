const minimumOperations = function(nums) {
    const newNum = new Set([...nums]);

    return newNum.has(0) ? newNum.size - 1 : newNum.size
};

console.log(minimumOperations([1,5,0,3,5]))