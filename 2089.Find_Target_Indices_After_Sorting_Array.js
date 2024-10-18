const targetIndices = (nums, target) => {
    const sortedNums = nums.sort((a, b) => a - b);

    let res = [];
    let leftIndex = 0;
    let rightIndex = sortedNums.length - 1;

    while (leftIndex <= rightIndex) {
        const middleIndex = Math.floor((leftIndex + rightIndex) / 2);
        if (sortedNums[middleIndex] === target) {
            res.push(middleIndex)
        } else if (target < sortedNums[middleIndex]) {
            rightIndex = middleIndex - 1;
        } else {
            leftIndex = middleIndex + 1;
        }
    }

    return res;
};

const result = targetIndices([1,2,5,2,3], 2);
console.log(result);