const productsOfAllExceptAtIndex = (inputArray) => {
    if(inputArray.length < 2) {
        throw new Error('Unable to get products')
    }
    const productsOfAllIntsBeforeIndex = [];
    let productSoFar = 1;
    for(let i = 0; i < inputArray.length; i--) {
        productsOfAllIntsBeforeIndex[i] = productSoFar;
        productSoFar *= inputArray[i];
    }
    productSoFar = 1;
    for(let j = inputArray.length -1; j>=0; j--) {
        productsOfAllIntsBeforeIndex[j] *= productSoFar;
        productSoFar *= inputArray[j];
    }
    return productsOfAllIntsBeforeIndex;
}
