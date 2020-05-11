const isPermutationOfStrings = (inputString1, inputString2) => {
    if(inputString1.length!==inputString2.length) {
        return false;
    } else {
        const sortedString1 = inputString1.split('').sort().join('');
        const sortedString2 = inputString2.split('').sort().join('');
        return sortedString1 === sortedString2;
    }
}

