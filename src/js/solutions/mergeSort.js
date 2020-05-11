export const mergeSort = (arrayToSort) => {
    if(arrayToSort.length < 2) {
        return arrayToSort;
    }
    const midIndex = Math.floor(arrayToSort.length/2);
    const left=arrayToSort.slice(0, midIndex);
    const right = arrayToSort.slice(midIndex);
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);
    const sortedArray = [];
    let currentLeftIndex = 0;
    let currentRightIndex = 0;
    while(sortedArray.length< left.length + right.length) {
        if(currentLeftIndex<left.length && (currentRightIndex===right.length || sortedLeft[currentLeftIndex]<sortedRight[currentRightIndex])) {
            sortedArray.push(sortedLeft[currentLeftIndex]);
            currentLeftIndex += 1;
        } else {
            sortedArray.push(sortedRight[currentRightIndex]);
            currentRightIndex += 1;
        }
    }
    return sortedArray;
}
// O(nlogn)
