//BruteForce Approach
const getMaxProfitBruteForce = (stockPrices) => {
    let maxProfit = 0;
    for(let outerTime = 0; outerTime<stockPrices.length; outerTime++) {
        for(let innerTime = 0; innerTime<stockPrices.length; innerTime++) {
            const earlierTime = Math.min(outerTime, innerTime);
            const laterTime = Math.max(outerTime, innerTime);
            const earlierPrice = stockPrices[earlierTime];
            const laterPrice = stockPrices[laterTime];
            const potentialProfit = laterPrice - earlierPrice;
            maxProfit = Math.max(maxProfit, potentialProfit);
        }
    }
    return maxProfit;
}

// Better Approach

const getMaxProfit1 = (stockPrices) => {
    if(stockPrices.length<2) {
        throw new Error('Need more than 2 to show profit');
    }
    let minPrice = stockPrices[0];
    let maxProfit = stockPrices[1]-stockPrices[0];
    for(let i = 0; i<stockPrices.length; i++) {
        const currentPrice = stockPrices[i];
        const potentialProfit = currentPrice - minPrice;
        maxProfit = Math.max(maxProfit, potentialProfit);
        minPrice = Math.min(currentPrice, minPrice);
    }
    return maxProfit;
}
