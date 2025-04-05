function isValidSudoku(board) {
    const uniqueValues = new Set();

    for(let i = 0; i < 9; i++) {
        for(let j = 0; j < 9; j++) {
            const value = board[i][j]; 

            if (value !== ".") {
                const rowKey = `row-${i}-${value}`;
                const colKey = `col-${j}-${value}`;
                const boxKey = `box-${Math.floor(i / 3)}-${Math.floor(j / 3)}-${value}`;

    
                if (uniqueValues.has(rowKey) || uniqueValues.has(colKey) || uniqueValues.has(boxKey)) {
                    return false;
                }
    
                uniqueValues.add(rowKey)
                uniqueValues.add(colKey)
                uniqueValues.add(boxKey)
            }
        }
    }

    return true;
}


// Example usage:
const board = [
    ['5', '3', '.', '.', '7', '.', '.', '.', '.'],
    ['6', '.', '.', '1', '9', '5', '.', '.', '.'],
    ['.', '9', '8', '.', '.', '.', '.', '6', '.'],
    ['8', '.', '.', '.', '6', '.', '.', '.', '3'],
    ['4', '.', '.', '8', '.', '7', '.', '.', '1'],
    ['7', '.', '.', '.', '2', '.', '.', '.', '6'],
    ['.', '6', '.', '.', '.', '.', '2', '8', '.'],
    ['.', '.', '.', '4', '1', '9', '.', '.', '5'],
    ['.', '.', '.', '.', '8', '.', '.', '7', '9']
];

console.log(isValidSudoku(board)); // Output: true