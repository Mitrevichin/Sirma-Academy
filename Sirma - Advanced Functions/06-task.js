function multiply(a, b, c) {
    return a * b * c;
}

function curryMultiply(a) {
    return function (b) {
        return function (c) {
            return multiply(a, b, c);
        };
    };
}

console.log(curryMultiply(2)(3)(4));
