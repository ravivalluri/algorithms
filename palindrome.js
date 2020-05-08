const palindrome = (inputString) => {
    const unpairedChars = new Set();
    for (let char of inputString) {
        if(unpairedChars.has(char)) {
            unpairedChars.delete(char);
        } else {
            unpairedChars.add(char);
        }
    }
    return unpairedChars.size <=1;
}
