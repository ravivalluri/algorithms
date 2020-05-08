const highestProduct = (arrayOfInts) => {
    if(arrayOfInts.length<3) {
        throw new Error('Less than 3 items');
    }
    let highest = Math.max(arrayOfInts[0], arrayOfInts[1]);
    let lowest = Math.min(arrayOfInts[0], arrayOfInts[1]);
    let highestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
    let lowestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
    let highestProductOf3 = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];
    for(let i = 2; i<arrayOfInts.length; i++) {
        let current = arrayOfInts[i];
        highestProductOf3 = Math.max(highestProductOf3, current * highestProductOf2, current * lowestProductOf2);
        highestProductOf2 = Math.max(highestProductOf2, current * highest, current * lowest);
        lowestProductOf2 = Math.min(lowestProductOf2, current*lowest, current*highest);
        highest = Math.max(highest, current);
        lowest = Math.min(lowest, current);
    }
    return highestProductOf3;
}
