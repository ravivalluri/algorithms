const rotationPoint = (words) => {
    const firstWord = words[0];
    let floorIndex = 0;
    let ceilingIndex = words.length - 1;
    while(floorIndex<ceilingIndex) {
        const guessIndex = Math.floor(floorIndex + ((ceilingIndex-floorIndex)/2))
        if(words[guessIndex]>=firstWord) {
            floorIndex = guessIndex;
        } else {
            ceilingIndex = guessIndex;
        }
        if(floorIndex + 1 === ceilingIndex) {
            break;
        }
    }
    return ceilingIndex;
}
