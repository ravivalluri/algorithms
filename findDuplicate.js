//O(n), O(n)
const findDuplicates1 = (inputArray) => {
    const numbersSeen = new Set();
    for(let i = 0; i<inputArray.length; i++) {
        const number = inputArray[i];
        if(numbersSeen.has(number)) {
            return number;
        }
        numbersSeen.add(number);
    }
    throw new Error('no duplicate numbers');
}
//O(n2), O(1)

const findDuplicates2 = (inputArray) => {
    for(let i=0; i<inputArray.length; i++) {
        let hasSeen = false;
        for(let j =0; j<inputArray.length; j++) {
            const number = inputArray[j];
            if(number === i) {
                if(hasSeen) {
                    return number;
                } else {
                    hasSeen = true;
                }
            }
        }
    }
    throw new Error('no duplicates');
}

//O(nlogn), O(1)

const findDuplicates3 = (inputArray) => {
    let floor = 1;
    let ceiling = inputArray.length - 1;
    while(floor<ceiling) {
        const midpoint = Math.floor(floor + ((ceiling-floor)/2));
        const lowRangeFloor = floor;
        const lowRangeCeiling = midpoint;
        const highRangeFloor = midpoint+1;
        const highRangeCeiling = ceiling;
        const distinctPossibleIntegersInLowRange = lowRangeCeiling - lowRangeFloor + 1;
        let itemsInLowRange = 0;
        inputArray.forEach(item=> {
            if(item>=lowRangeFloor && item<=lowRangeCeiling) {
                itemsInLowRange += 1;
            }
        });
        if(itemsInLowRange>distinctPossibleIntegersInLowRange) {
            floor = lowRangeFloor;
            ceiling = lowRangeCeiling;
        } else {
            floor = highRangeFloor;
            ceiling = highRangeCeiling;
        }
    }
    return floor;
}
