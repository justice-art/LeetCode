/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function(numbers, target) {
    if (numbers.length === 2) {
        return [0, 1];
    }
    
    let start = 0;
    let end = numbers.length - 1;

    while(numbers[start] + numbers[end] !== target) {
        if (numbers[start] + numbers[end] > target) {
            end--
        } else {
            start++
        }
    }

    return [start, end];
};

const result = twoSum([2,7,11,15], 9);
console.log(result);