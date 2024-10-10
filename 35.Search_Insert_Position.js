const searchInsert = (nums, target) => {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        const middle = Math.floor((start + end) / 2);
        if (target === nums[middle]) {
            return middle;
        } else if(nums[middle] > target) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }

    return start;
};

const result = searchInsert([2, 5, 6, 10, 12], 122);
console.log(result);