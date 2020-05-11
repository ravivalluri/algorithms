const isRotationString = (inputString1, inputString2) => {
    if(inputString1.length !== inputString2.length) return false;
    return (inputString2 + inputString2).includes(inputString1);
}
