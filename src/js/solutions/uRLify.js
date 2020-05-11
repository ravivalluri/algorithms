const uRLify = (inputString, length) => {
    let inputStringArray = inputString.split('');
    let pointer = 0;
    while(pointer<inputString.length) {
        if(inputStringArray[pointer]===' ') {
            for(let i = inputString.length-1; i>pointer+3; i--) {
                inputStringArray[i] =  inputString[i-2];
            }
            inputStringArray[pointer] = '%';
            inputStringArray[pointer+1] = '2';
            inputStringArray[pointer+2] = '0';
            console.log(inputStringArray, inputStringArray.length);
        }
        pointer++;
    }
    return inputStringArray.join('');
}
