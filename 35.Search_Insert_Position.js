const searchInsert = (nums, target) => {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        const middle = start + Math.floor((end - start) / 2);
        if (target === nums[middle]) {
            return middle;
        } else if(target < nums[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
    }

    return start;
};

const result = searchInsert([2, 5, 6, 10, 12], 122);
console.log(result);