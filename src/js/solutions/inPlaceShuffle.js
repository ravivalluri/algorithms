const getRandom = (floor, ceiling) => {
    return Math.floor(Math.random()*(ceiling-floor+1)) + floor;
}
const inPlaceShuffle = (inputArray) => {
    if(inputArray.length <=1) return;
    for(let indexWeAreChoosingFor=0; indexWeAreChoosingFor<inputArray.length; indexWeAreChoosingFor++) {
        const randomChoiceIndex = getRandom(indexWeAreChoosingFor, inputArray.length-1);
        if(randomChoiceIndex !== indexWeAreChoosingFor) {
            const valueAtIndexWeChoseFor = inputArray[indexWeAreChoosingFor];
            inputArray[indexWeAreChoosingFor] = inputArray[randomChoiceIndex];
            inputArray[randomChoiceIndex] = valueAtIndexWeChoseFor
        }
    }
}
//Fisher-Yates Shuffle
//Knuth Shuffle
