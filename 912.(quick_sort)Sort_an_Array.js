const sortArray = (nums) => {
    if (nums.length < 2) {
        return nums;
    }

    let left = [];
    let right = [];
    const pivot = nums[nums.length - 1];

    for(let i = 0; i < nums.length - 1; i++) {
        if(nums[i] < pivot) {
            left.push(nums[i]);
        } else {
            right.push(nums[i]);
        }
    }

    return [...sortArray(left), pivot, ...sortArray(right)]
}

const result = sortArray([5,1,1,2,0,0, -8, -2]);
console.log(result);