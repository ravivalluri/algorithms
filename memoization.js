//recursive approach
const fib = (n) => {
    if(n<0) {
        throw new Error(
            'negative number'
        )
    }
    if(n===0 || n===1) {
        return n;
    }
    console.log(`compute fib(${n}`);
    return fib(n-1) + fib(n-2);
}

//memo approach

export class Fibber {
    constructor() {
        this.memo ={};
    }
    fib(n) {
        if(n<0){
            throw new Error(
                'Negative Number'
            )
        } else if(n===0 || n===1) {
            return n;
        }
        if(this.memo.hasOwnProperty(n)) {
            console.log(`grabbing memo [${n}]`);
            return this.memo[n];
        }
        console.log(`compute fib(${n})`);
        const result = this.fib(n-1)+this.fib(n-2);
        this.memo[n] = result;
        return result;
    }
}
