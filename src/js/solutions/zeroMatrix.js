const checkZeros = (inputMatrix) => {
    let matrixHeight = inputMatrix.length;
    let matrixWidth = inputMatrix[0].length;
    let rowsToZero = {};
    let columnsToZero = {};
    for(let i = 0; i<matrixHeight; i++) {
        for(let j =0; i<matrixWidth; j++) {
            if(inputMatrix[i][j]===0) {
                rowsToZero[i] = true;
                columnsToZero[j] = true;
            }
        }
    }
    return {
        rowsToZero: rowsToZero,
        columnsToZero: columnsToZero
    };
}

const printMatrix = (inputMatrix) => {
    for(let i = 0; i<inputMatrix.length; i++) {
        console.log(inputMatrix[i]);
    }
}

const zeroToColumn = (inputMatrix, column) => {
    for(let i = 0; i<inputMatrix.length; i++) {
        inputMatrix[i][column] = 0;
    }
}

const zeroToColumns = (inputMatrix, zeroScan) => {
    for(let column in zeroScan.columnsToZero) {
        zeroToColumn(inputMatrix, Number(column))
    }
}

const zeroToRow = (inputMatrix, row) => {
    for(let i = 0; i<inputMatrix.length; i++) {
        inputMatrix[row][i] = 0;
    }
}

const zeroToRows = (inputMatrix, zeroScan) => {
    for(let row in zeroScan.rowsToZero) {
        zeroToRow(inputMatrix, Number(row));
    }
}

const zeroMatrix = (inputMatrix) => {
    if(inputMatrix.length === 0) return;
    const zeroScan = checkZeros(inputMatrix);
    zeroToColumns(inputMatrix, zeroScan);
    zeroToRows(inputMatrix, zeroScan);
}
