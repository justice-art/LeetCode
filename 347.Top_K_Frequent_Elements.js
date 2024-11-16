/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

var topKFrequent = function(nums, k) {
    const elements = {};
    const uniqueValues = [...new Set(nums)];
    const result = [];

    for (let i = 0; i < uniqueValues.length; i++) {
        const count = nums.filter(el => el === uniqueValues[i]).length;
        elements[uniqueValues[i]] = count;
    }

    const sortedElements = Object.entries(elements);
    sortedElements.sort((a , b) => b[1] - a[1]);

    console.log(sortedElements);

    for (let i = 0; i < k; i++) {
        result.push(+sortedElements[i][0])
    }
    
    return result;
};



const res = topKFrequent([2,2,3,1,1,1], 2);
console.log(res)
