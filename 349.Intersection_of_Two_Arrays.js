const intersection = (nums1, nums2) => {
    let res = new Set();
    
    for(let i = 0; i < nums1.length; i++) {
        if (nums2.includes(nums1[i])) {
            res.add(nums1[i])
        }
    }

    return [...res]
};

const result = intersection([5, 5, 16, 10, 2], [2, 5, 6, 5, 5]);
console.log(result);