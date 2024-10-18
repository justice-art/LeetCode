const sortArray = (nums) => {
    if (nums.length < 2) {
        return nums;
    }

    const middleIndex = Math.floor(nums.length / 2);
    const leftArr = nums.slice(0, middleIndex);
    const rightArr = nums.slice(middleIndex);

    return merge(sortArray(leftArr), sortArray(rightArr));
}

const merge = (leftArr, rightArr) => {
    const sortedArr = [];

    while(leftArr.length && rightArr.length) {
        if (leftArr[0] < rightArr[0]) {
            sortedArr.push(leftArr.shift())
        } else {
            sortedArr.push(rightArr.shift())
        }
    }

    return [...sortedArr, ...leftArr, ...rightArr]
}

const result = sortArray([5,1,1,2,0,0, -8, -2]);
console.log(result);