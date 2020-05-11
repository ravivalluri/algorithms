const permutationsPalindrome = (inputString) => {
    const chars = {};
    let currChar;
    let mulligan = false;
    let isPerm = true;
    inputString.split('').forEach(char=> {
        if(char !==' ') {
            currChar = char.toLowerCase();
            if(chars[currChar] === undefined) {
                chars[currChar] = 0;
            }
            chars[currChar]++;
        }
    });
    Object.keys(chars).forEach(char=> {
        if(chars[char]%2>0) {
            if(mulligan) {
                isPerm = false
            } else {
                mulligan = true;
            }
        }
    });
    return isPerm;
};
