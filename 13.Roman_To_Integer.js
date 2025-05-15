const romanVal = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
}

var romanToInt = function (s) {
    let acc = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        const current = s[i];
        const next = s[i - 1];

        if (romanVal[current] > romanVal[next]) {
            acc += romanVal[current] - romanVal[next];
            i--;
        } else {
            acc += romanVal[current]
        }
    }
    return acc
};

console.log(romanToInt("XIV"))