function getFibonacci() {
    let current = 0;
    let next = 1;

    return function () {
        let result = current;
        current = next;
        next = result + next;
        return result;
    };
}

let fibonacci = getFibonacci();

console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci());
console.log(fibonacci()); 
