const stringCompression = (inputString) => {
    let compressed = '';
    let currChar = '';
    let currCount = '';
    let maxCount = 1;
    for(let i = 0; i<inputString.length; i++) {
        if(currChar !== inputString[i]) {
            console.log(currChar, inputString[i], i);
            compressed = compressed + currChar + currCount;
            maxCount = Math.max(maxCount, Number(currCount));
            currChar = inputString[i];
            currCount = 1;
        } else {
            currCount++;
        }
    }
    compressed = compressed + currChar + currCount;
    maxCount =  Math.max(maxCount, Number(currCount));
    return maxCount === 1 ? inputString : compressed;
}
