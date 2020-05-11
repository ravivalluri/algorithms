const isUnique = (inputString) => {
    for(let i=0; i<inputString.length; i++) {
        for(let j=0; j<inputString.length; j++) {
            if(inputString[i]===inputString[j]){
                return false;
            }
        }
    }
    return true;
}
