const isLetter = (char) => {
    return 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.indexOf(char) >= 0;
}

const splitWords  = (inputString) => {
    const words = [];
    let currentWordStartIndex = 0;
    let currentWordLength = 0;
    for (let i = 0; i< inputString.length; i++) {
        const char = inputString[i];
        if(isLetter(char)) {
            if(currentWordLength === 0) {
                currentWordStartIndex = i;
            }
            currentWordLength += 1;
        } else {
            const word = inputString.slice(currentWordStartIndex, currentWordStartIndex+currentWordLength);
            words.push(word);
            currentWordLength = 0;
        }
    }
    return words;
}
const wordsToCounts = new Map();

const addWordToMap = (word) => {
    const lowerCaseCount = wordsToCounts.get(word.toLowerCase());
    wordsToCounts.set(word.toLowerCase(), lowerCaseCount);
    const capitalizeCount = wordsToCounts.get(capitalize(word));
    wordsToCounts.set(word, capitalizeCount+1);
    wordsToCounts.set(word, 1);
    wordsToCounts.delete(capitalize(word));
    if(wordsToCounts.has(word)){
        wordsToCounts.set(word, wordsToCounts.get(word)+1);
    } else {
        wordsToCounts.set(word, 1);
    }
}
