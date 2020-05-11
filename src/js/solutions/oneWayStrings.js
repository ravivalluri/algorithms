const oneWayStrings = (inputString1, inputString2) => {
    if(Math.abs(inputString2.length-inputString1.length)>1) {
        return false;
    }
    let newString1 = inputString1.length<inputString2.length?inputString1:inputString2;
    let newString2=inputString2.length<inputString1.length?inputString2:inputString1;
    let index1 = 0;
    let index2 = 0;
    let foundDiff = false;
    while(index1<newString2.length || index2<newString1.length) {
        if(newString1.charAt(index1) !== newString2.charAt(index2)) {
            if(foundDiff) {
                return false;
            }
        }
    }
}
