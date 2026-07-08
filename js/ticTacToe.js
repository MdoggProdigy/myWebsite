function ticTacToe() {
    var master = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];
    rotate180(master);
    console.log(master);
}

function transpose(matrix) {
    return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
}

function rotate90(matrix) {
    return transpose(matrix).map(row => row.reverse());
}

function rotate180(matrix) {
    var revMatrix = matrix.reverse();
    return revMatrix.map(row => row.reverse());
}

