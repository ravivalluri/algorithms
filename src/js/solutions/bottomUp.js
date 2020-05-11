//O(n)
const topDown1ToN = (n) => {
    return (n>1) ? (n*topDown1ToN(n-1)) : 1;
}
//O(1)
export const bottomUp1ToN = (n) => {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
}
