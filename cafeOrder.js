const cafeOrder = (takeOut, dineIn, served) => {
    let takeOutIndex = 0;
    let dineInIndex = 0;
    let takeOutMaxIndex = takeOut.length - 1;
    let dineInMaxIndex = dineIn.length - 1;
    for(let i = 0; i<served.length; i++) {
        let order = served[i];
        if(takeOutIndex <= takeOutMaxIndex && order === takeOut[takeOutIndex]){
            takeOutIndex++
        } else if(dineInIndex <= dineInMaxIndex && order === dineIn[dineInIndex]){
            dineInIndex++;
        } else {
            return false;
        }
    }
    if(dineInIndex != dineIn.length || takeOutIndex != takeOut.length) {
        return false;
    }
    return true;
}
