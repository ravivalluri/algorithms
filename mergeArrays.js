import {mergeSort} from "./mergeSort";

export const mergeArrays = (array1, array2) => {
    const mergedArray = [];
    let currentIndex1 = 0;
    let currentIndex2 = 0;
    let currentIndexMerged = 0;
    while (currentIndexMerged < (array1.length + array2.length)) {
        const array1Exhausted = currentIndex1 >=array1.length;
        const array2Exhausted = currentIndex2 >= array2.length;
        if(array1Exhausted && (array2Exhausted|| (array1[currentIndex1] < array2[currentIndex2]))) {
            mergedArray[currentIndexMerged] = array1[currentIndex1];
            currentIndex1++;
        } else {
            mergedArray[currentIndexMerged] = array2[currentIndex2];
            currentIndex2++;
        }
        currentIndexMerged++;
    }

    return mergedArray;
}
