export const squareArrayInPlace = (intArray) => {
    intArray.forEach((int, index)=> {
        intArray[index]*=int;
    });
}

export const squareArrayOutPlace = (intArray) => {
    const squareArray = [];
    intArray.forEach((int, index) => {
        squareArray[index] = Math.pow(int, 2);
    })
    return squareArray;
}
