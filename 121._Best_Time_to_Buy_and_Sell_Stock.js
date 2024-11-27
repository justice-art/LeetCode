/**
 * @param {number[]} prices
 * @return {number}
 */

const maxProfit = function(prices) {
    let max_profit = 0;
    let leftPointer = 0;
    let rightPointer = 1;

    while (rightPointer < prices.length) {
        if (prices[leftPointer] > prices[rightPointer]) {
            leftPointer = rightPointer;
        } else {
            const profit = prices[rightPointer] - prices[leftPointer];
            if (profit > max_profit) {
                max_profit = profit;
            }
        }

        rightPointer++;
    }

    return max_profit;
};

const result = maxProfit([7,1,5,3,6,4]);
console.log(result);