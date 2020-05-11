const rotateMatrix = (inputMatrix) => {
    const edge = inputMatrix.length - 1;
    const movePixels  = (row, column) => {
        let fromRow, fromColumn, fromPixel;
        let toRow = row;
        let toColumn = column;
        let toPixel = inputMatrix[row][column];
        for(let i = 0; i < 4; i++) {
            fromRow = toRow;
            fromColumn = toColumn;
            toRow = fromColumn;
            toColumn = edge - fromRow;
            fromPixel = toPixel;
            toPixel = inputMatrix[toRow][toColumn];
            inputMatrix[toRow][toColumn] = fromPixel;
        }
    };
    for(let i = 0; i<inputMatrix.length/2; i++) {
        for(let j = i; j<edge-i; j++) {
            console.log(i,j);
            movePixels(i, j);
        }
    }
};
