var isValid = function(s) {
    const stack = [];
    const brackets = {
        '}': '{',
        ')': '(',
        ']': '['
    }

    const openBrackets = Object.values(brackets);

    for (let bracket of s) {
        if (openBrackets.includes(bracket)) {
                stack.push(bracket);
            } else if (brackets[bracket] !== stack.pop()) {
                return false;
            }
    }

    return stack.length === 0;
};

console.log(isValid("([])"))