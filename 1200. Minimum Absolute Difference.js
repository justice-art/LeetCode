/**
 * @param {number[]} arr
 * @return {number[][]}
 */

const minimumAbsDifference = function(arr) {
    arr.sort((a, b) => a - b);
    let minDiff = Infinity;
    const res = [];
    
    for (let i = 0; i < arr.length - 1; i++) {
        const currentDif = arr[i + 1] - arr[i];

        if (currentDif < minDiff) {
            minDiff = currentDif
            res.push(arr[i], arr[i + 1])
        } else if (currentDif === minDiff) {
            res.push(arr[i], arr[i + 1])
        }
    }

    return res
};

minimumAbsDifference([4,2,1,3])