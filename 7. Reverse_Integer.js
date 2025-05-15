const reverse = function(x) {
    const str = x.toString();
    let reversedStr = '';

    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i] !== '-') {
            reversedStr += str[i];
        }   
    }

    const reversedNum = Math.sign(x) * reversedStr;

    if (Math.abs(reversedNum) > ((2 ** 31) - 1)) {
        return 0;
    } else {
        return reversedNum;
    }
};

console.log(reverse(123))