const isFcfs = (takeout, dined, served) => {
    let takeoutIndex = 0
    let dinedIndex = 0;
    let takeoutMaxIndex = takeout.length - 1;
    let dinedMaxIndex = dined.length - 1

    for ( let i = 0; i < served.length; i++) {
        let order = served[i];
        if(takeoutIndex<=takeoutMaxIndex && order === takeout[takeoutIndex]) {
            takeoutIndex++;
        } else if(dinedIndex<=dinedMaxIndex && order === dined[dinedIndex]){
            dinedIndex++;
        } else {
            return false;
        }
    }
    return !(dinedIndex !== dined.length || takeoutIndex !== takeout.length);
}
